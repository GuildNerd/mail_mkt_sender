import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "501fa7a9ca399e",
      pass: "35045b29ec58e6"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Marketing <marketing@tisige.com>',
            to: 'Luiz Bitencourt <luizarthur.lp@gmail.com>',
            subject,
            html: body,
        });
    };
}