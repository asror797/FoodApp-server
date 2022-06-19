const { Pool } = require('pg')


const pool = new Pool({
   connectionString:'postgres://ofskhwjm:sqzU83xbYJQwwfA6OINGhYx7eUyOo589@heffalump.db.elephantsql.com/ofskhwjm'
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