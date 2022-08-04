import {
    collection,
    doc,
    getDoc,
    getDocs,
    setDoc,
    Timestamp,
    updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { db } from "../firebase";
import {
    CommentContainer,
    CommentForm,
    CommentInput,
    CommentSubmit,
    H1,
} from "../styles/PostNewCommentElements";

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
    ColumnContainer,
} from "../styles/CommentsElements";

function PostNewComment(props) {
    const data = props.postData;
    const [comment, setComment] = useState("");
    const [ownerName, setOwnerName] = useState("");
    const [comments, setComments] = useState([]);
    const [isLiked, setIsLiked] = useState(false);

    const { id } = useParams();
    let navigate = useNavigate();

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
    }, []);

    useEffect(() => {
        const getComments = async () => {
            const list = [];
            try {
                const commentData = await getDocs(
                    collection(db, "posts", id, "comments")
                );
                commentData.docs.forEach((com) => {
                    list.push({ ...com.data(), id: com.id });
                });
                setComments(list);
            } catch (error) {
                console.log(error);
            }
        };
        console.log("post new comment use effect");

        getComments();
    }, []);

    const handleInput = (e) => {
        const targetId = e.target.id;
        const value = e.target.value;
        setComment({ ...comment, [targetId]: value });
    };

    const commentSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            await setDoc(doc(collection(db, "posts", id, "comments")), {
                text: comment,
                owner: { id: userId, name: ownerName },
                createdAt: Timestamp.fromDate(new Date()),
                likes: [],
            });
            setComment("");
            navigate("/details/" + id);

            e.target.querySelector("textarea").value = "";
        } catch (error) {
            console.log(error);
        }
    };
    const likeCommentHandler = async (e) => {
        e.preventDefault();
        const commentId = e.target.parentNode.id;
        const currentComment = comments.find((cmt) => cmt.id === commentId);

        try {
            await updateDoc(doc(db, "posts", id, "comments", commentId), {
                likes: [...currentComment.likes, userId],
            });
        } catch (error) {
            console.log(error);
        }
    };

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
                    <CommentSubmit type="submit">Submit</CommentSubmit>
                </CommentForm>
                {!comments ? (
                    <NoComments>Still no comments</NoComments>
                ) : (
                    comments.map((com) => {
                        return (
                            <SingleCommentContainer
                                key={
                                    com.id +
                                    com.createdAt.toDate().toLocaleString()
                                }
                            >
                                <CommentTextContainer>
                                    <CommentText>
                                        {com.text.comment}
                                    </CommentText>
                                </CommentTextContainer>
                                <ColumnContainer>
                                    <CommentLikeContainer>
                                        <CommentLikes>
                                            Likes: {com.likes.length}
                                        </CommentLikes>
                                        {!com.likes.includes(userId) ? (
                                            <LikeComment>
                                                <FcLike
                                                    id={com.id}
                                                    onClick={likeCommentHandler}
                                                />
                                            </LikeComment>
                                        ) : undefined}
                                    </CommentLikeContainer>
                                    <InfoCommentContainer>
                                        <CommentOwner>
                                            By: {com.owner.name}
                                        </CommentOwner>
                                        <CommentTime>
                                            On:{" "}
                                            {com.createdAt
                                                .toDate()
                                                .toLocaleString()}
                                        </CommentTime>
                                    </InfoCommentContainer>
                                </ColumnContainer>
                            </SingleCommentContainer>
                        );
                    })
                )}
            </CommentContainer>
        </>
    );
}

export default PostNewComment;
