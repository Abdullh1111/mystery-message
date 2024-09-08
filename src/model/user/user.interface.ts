import { Document, Types } from "mongoose";

export interface IUser extends Document {
    userName:string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isAcceptingMessage: boolean;
    isVerified: boolean;
    message: [Types.ObjectId]
}