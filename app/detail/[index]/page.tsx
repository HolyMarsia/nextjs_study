import Image from 'next/image'
import {connectDB} from "@/util/database";
import {ObjectId} from "mongodb";
import DetailLink from "@/app/list/detailLink";

export default async function Detail(props) {

    const client = await connectDB;
    const db = client.db("forum")
    let result = await db.collection('post').findOne({_id: new ObjectId(props.params.index)})

    return (
        <div>
            <h4>상세 페이지</h4>
            <h4>{result.title}</h4>
            <p>{result.content}</p>
            <DetailLink url={'/write/' + props.params.index}/>
        </div>
    )
}