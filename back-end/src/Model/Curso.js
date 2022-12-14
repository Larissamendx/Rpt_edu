const postgres = require('postgres')

const sql = postgres('postgres://localhost/apigruporeport_banco', {
  host: 'localhost',
  port: 5432,
  database: 'apigruporeport_banco',
  username: 'apigruporeport_user',
  password: 'A39c927#029a!'
})

async function find(curso) {
  const res = await sql`
        SELECT
            valor_curso
        FROM tbl_curso
        WHERE nome_curso = ${curso}
    `
  if (res.length <= 0) {
    return false
  }

  return res[0]['valor_curso']
}

async function getAllValues() {
  const res = await sql`
        SELECT
            *
        FROM tbl_curso
    `
  if (res.length <= 0) {
    return false
  }

  return res
}

module.exports = { getAllValues, find }
