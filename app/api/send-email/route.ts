import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER || "pcoskillacquisitionprogram@gmail.com",
      pass: process.env.EMAIL_PASSWORD || "default-password", // Fallback for local testing
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER || "pcoskillacquisitionprogram@gmail.com",
    subject: `New Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    const err = error as Error; // Type assertion to Error
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
