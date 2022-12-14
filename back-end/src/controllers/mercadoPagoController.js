const mercadopago = require('mercadopago')
const axios = require('axios')

exports.createPayment = (req, res) => {
  mercadopago.configure({
    access_token:
      'APP_USR-3984970228666763-080409-de7392c57648a74d0c4f082dc4e42e62-1169458225',
    client_secret: 'VuBdqbnVKXK1UKOkP4Gz9Yq3oatushGL',
    client_id: '3984970228666763'
  })

  const data = req.body

  var preference = {
    items: [
      {
        title: 'Cursos',
        currency_id: 'BRL',
        description: data.description,
        quantity: 1,
        unit_price: data.unit_price
      }
    ],
    payment_methods: {
      // excluded_payment_methods: [{ id: 'paypal' }],
      excluded_payment_methods: [{ id: 'bolbradesco' }],
      // excluded_payment_types: [{ id: 'atm' }],
      excluded_payment_types: [{ id: 'ticket' }]
    },
    payer: {
      name: data.name,
      email: data.email,
      phone: {
        area_code: data.areaCode,
        number: Number(data.phone)
      },
      identification: {
        type: data.typeIdentification,
        number: data.numberIdentification
      }
    },
    back_urls: {
      success: 'https://gruporeport.com.br/cursos/',
      pending: 'https://gruporeport.com.br/cursos/',
      failure: 'https://gruporeport.com.br/cursos/'
    },
    metadata: {
      payer: {
        name: data.name,
        email: data.email,
        phone: {
          area_code: data.areaCode,
          number: Number(data.phone)
        },
        identification: {
          type: data.typeIdentification,
          number: data.numberIdentification
        }
      }
    },
    auto_return: 'all',
    notification_url:
      'https://cursos.gruporeport.com.br/api/mercadoPago/feedback',
    payment_methods: {
      excluded_payment_methods: [
        {
          id: 'bolbradesco'
        }
      ],
      excluded_payment_types: [
        {
          id: 'ticket'
        }
      ],
      payment_type_id: 'credit_card',
      default_payment_method_id: 'credit_card',
      installments: 1
    }
  }

  // Cria a preferência e retorna o ID do pagamento
  mercadopago.preferences
    .create(preference)
    .then(preference => {
      res.json({
        global: preference.body.id
      })
    })
    .catch(error => {
      console.log(error)
      res.json({ error })
    })
}

exports.feedback = (req, res) => {
  mercadopago.configure({
    access_token:
      'APP_USR-3984970228666763-080409-de7392c57648a74d0c4f082dc4e42e62-1169458225',
    client_secret: 'VuBdqbnVKXK1UKOkP4Gz9Yq3oatushGL',
    client_id: '3984970228666763'
  })

  res.status(200).send({
    data: req.body
  })

  console.log('Id', req.body.data.id)
  if (req.body.data.id != undefined) {
    const config = {
      headers: {
        Authorization: `Bearer APP_USR-3984970228666763-080409-de7392c57648a74d0c4f082dc4e42e62-1169458225`
      }
    }

    axios
      .get(
        `https://api.mercadopago.com/v1/payments/${req.body.data.id}`,
        config
      )
      .then(res => {
        if (res.data.status == 'approved') {
          let CPF = '',
            CNPJ = '',
            email = ''

          if (res.data.additional_info.payer.identification) {
            if (res.data.additional_info.payer.identification.type == 'CPF') {
              CPF = res.data.additional_info.payer.identification.number
            } else if (
              res.data.additional_info.payer.identification.type == 'CNPJ'
            ) {
              CNPJ = res.data.additional_info.payer.identification.number
            }
          }

          if (res.data.additional_info.payer.email) {
            email = res.data.additional_info.payer.email
          } else {
            email = res.data.payer.email
          }

          const payloadEmail = {
            name: res.data.additional_info.payer.first_name,
            CPF: CPF,
            email: email,
            phone: `${res.data.additional_info.payer.phone.area_code} ${res.data.additional_info.payer.phone.number}`,
            CNPJ: CNPJ,
            total: res.data.additional_info.items[0].unit_price,
            description: res.data.additional_info.items[0].description,
            nameEnterprise: '',
            cupom: ''
          }

          axios
            .post(
              `https://cursos.gruporeport.com.br/api/email/registerPayer`,
              payloadEmail
            )
            .then(response => console.log(response))
            .catch(error => console.log(error))
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
}
