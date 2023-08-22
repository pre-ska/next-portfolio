"use server";

import React from "react";
import { Resend } from "resend";

import ContactFormEmail from "@/email/contact-form-email";
import { getErrorMessage, validateString } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // zbog typescripta moramo provjeriti
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid senderEmail",
    };
  }
  // zbog typescripta moramo provjeriti
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Portfolio form <onboarding@resend.dev>",
      to: process.env.RECEIVER_EMAIL as string,
      reply_to: senderEmail,
      subject: "Message from contact form",
      // text: message as string,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return { data };
};
