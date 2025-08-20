import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "pcoskillacquisitionprogram@gmail.com",
      pass: process.env.EMAIL_PASSWORD || "default-password", // Fallback for local testing
    },
  });

  const mailOptions = {
    from: email,
    to: "pcoskillacquisitionprogram@gmail.com",
    subject: `New Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
