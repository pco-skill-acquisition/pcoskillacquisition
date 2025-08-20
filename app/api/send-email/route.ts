import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  console.log("Env vars:", process.env.EMAIL_USER, process.env.EMAIL_PASSWORD);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER || "pcoskillacquisitionprogram@gmail.com",
      pass: process.env.EMAIL_PASSWORD || "default-password",
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
    const err = error as Error;
    console.error("Email error:", err.message);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
