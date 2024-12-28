import { Request,Response,NextFunction } from "express";
import { body, validationResult } from "express-validator";

const handleValidationErrors = async(req:Request,res:Response,next:NextFunction)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.status(400).json({errors:errors.array()});
        return;
    }
    next();
}

export const validateMyUserRequest = [
    body("name").isString().notEmpty().withMessage("Name must be string"),
    body("addressLine1").isString().notEmpty().withMessage("AddressLine1 must be string"),
    body("city").isString().notEmpty().withMessage("City must be string"),
    body("country").isString().notEmpty().withMessage("Country must be string"),
    handleValidationErrors,
];

export const validateMyRestaurantRequest = [
    body("restaurantName").notEmpty().withMessage("Restaurant Name is required"),
    body("city").notEmpty().withMessage("city is required"),
    body("country").notEmpty().withMessage("country is required"),
    body("deliveryPrice").isFloat({min:0}).withMessage("Delivery price must be a positive number"),
    body("estimatedDeliveryTime").isInt({min:0}).withMessage("Estimated delivery time must be a positive number"),
    body("cuisines").isArray().withMessage("cuisines must be array")
    .not().isEmpty().withMessage("cusinies array can't be empty"),
    body("menuItems").isArray().withMessage("Menu Items must be array"),
    body("menuItems.*.name").notEmpty().withMessage("Menu Items name is required"),
    body("menuItems.*.price").isFloat({min:0}).withMessage("Menu Items price is required and must be a positive"),
    handleValidationErrors,
];