import mongoose from "mongoose";
import * as url from "url";
const schema = mongoose.Schema({
    tuit:String,
    postedBy: {
        username: {type:String, default: "Apra Gupta"}
    },
    handle: {type:String, default: "apragupta"},
    avatar_image: {type:String, default: "https://i.imgur.com/xdq1OiK.jpg"},
    stats: {
        likes:{type:Number, default: 0},
        comments: {type:Number, default: 0},
        retuits: {type:Number, default: 0}
    }
}, {collection: 'tuits'});
export default schema;