import express from 'express';
import { createFoodItems,createMeals,createUsers,updateMeals,updateUser,getList,createMealPlans,getFoodItemFromCalorie } from '../controllers/mealPlanner.js';
const router = express.Router();

//out routers
router.get('/',(req,res)=>res.send({message:"started"}));
router.post('/fooditems',createFoodItems);
router.post('/meals',createMeals);
router.post('/users',createUsers);
router.patch('/meals/:id',updateMeals);
router.patch('/users/:id',updateUser);
router.post('/mealplans',createMealPlans)
router.get('/users',getList);
router.get('/selectfood/:calorie',getFoodItemFromCalorie);

export default router;