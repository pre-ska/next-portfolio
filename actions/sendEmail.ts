"use server";

import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";

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
      error: "Invalid senderEmail",
    };
  }

  try {
    await resend.emails.send({
      from: "Portfolio form <onboarding@resend.dev>",
      to: "wolfwar@outlook.com",
      reply_to: senderEmail as string,
      subject: "Message from contact form",
      text: message as string,
      // react:
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
