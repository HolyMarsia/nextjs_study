import {MongoClient} from "mongodb";

const url = 'mongodb+srv://admin:qwer1234@cluster0.cdomcbj.mongodb.net/?retryWrites=true&w=majority';
// const options = { useNewUrlParser: true };
const options = {};
let connectDB: Promise<MongoClient>;
let globalWithMongo = global as typeof globalThis & {
    _mongo: Promise<MongoClient>
}

// 개발 단계일때는 변경이 일어나면 모든 스크립트가 재실행되기때문에 글로벌 변수 작업 진행
if(process.env.NODE_ENV === 'development') {
    if (!globalWithMongo._mongo) {
        globalWithMongo._mongo = new MongoClient(url, options).connect()
    }
    connectDB = globalWithMongo._mongo
} else {
    connectDB = new MongoClient(url, options).connect()
}
export { connectDB }
