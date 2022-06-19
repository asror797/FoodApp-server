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

const GET_BY_ID = `
      SELECT 
         *
      FROM
         products
      WHERE
         id = $1
`


const DELETE_PRODUCT = `

      DELETE FROM
         products
      WHERE
         id = $1
      RETURNING
         *

`


const GET_PRODUCTS_NAME = `

SELECT 
   products.id as id ,
   products.product_name ,
   products.product_price,  
   branches.branch_name , 
   restaurants.restaurant_name
FROM
   products 
INNER JOIN  
      branches 
   ON
      products.branch_id = branches.id 
   INNER JOIN 
      restaurants 
   ON 
      products.restaurant_id = restaurants.id

`


const UPDATE_PRODUCT = `
      UPDATE
         products
      SET
         product_name = $1,
         product_price = $2
      WHERE
         id = $3
      RETURNING
         *

`


const GET_BRANCH_PRODUCTS = `
   SELECT 
      products.id , 
      products.product_price , 
      products.product_name  
   FROM 
      branches 
   INNER JOIN 
      products 
      on 
         products.branch_id = branches.id  
   WHERE 
      branches.id = $1;
      


`



const getProducts = () => FetchAll(GET_PRODUCTS_NAME)

const newProduct = (product_name,price,branch,restaurant) => Fetch(NEW_PRODUCT,product_name,price,branch,restaurant)

const delProduct = (id) => Fetch(DELETE_PRODUCT,id)

const getProduct = (id) => Fetch(GET_BY_ID,id)

const updateProduct = (name , price , id) => Fetch(UPDATE_PRODUCT,name,price,id)

const getBranchProduct = (id) => FetchAll(GET_BRANCH_PRODUCTS,id)


module.exports = {
   getProducts,
   newProduct,
   delProduct,
   getProduct,
   updateProduct,
   getBranchProduct
}