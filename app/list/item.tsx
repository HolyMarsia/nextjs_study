'use client'

import DetailLink from "@/app/list/detailLink";
import {useEffect} from "react";

const deleteFuc = (id: string) => {
    const formDate = new FormData();
    formDate.append('_id', id);
    fetch('/api/delete', {method: 'DELETE', body: formDate}).then((res) => {
        console.log(res);
    })
}

const Item = ({result}) => {
    return (
        <div className="list-item" >
            <DetailLink url={'/detail/' + result._id} name='상세'/>
            <h4>{result.title}</h4>
            <p>{'2023.07.07'}</p>
            <button onClick={() => {deleteFuc(result._id)}}>삭제</button>
        </div>
    )
}


export default Item;