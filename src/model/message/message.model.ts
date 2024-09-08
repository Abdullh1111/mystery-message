import { model, Schema } from "mongoose";
import { IMessage } from "./message.interface";

const messageSchema =new Schema<IMessage>({
    message:{
        type: String,
        required:true
    },
    createdAt:{
        type: Date,
        default:Date.now,
        required: true
    }

})
export const message = model<IMessage>('message',messageSchema)