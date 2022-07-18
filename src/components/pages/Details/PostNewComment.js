import {
    collection,
    doc,
    getDoc,
    getDocs,
    setDoc,
    Timestamp,
} from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { db } from "../../../firebase";
import {
    CommentContainer,
    CommentForm,
    CommentInput,
    CommentSubmit,
    H1,
} from "./PostNewCommentElements";

import { FcLike } from "react-icons/fc";
import {
    CommentLikeContainer,
    CommentLikes,
    CommentOwner,
    CommentText,
    CommentTextContainer,
    CommentTime,
    InfoCommentContainer,
    LikeComment,
    NoComments,
    SingleCommentContainer,
} from "./CommentsElements";

function PostNewComment() {
    const [comment, setComment] = React.useState("");
    const [commentData, setCommentData] = React.useState({});
    const [ownerName, setOwnerName] = React.useState("");

    const userId = JSON.parse(localStorage.getItem("user")).uid;

    useEffect(() => {
        const ownerDisplayName = async () => {
            try {
                const user = await getDoc(doc(db, "users", userId));
                setOwnerName(user.data().displayName);
            } catch (error) {
                console.log(error);
            }
        };

        ownerDisplayName();
    }, [userId]);


    const handleInput = (e) => {
        const id = e.target.id;
        const value = e.target.value;
        setComment({ ...comment, [id]: value });
    };

    const commentSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            const docRef = doc(collection(db, "comments"));
            await setDoc(docRef, {
                text: comment.comment,
                owner: {id: userId, name: ownerName},
                likes: [],
                timeStamp: Timestamp.fromDate(new Date()),
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const list = [];
                const comments = await getDocs(collection(db, "comments"));
                comments.forEach((doc) => {
                    list.push({ id: doc.id, ...doc.data() });
                });
                setCommentData(list);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <H1>Comments</H1>
            <CommentContainer>
                <CommentForm onSubmit={commentSubmitHandler}>
                    <CommentInput
                        placeholder="Comment now..."
                        id="comment"
                        type="text"
                        name="comment"
                        onChange={handleInput}
                    />
                    <CommentSubmit>Submit</CommentSubmit>
                </CommentForm>
                {!commentData.length ? (
                    <NoComments>Still no comments</NoComments>
                ) : (
                    commentData.map((com) => {
                        return (
                            <SingleCommentContainer key={com.id}>
                                <CommentTextContainer>
                                    <CommentText>{com.text}</CommentText>
                                </CommentTextContainer>
                                <CommentLikeContainer>
                                    <CommentLikes>
                                        Likes: {com.likes.length}
                                    </CommentLikes>
                                    <LikeComment>
                                        <FcLike />
                                    </LikeComment>
                                </CommentLikeContainer>
                                <InfoCommentContainer>
                                    <CommentOwner>{com.owner.name}</CommentOwner>
                                    <CommentTime>{com.timeStamp.toDate().toDateString()}</CommentTime>
                                </InfoCommentContainer>
                            </SingleCommentContainer>
                        );
                    })
                )}
            </CommentContainer>
        </>
    );
}

export default PostNewComment;
