import Image from 'next/image'
import {connectDB} from "@/util/database";
import Link from "next/link";
import {ObjectId} from "mongodb";
import DetailLink from "@/app/list/detailLink";

export default async function List() {
    const client = await connectDB;
    const db = client.db("forum")
    let result: Object[] = await db.collection('post').find().toArray()

    return (
        <div className="list-bg">
            {
                result.map((v, i) => {
                    return (
                        <div className="list-item" >
                            <DetailLink url={'/detail/' + result[i]?._id} />
                            {/*<Link href={'/detail/' + result[i]?._id}>*/}
                                <h4>{result[i]?.title}</h4>
                            {/*</Link>*/}
                            <p>11.</p>
                        </div>
                    )
                })
            }

        </div>
    )
}