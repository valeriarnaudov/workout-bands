import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { getSinglePostService } from "../services/postServices";

import PostDetails from "./PostDetails";

function Details() {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [data, setData] = useState({});
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            await getSinglePostService(id, setData, user.uid, setIsLiked);
        };

        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLiked]);



    return (
        <>
            <PostDetails postData={data} isLiked={isLiked} user={user} setIsLiked={setIsLiked}/>
        </>
    );
}

export default Details;
