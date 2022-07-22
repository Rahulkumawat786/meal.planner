import express from 'express';
import { createFoodItems,createMeals,createUsers,updateMeals,updateUser,getList,createMealPlans } from '../controllers/mealPlanner.js';
const router = express.Router();

//out routers
router.get('/',(req,res)=>console.log("Meal Planner Application"));
router.post('/foodItems',createFoodItems);
router.post('/meals',createMeals);
router.post('/users',createUsers);
router.patch('/meals/:id',updateMeals);
router.patch('/users/:id',updateUser);
router.post('/mealplans',createMealPlans)
router.get('/list',getList);

export default router;