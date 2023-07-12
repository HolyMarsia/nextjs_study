'use client'

import DetailLink from "@/app/list/detailLink";
import {useEffect} from "react";

const deleteFuc = (id: string, e: any) => {
    fetch('/api/delete', {method: 'DELETE', body: id}).then((res) => {
        console.log('삭제 완료', res)
        return res.json()
    }).then((res) => {
        e.target.parentElement.style.opacity = 0;
        console.log(res)
    })

    // fetch('/api/test?name=dg&age=35')
}

const Item = ({result}:any) => {
    return (
        <div className="list-item" >
            <DetailLink url={'/detail/' + result._id} name='상세'/>
            <h4>{result.title}</h4>
            <p>{'2023.07.07'}</p>
            <button onClick={(e) => {deleteFuc(result._id, e)}}>삭제</button>
        </div>
    )
}


export default Item;