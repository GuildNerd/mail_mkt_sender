import express from 'express';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { SendMail } from './send-mail';

export const routes = express.Router();

routes.post('/sendEmail', async (req, res) => {
    const { subject, body } = req.body;

    const nodemailerMailAdapter = new NodemailerMailAdapter()
    const sendMail = new SendMail(nodemailerMailAdapter)
    await sendMail.execute(subject,body)

    return res.status(201).send({resposta: 'Deu certo!'});
});