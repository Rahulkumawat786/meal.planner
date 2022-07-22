import mongoose from 'mongoose';

const mealSchema = mongoose.Schema({
    category: {type:String,enum:["BREAKFAST","LUNCH","EVENING_SNACKS","DINNER"]},
    name: {type:String,required:true},
    foodItems: [String]
});

const Meal = mongoose.model('Meal',mealSchema);
export default Meal;