


   SELECT 
      id,
      restaurant_name as name,
      category_id
   FROM
      restaurants



id
category_id




id
restaurant_name
category_id



SELECT 
   *
FROM
   restaurants
INNER JOIN
   categories using category_id



SELECT
   *
FROM
   restaurants
INNER JOIN 
   categories
   using (category_id)


SELECT
   R.id,
   R.restaurant_name,
   C.category_name
FROM
   restaurants as R
INNER JOIN
   categories as C
   on R.category_id = C.id;