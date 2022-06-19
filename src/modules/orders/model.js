const {Fetch , FetchAll} = require('../../utils/postgresql')


const GET_ORDERS = `
   SELECT   
      orders.id , 
      orders.client_name , 
      orders.client_phone , 
      products.product_name ,
      orders.ordered_time 
   FROM 
      orders  
         inner join 
            products 
         on  
            orders.product_id = products.id 
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

const CANCEL_ORDER = `

      UPDATE TABLE
         orders
      SET
         order_status = false
      WHERE
         id = $1
      RETURNING
         *

`


const getOrders = () => FetchAll(GET_ORDERS)

const newOrder = (name , phone , id , time) => Fetch(NEW_ORDER,name , phone , id , time)

const delOrder = id => Fetch(DELETE_ORDER,id)

const cancelOrder = id => Fetch(CANCEL_ORDER,id)

module.exports = {
   getOrders,
   newOrder,
   delOrder,
   cancelOrder

}