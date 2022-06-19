const {Fetch , FetchAll } = require('../../utils/postgresql')


const  GET_BRANCH = `
   SELECT  
      B.id ,
      R.restaurant_name ,
      B.branch_name  
   FROM 
      restaurants as R  
   INNER JOIN 
      branches as B  
      on  
      R.id =  B.restaurant_id;
`


const GET_RES_BRANCH = `

   SELECT 
      *
   FROM
      branches
   WHERE
      restaurant_id = $1

`


const NEW_BRANCH =  `
   INSERT INTO branches (
      branch_name,
      restaurant_id
   )
   VALUES (
      $1,
      $2
   )
   RETURNING 
      *

`






const DELETE_BRANCH = `
      DELETE FROM
         branches
      WHERE
         id = $1
      RETURNING
         *
`


const AllBranches = () => FetchAll(GET_BRANCH)

const newBranch = (name,id) => Fetch(NEW_BRANCH, name, id)

const getResBranch = (id) => FetchAll(GET_RES_BRANCH,id)


const delBranch = (id) => Fetch(DELETE_BRANCH,id)


module.exports = {
   AllBranches,
   newBranch,
   getResBranch,
   delBranch
}