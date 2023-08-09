const Convite = require('./conviteModel');

app.post('/convite/enviarEmail', (req, res) => {
  const { email, assunto, mensagem } = req.body;

  const mailOptions = {
    from: 'lucasolidev@gmail.com',
    to: email,
    subject: assunto,
    text: mensagem,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Erro ao enviar e-mail');
    } else {
      console.log('E-mail enviado: ' + info.response);

      const convite = new Convite({
        email,
        assunto: info.assunto,
        mensagem: info.mensagem
      });

      convite.save((err) => {
        if (err) {
          console.log(err);
          res.status(500).send('Erro ao salvar convite no banco de dados');
        } else {
          console.log('Convite salvo no banco de dados');
          res.send('E-mail enviado e convite salvo no banco de dados');
        }
      });
    }
  });
});

