const {Fetch , FetchAll } = require('../../utils/postgresql')




const GET_PRODUCTS = `

   SELECT 
      *
   FROM
      products

`


const NEW_PRODUCT = `
   INSERT INTO products(
      product_name,
      product_price,
      branch_id,
      restaurant_id
   )
   VALUES(
      $1,
      $2,
      $3,
      $4
   )
   RETURNING
      *

`



const getProducts = () => FetchAll(GET_PRODUCTS)

const newProduct = (product_name,price,branch,restaurant) => Fetch(NEW_PRODUCT,product_name,price,branch,restaurant)


module.exports = {
   getProducts,
   newProduct
}