import Mailgen from "mailgen";
import nodemailer from "nodemailer";

// Send Mail Configuration with Mailgen
const sendEmail = async (options) => {
  // Step 1: Initialize mailgen instance with default theme and brand configuration
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "VECROS BLOG APP",
      link: "https://www.linkedin.com/in/manojoffcialmj/",
    },
  });

  // Step 2: Generate the plaintext version of the e-mail (for clients that do not support HTML)
  const emailTextual = mailGenerator.generatePlaintext(options.mailgenContent);

  // Step 3: Generate an HTML email with the provided contents
  const emailHtml = mailGenerator.generate(options.mailgenContent);

  // Step 4: Create a nodemailer transporter instance which is responsible to send a mail
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  // Step 5: Create the mail metadata
  const mail = {
    from: "jaikhatushyambabaji32@gmail.com",
    to: options.email,
    subject: options.subject,
    text: emailTextual,
    html: emailHtml,
  };

  // Step 6: Send mail to the user's email
  try {
    const response = await transporter.sendMail(mail);
    return response;
  } catch (error) {
    return null;
  }
};

// It designs the forgot password mail
const forgotPasswordMailgenContent = (username, passwordResetUrl) => {
  return {
    body: {
      name: username,
      intro: "We got a request to reset the password of our account",
      action: {
        instructions:
          "To reset your password click on the following button or link:",
        button: {
          color: "#006d77",
          text: "Reset password",
          link: passwordResetUrl,
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };
};

export {
  sendEmail,
  forgotPasswordMailgenContent,
};
