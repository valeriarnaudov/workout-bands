import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../firebase";

import PostDetails from "./PostDetails";

function Details() {
    const { id } = useParams();
    const [data, setData] = useState({});


    useEffect(() => {
        const fetchData = async () => {
            const post = await getDoc(doc(db, "posts", id));
            setData(post.data());
        };

        fetchData();
    }, [id]);

    
    const isSignIn = () => {
        return localStorage.getItem("user") !== null;
    };

    return (
        <>
            <PostDetails postData={data} isSignIn={isSignIn()} />
        </>
    );
}

export default Details;
