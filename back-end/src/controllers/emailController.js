const nodemailer = require('nodemailer')
const Email = require('../Model/Email')

// async..await is not allowed in global scope, must use a wrapper
exports.subscribe = (req, res) => {
  const email = req.body.email
  console.log(email)

  if (!email) {
    return res.status(400).json({ message: 'Invalid email', error: true })
  }

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  })

  let mailOptions = {
    from: `no-reply@rptedu.com <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO_USER,
    subject: 'E-mail registrado.',
    text: `O usuário do e-mail ${email} deseja acompanhar as atualizações do curso.`, // plain text body
    html: `<p>O usuário do e-mail <a href="mailto:${email}">${email}</a> deseja acompanhar atualizações do curso.</p>` // html body
  }

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    console.log(error)
    res.json({
      error,
      info
    })
  })
}

// async..await is not allowed in global scope, must use a wrapper
exports.registerPayer = (req, res) => {
  const data = req.body

  try {
    console.log('--1--')
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    })
    console.log('--2--')
    let mailOptions = {
      from: `no-reply@rptedu.com <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO_USER,
      subject: 'Compra do curso realizada.',
      text: `Informações do cliente:

          Nome: ${data.name}
          E-mail: ${data.email}
          CPF: ${data.CPF}
          Telefone: ${data.phone}
          Nome da Empresa: ${data.nameEnterprise}
          CNPJ: ${data.CNPJ}
          Total: R$${data.total}
          Cupom: ${data.cupom}
          Descrição da compra: ${data.description}`, // plain text body
      html: `<p><b>Informações do cliente:</b><br/><br/>

          Nome: ${data.name}<br/>
          E-mail: ${data.email}<br/>
          CPF: ${data.CPF}<br/>
          Telefone: ${data.phone}<br/>
          Nome da Empresa: ${data.nameEnterprise}<br/>
          CNPJ: ${data.CNPJ}<br/>
          Total: R$${data.total}<br/>
          Cupom: ${data.cupom}<br/>
          Descrição da compra: ${data.description}<br/>
          </p>` // html body
    }
    console.log('--3--')
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      res.json({
        error,
        info
      })
    })
    console.log('--4--')
  } catch (error) {
    console.log(error)
  }
}

exports.registerEmail = async (req, res) => {
  const data = req.body
  Email.add(data.email, data.nome_curso)
    .then(result => {
      console.log(result)
      if (result == 0) {
        res
          .status(201)
          .json({ message: 'Email recebeu desconto!', desconto: true })
      } else if (result == 1) {
        res.status(201).json({
          message: 'Email já utilizou cupom de desconto!',
          desconto: false
        })
      } else {
        res
          .status(200)
          .json({ message: 'E-mail sem desconto', desconto: false })
      }
    })
    .catch(error => {
      console.log(error)
    })
}
