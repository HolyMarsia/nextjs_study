import Image from 'next/image'

export default function Write() {

    return (
        <div>
            <h4>글작성</h4>
            <form action="/api/write" method="POST">
                제목 : <input type="text" name="title" ></input>
                내용 : <input type="text" name="content" ></input>
                <button type="submit">보내기</button>
            </form>

        </div>
    )
}