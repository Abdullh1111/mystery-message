import { Model, model, models, Schema } from "mongoose";
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
export const message =(models.Message as Model<IMessage>) || model<IMessage>('Message',messageSchema)