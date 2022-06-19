const {Fetch , FetchAll} = require('../../utils/postgresql')


const GET_ORDERS = `
   SELECT 
      *
   FROM
      orders

`

const NEW_ORDER =   `
   INSERT INTO orders (
      client_name,
      client_phone,
      product_id,
      ordered_time
   )
   VALUES (
      $1,
      $2,
      $3,
      $4
   )
   RETURNING 
      *

`

const DELETE_ORDER = `
      DELETE FROM 
         orders 
      WHERE
         id = $1
`



const getOrders = () => FetchAll(GET_ORDERS)

const newOrder = (name , phone , id , time) => Fetch(NEW_ORDER,name , phone , id , time)

const delOrder = id => Fetch(DELETE_ORDER,id)

module.exports = {
   getOrders,
   newOrder,
   delOrder

}