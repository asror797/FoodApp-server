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



const GET_BY_ID = `
   SELECT
      *
   FROM
      branches
   WHERE
      restaurant_id = $1
`



const DELETE_BRANCH = `
      DELETE FROM
         branches
      WHERE
         id = $1
`


const AllBranches = () => FetchAll(GET_BRANCH)

const newBranch = (name,id) => Fetch(NEW_BRANCH, name, id)

const getBranchById = (id) => FetchAll(GET_BY_ID,id)

const delBranch = (id) => Fetch(DELETE_BRANCH,id)


module.exports = {
   AllBranches,
   newBranch,
   getBranchById,
   delBranch
}