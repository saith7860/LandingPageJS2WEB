import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
 host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

export const sendEmail = async ({
  to,
  subject,
  html
}: EmailOptions) => {

  const info = await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject,
    html
  });
  return info;

};
export default sendEmail;