from flask import Flask, request, jsonify
import smtplib
from email.mime.text import MIMEText

app = Flask(__name__)

@app.route('/send-email', methods=['POST'])
def send_email():
    # Coleta os dados do formulário recebido via POST
    recipient = request.form['recipient']
    subject = request.form['subject']
    message = request.form['message']

    # Cria o objeto MIMEText para compor o e-mail
    msg = MIMEText(message)
    msg['Subject'] = subject
    msg['From'] = 'your-email@example.com'
    msg['To'] = recipient

    try:
        # Configura o servidor SMTP e envia o e-mail
        with smtplib.SMTP('smtp.example.com', 587) as server:
            server.starttls()  # Inicia TLS para segurança
            server.login('your-email@example.com', 'your-password')
            server.send_message(msg)
        return jsonify({'status': 'success', 'message': 'Email sent successfully!'})
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
