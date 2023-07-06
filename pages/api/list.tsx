import Image from 'next/image'
import {connectDB} from "@/util/database";

export default async function handler(req: any, res: any) {

    const client = await connectDB;
    const db = client.db("forum")
    let result: Object[] = await db.collection('post').find().toArray()

    res.status(200).json(result)
}