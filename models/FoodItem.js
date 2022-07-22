import mongoose from 'mongoose';

const foodItemSchema = mongoose.Schema({
    name: String,
    calories: Number,
    protien:Number,
    carb: Number,
    fat: Number,
    acceptedUnits: {type:String,enum:["ML","LITER","KG","GM","ITEM"]},
    itemWeight: Number
});

const FoodItem = mongoose.model('FoodItem',foodItemSchema);
export default FoodItem;