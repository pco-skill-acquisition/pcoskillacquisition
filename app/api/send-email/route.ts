import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  console.log("Received request:", { name, email, message });
  console.log("Env vars:", {
    user: process.env.EMAIL_USER,
    password: process.env.EMAIL_PASSWORD ? "****" : "undefined",
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER || "pcoskillacquisitionprogram@gmail.com",
      pass: process.env.EMAIL_PASSWORD || "default-password",
    },
  });

  console.log("Transporter config:", transporter.options);

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER || "pcoskillacquisitionprogram@gmail.com",
    subject: `New Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    console.log("Sending email with options:", mailOptions);
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    return NextResponse.json({ success: true });
  } catch (error) {
    const err = error as Error;
    console.error("Email error:", err.message, err.stack);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
