import {connectDB} from "@/util/database";
import Item from "@/app/list/item";

export default async function List() {
    const client = await connectDB;
    const db = client.db("forum")
    let result: Object[] = await db.collection('post').find().toArray()

    return (
        <div className="list-bg">
            {
                result.map((v, i) => {
                    return (
                        <Item result={result[i]} i={i}/>
                    )
                })
            }

        </div>
    )
}