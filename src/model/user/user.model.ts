import  { Model, model, models, Schema } from "mongoose";
import { IUser } from "./user.interface";

const userSchema =new Schema<IUser>({
    userName:{
        type:String,
        required:[true, "username is required"],
        trim: true,
        unique: true
    },
    email:{
        type:String,
        required:[true, "email is required"],
        trim: true,
        unique: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        ,"please use a valid email"]
    },
    password:{
        type:String,
        required:[true, "password is required"],
    },
    verifyCode:{
        type:String,
        required:[true, "verify code is required"],
    },
    verifyCodeExpiry:{
        type:Date,
        required:[true, "verify code expiry is required"],

    },
    isVerified:{
        type:Boolean,
        default: false
    },
    isAcceptingMessage:{
        type:Boolean,
        default: true
    },
    message: [{
        type: Schema.Types.ObjectId,
        ref: 'Message',
    }]

})
export const user =(models.user as Model<IUser>) || model<IUser>('User',userSchema)