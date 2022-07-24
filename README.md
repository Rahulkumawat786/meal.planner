# Meal Planner
## dependencies
  1. nodejs
  2. expressjs
  3. mongodb
## to run the application create a config.env file 
  1. Assign the port numer on which you want to run server (eg: PORT = 3000)
  2. Assign MongoDb connection Link (eg. CONNECTION_URL = mongodb:/localhost:27000)
  3. run the server usign npm start command and mongodb server
  4. open browser and type https://localhost:3000/mealplanner to start the application (3000 is port number)
  
## testing API for different request
  1. To create food item in data base - post request
    POST: https://localhost:3000/mealplanner/fooditems (body: json data of food item for more details about you go through use dummuy data)
  2. To create meals in database
    POST: https://localhost:3000/mealplanner/meals
  3. To create users in database
    POST: https://localhost:3000/mealplanner/users
  4. To update meals
    PATCH: https://localhost:3000/mealplanner/meals/:id (id: parameter to find meal to update)
  5. To update user
    PATCH: https://localhost:3000/mealplanner/users/:id (id: parameter to find user to update)
  6. To create mealplans 
    POST: https://localhost:3000/mealplanner/mealplans
  7. To get All users list
    GET: https://localhost:3000/mealplanner/users
  8. To get Food Item using given calorie value
    GET: https://localhost:3000/mealplanner/selectfood/:calorie (calorie: calorie value)
    
    
## ER Diagram for Schema design
![image](https://user-images.githubusercontent.com/75028176/180646185-c26cc28b-b35f-4f69-8935-a3face10fd46.png)

    
