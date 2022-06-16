const { Pool } = require('pg')


const pool = new Pool({
   user:'asror',
   password:'aaa13579#',
   port:5432,
   host:'localhost',
   database:'restaurants'
})


const Fetch = async(SQL,...params) => {

   const client = await pool.connect()

   try {
      
      const { rows:[ row ] } = await client.query(SQL, params)
      return row;

   } finally {

      client.release()
   }
}


const FetchAll = async(SQL, ...params) => {

   const client = await pool.connect()

   try {

      const { rows } = await client.query(SQL, params)
      return rows;

   } finally {

      client.release()
   }
}



module.exports = {
   Fetch,
   FetchAll
}