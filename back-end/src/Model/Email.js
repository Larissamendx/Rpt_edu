const postgres = require('postgres')

const sql = postgres('postgres://localhost/apigruporeport_banco', {
  host: 'localhost',
  port: 5432,
  database: 'apigruporeport_banco',
  username: 'apigruporeport_user',
  password: 'A39c927#029a!'
})

async function find(email) {
  const res = await sql`
        SELECT
            email_cliente
        FROM tbl_email
        WHERE email_cliente = ${email}
    `
  if (res.length <= 0) {
    return 0
  }
  return 1
}

async function get_id(curso) {
  const res = await sql`
        SELECT
            id_curso
        FROM tbl_curso
        WHERE nome_curso = ${curso}
    `
  if (res.length <= 0) {
    return false
  }

  return res[0]['id_curso']
}

async function add(email, nome_curso) {
  let id_curso
  let email_found

  const emails_desconto = [
    'alexandre.carrasco@repensandonegocios.com.br',
    'diogo_casanova@hotmail.com',
    'adm.diegocarbonell@gmail.com',
    'andrea@dsrupdiva.com',
    'vivianfaxas@gmail.com',
    'shvenancio@hotmail.com',
    'wanderson.lima@outlook.com',
    'livia@mundosocial.com.br',
    'mayaoceanografia.campos@gmail.com',
    'trindadejr@alumni.usp.br',
    'priscila@integraryambiental.com.br',
    'brunostarnini@hotmail.com',
    'roberta.costa.sil@gmail.com',
    'caiogalileu@live.com',
    'claummf@gmail.com',
    'luciana.rangel@gmail.com',
    'camila.froes@gmail.com',
    'danielas.comunica@gmail.com',
    'ana10carol@hotmail.com',
    'yolanda.calderaro@gmail.com',
    'marieflorence@id.uff.br',
    'fabiana@onixambiental.srv.br',
    'titacaramby@gmail.com',
    'leticialuz.geo@gmail.com',
    'pmkreimer@gmail.com',
    'miltonrtborges@gmail.com',
    'cricotta@uol.com.br',
    'appelmarthina@gmail.com',
    'murilovallota@gmail.compra'
  ]

  id_curso = await get_id(nome_curso).then(result => {
    return result
  })

  email_found = emails_desconto.find(e => e === email)

  if (email_found) {
    let has_email = await find(email).then(result => {
      return result
    })

    if (has_email == 0) {
      const res = await sql`
            INSERT INTO tbl_email(
                email_cliente,
                recebeu_desconto,
                id_curso
            ) VALUES(${email}, 1, ${id_curso})
            `
      return 0
    }

    if (has_email == 1) {
      const res = await sql`
                SELECT
                    recebeu_desconto
                FROM tbl_email
                WHERE email_cliente = ${email}
            `

      if (res.length <= 0) {
        return 0
      }

      return 1
    }
  }
  return -1
}

async function verify_discount(email) {
  const res = await sql`
        SELECT
            recebeu_desconto
        FROM tbl_email
        WHERE email_cliente = ${email}
    `
  if (res.length <= 0) {
    return false
  }

  return res[0]['recebeu_desconto']
}

module.exports = { find, add, get_id, verify_discount }
