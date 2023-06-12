import { document } from "postcss";
import { useState } from "react";

function MailSender() {
    function handleFormSubmit(event) {
        event.preventDefault();
        if(emailSubject && emailBody)
            sendRequest(emailSubject, emailBody);
        else
            setEmailFeedback('Todos os campos devem ser preenchidos!')
    }

    async function sendRequest(subject, body) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ subject, body })
        }

        await fetch('http://localhost:9000/sendEmail', requestOptions)
        .then(response => {
            if(response.ok){
                setEmailFeedback('Email enviado com sucesso!')
            }
            else{
                setEmailFeedback('Ocorreu um erro durante o envio do email, tente novamente.')
            }
        })
    }

    function handleEmailSubjectChange(event) {
        setEmailSubject(event.target.value);
        setEmailFeedback('');
    }

    function handleEmailBodyChange(event) {
        setEmailBody(event.target.value);
        setEmailFeedback('');
    }

    const [emailSubject, setEmailSubject] = useState('');
    const [emailBody, setEmailBody] = useState('');
    const [emailFeedback, setEmailFeedback] = useState('');
    
    return (
        <div>
            <div className="mt-4">
                <h1 className="text-2xl">Envio de Mail Marketing para Clientes</h1>
            </div>
            <div className="flex items-center justify-center flex-col">
                <form onSubmit={handleFormSubmit}>
                    <div className="my-8 mx-0 items-center text-center">
                        <label for="fsubject">Título do email</label><br></br>
                        <input type="text" id="fsubject" name="fsubject" className="inputs" placeholder="Insira aqui o título do email" onChange={handleEmailSubjectChange}></input>
                    </div>
                    <div className="my-8 mx-0 items-center text-center">
                        <label for="fmailbody">Corpo do email</label><br></br>
                        <textarea id="fmailbody" name="fmailbody" className="inputs" placeholder="Insira aqui o corpo do email" onChange={handleEmailBodyChange}></textarea>
                    </div>
                    <div className="my-8 mx-0 items-center text-center">
                        <button id="button-send-mail">Enviar email</button>
                    </div>
                </form>
                <div>
                    <p className="text-white font-semibold text-lg">{emailFeedback}</p>
                </div>
            </div>
        </div>
    );
  }
  
export default MailSender;