import Image from 'next/image'
import {connectDB} from "@/util/database";

export default async function List() {
    const client = await connectDB;
    const db = client.db("forum")
    let result: Object[] = await db.collection('post').find().toArray()

    return (
        <div className="list-bg">
            {
                result.map((v, i) => {
                    return (
                        <div className="list-item">
                            <h4>{'v'}</h4>
                            <p>{i}</p>
                        </div>
                    )
                })
            }

        </div>
    )
}