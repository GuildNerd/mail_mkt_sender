import { MailAdapter } from "./adapters/mail-adapter"

export class SendMail {
    constructor(
        private mailAdapter: MailAdapter,
    ) {}

    async execute(subject: string, body: string) {
        await this.mailAdapter.sendMail({
            subject,
            body
        })
    }
}