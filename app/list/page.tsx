import {connectDB} from "@/util/database";
import Item from "@/app/list/item";

export const dynamic = 'force-dynamic'; 

export default async function List() {
    const client = await connectDB;
    const db = client.db("forum")
    let results: Object[] = await db.collection('post').find().toArray()

    return (
        <div className="list-bg">
            {
                results.map((v, i) => {
                    return (
                        <Item result={results[i]} i={i}/>
                    )
                })
            }
        </div>
    )
}