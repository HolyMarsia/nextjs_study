import Image from 'next/image'
import {connectDB} from "@/util/database";
import {ObjectId} from "mongodb";

export default async function handler(req: any, res: any) {
    console.log(req.method)
    if (req.method == 'POST' && !req.body._id) {
        try {
            let db = (await connectDB).db('forum')
            let result = db.collection('post').insertOne(req.body)
            console.log(result);
            res.redirect(302, '/list')
        } catch (err) {
            console.error('error', err);
        }
    } else if (req.method == 'POST' && !!req.body._id) {
        try {
            let db = (await connectDB).db('forum')
            let result = db.collection('post').updateOne({_id: new ObjectId(req.body._id)}, {$set: {
                    title: req.body.title, content: req.body.content
                }})
            res.redirect(302, '/list')
        } catch (err) {
            console.error('error', err);
        }
    }
}