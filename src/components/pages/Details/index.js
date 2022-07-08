import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../firebase";

function Details() {
    const { id } = useParams();
    const [data, setData] = useState(null);
    
    
    useEffect(() => {
        const fetchData = async () => {
            const post = await getDoc(doc(db, "posts", id));
            setData(post.data());
        };

        fetchData();
    }, [id]);
    console.log(data)
    return (
        <>
            <h1>{data.title}</h1>
            <img src={data.src} alt=""/>
            <p>{data.description}</p>
        </>
        );
}

export default Details;
