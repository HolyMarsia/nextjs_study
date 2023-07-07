'use client'

import {useRouter} from "next/navigation";

export default function DetailLink(props: any){
    let router = useRouter()
    return(
        <button onClick={() => { router.push(props.url)}}>{!!props.name ? props.name : '버튼'}</button>
    )
}