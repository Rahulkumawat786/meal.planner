import mongoose from 'mongoose';

const mealPlaneSchema = mongoose.Schema({
    "date":String,
    "mealRef":{type: mongoose.Schema.Types.ObjectId,ref:'Meal'}
});
const MealPlan = mongoose.model('MealPlan',mealPlaneSchema);
export default MealPlan;