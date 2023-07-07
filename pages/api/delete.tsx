import {connectDB} from "@/util/database";
import {ObjectId} from "mongodb";


export default async function handler(req: any, res: any) {
    if (req.method == 'DELETE') {
        try {
            let db = (await connectDB).db('forum')
            let result = db.collection('post').deleteOne({"_id" : new ObjectId(req._id)})
            console.log(result);
        } catch (err) {
            console.error('error', err);
            res.status(500);
        }
    }
}