const { Fetch, FetchAll } = require('../../utils/postgresql')



const GET_RESTAURANTS = `

   SELECT
      R.id,
      R.restaurant_name as name,
      C.category_name
   FROM
      restaurants as R
   INNER JOIN
      categories as C
   on R.category_id = C.id;
   
`


const GET_BY_ID = `

   SELECT
      *
   FROM
      restaurants
   WHERE
      id = $1

`




const GET_RES_BY_CATEGORY = `

   SELECT
      id,
      restaurant_name as name,
      category_id 
   FROM
      restaurants
   WHERE
      category_id = $1

`


const NEW_RESTAURANT = `

   INSERT INTO restaurants (
     restaurant_name,
     category_id
   )
   VALUES(
      $1,
      $2
   )
   RETURNING 
      *
`


const DELETE_RESTAURANT = `
      DELETE FROM
         restaurants
      WHERE
         id = $1
      RETURNING *

`


const EDIT_RES = `

   UPDATE 
      restaurants
   SET
      restaurant_name = $1,
      if category_id = null then
         category_id = restaurants.category_id
      else 
         category_id = $2
      end if
   WHERE
      id = $3
   RETURNING
      *
   
`


const getRestaurants = () => FetchAll(GET_RESTAURANTS);

const getRestaurantById = (id) => Fetch(GET_BY_ID,id)

const getRestaurantByCategory = (category_id) => FetchAll(GET_RES_BY_CATEGORY, category_id);

const newRestaurant = (ctgry_id,res_name) => Fetch(NEW_RESTAURANT, ctgry_id,res_name);

const deleteRestaurant = (restaurant_id) => Fetch(DELETE_RESTAURANT, restaurant_id)

const editRestaurant = (ctgry_id , res_name , res_id) => Fetch(EDIT_RES, res_name ? res_name : null , ctgry_id ? ctgry_id : null , res_id);







module.exports = {
   getRestaurants,
   getRestaurantById,
   getRestaurantByCategory,
   newRestaurant,
   deleteRestaurant,
   editRestaurant 
}


