import mongoose from "mongoose";
import FoodItem from "../models/FoodItem.js";
import Meal from "../models/Meal.js";
import MealPlan from "../models/MealPlan.js";
import User from "../models/User.js";

export const createFoodItems = async (req,res)=>{
    const foodItem = req.body;
    const newFoodItem = FoodItem(foodItem);

    try{
        await newFoodItem.save();
        res.status(201).json(newFoodItem);
    }catch(err){
        res.status(404).json({message:err.message});
    }
}

export const createMeals = async (req,res)=>{
    const meal = req.body;
    const newMeal = Meal(meal);

    try{
        await newMeal.save();
        res.status(201).json(newMeal);
    }catch(err){
        res.status(404).json({message:err.message});
    }
}

export const createUsers = async (req,res)=>{
    const user = req.body;
    const newUser = User(user);

    try{
        await newUser.save();
        res.status(201).json(newUser);
    }catch(err){
        res.status(404).json({message:err.message});
    }
}

export const updateMeals = async (req,res)=>{
    const {id:_id} = req.params;
    const meal = req.body();
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No meal with that id");
    const updatedMeal = await Meal.findByIdAndUpdate(_id,meal,{new : true});
    res.json(updatedMeal);
}

export const updateUser = async (req,res)=>{
    const {id:_id} = req.params;
    const user = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No user found with that id");
    const updatedUser = await User.findByIdAndUpdate(_id,user,{new:true});
    res.json(updatedUser);
}

export const createMealPlans = async (req,res)=>{
    const mealplans = req.body;
    const newMealPlan = MealPlan(mealplans);

    try{
        await newMealPlan.save();
        res.status(201).json(newMealPlan);
    }catch(err){
        res.status(404).json({message:err.message});
    }
}

//to list all the users
export const getList = async (req,res)=>{
    const meals = await User.find().populate({path:"mealPlan",populate:"mealRef"});
    res.status(201).json(meals);
}