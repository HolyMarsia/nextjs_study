import Image from 'next/image'
import {connectDB} from "@/util/database";
import {ObjectId} from "mongodb";

export default async function handler(req: any, res: any) {
    if (req.method == 'POST' && !req.body._id) {
        try {
            let db = (await connectDB).db('forum')
            let result = await db.collection('post').insertOne(req.body)
            if (result.acknowledged === true) {
                res.redirect(302, '/list')
            } else {
                console.error('api err', result);
            }
            
        } catch (err) {
            console.error('error', err);
        }
    } else if (req.method == 'POST' && !!req.body._id) {
        try {
            let db = (await connectDB).db('forum')
            let result = await db.collection('post').updateOne({_id: new ObjectId(req.body._id)}, {$set: {
                    title: req.body.title, content: req.body.content
                }})
            res.redirect(302, '/list')
        } catch (err) {
            console.error('error', err);
        }
    }
}