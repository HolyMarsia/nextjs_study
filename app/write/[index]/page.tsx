import Image from 'next/image'
import {connectDB} from "@/util/database";
import {ObjectId} from "mongodb";

export default async function Modify(props) {

    const client = await connectDB;
    const db = client.db("forum")
    let result = await db.collection('post').findOne({_id: new ObjectId(props.params.index)})

    return (
        <div>
            <h4>글수정</h4>
            <form action="/api/write" method="POST">
                <input type="hidden" name="_id" defaultValue={props.params.index}></input>
                제목 : <input type="text" name="title" defaultValue={result.title} ></input>
                내용 : <input type="text" name="content" defaultValue={result.content} ></input>
                <button type="submit">보내기</button>
            </form>
        </div>
    )
}