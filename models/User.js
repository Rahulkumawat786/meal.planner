import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    calorieRequirement:Number,
    mealPlan:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'MealPlan'
    }]
});

const User = mongoose.model('User',userSchema);
export default User;