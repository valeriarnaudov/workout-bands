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
    ColumnContainer,
} from "./CommentsElements";
import { get } from "react-scroll/modules/mixins/scroller";

function PostNewComment(props) {
    const data = props.postData;
    const [postData, setPostData] = useState(data);
    const [comment, setComment] = useState("");
    const [ownerName, setOwnerName] = useState("");
    const [comments, setComments] = useState([]);

    const { id } = useParams();

    const userId = JSON.parse(localStorage.getItem("user")).uid;
    const list = data.comments;

    useEffect(() => {
        const getComments = async () => {
            try {
                const commentData = await getDocs(
                    collection(db, "posts", id, "comments")
                );
                commentData.forEach((com) =>
                    setComments(...comments, com.data())
                );
            } catch (error) {
                console.log(error);
            }
        };

        getComments();

        console.log(comments)
    }, [comments]);

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
        } catch (error) {
            console.log(error);
        }
    };

    const likeCommentHandler = async (e) => {
        e.preventDefault();
        const commentId = data.comments;
        console.log(commentId);
        try {
            const comment = data.comments;
            console.log(comment);
            const newLikes = [...comment.likes, userId];
            await updateDoc(doc(db, "posts", id), "comments", {
                [commentId]: {
                    ...comment,
                    likes: newLikes,
                },
            });
        } catch (error) {
            console.log(error);
        }
    };

    // try {
    //     const docRef = doc(db, "posts", data.id);
    //     await updateDoc(docRef, { ...data});
    // } catch (error) {
    //     console.log(error);
    // }

    const handleInput = (e) => {
        const targetId = e.target.id;
        const value = e.target.value;
        setComment({ ...comment, [targetId]: value });
    };

    // const [commentData, setCommentData] = useState({});

    // const { id } = useParams();

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

    // const commentSubmitHandler = async (e) => {

    //     try {
    //         const docRef = doc(collection(db, "comments"));
    //         await setDoc(docRef, {
    //             text: comment.comment,
    //             owner: { id: userId, name: ownerName },
    //             likes: [],
    //             timeStamp: Timestamp.fromDate(new Date()),
    //         });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const list = [];
    //             const comments = await getDocs(collection(db, "comments"));
    //             comments.forEach((doc) => {
    //                 list.push({ id: doc.id, ...doc.data() });
    //             });
    //             setCommentData(list);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    // const likeHandler = async (e) => {
    //     try {
    //         const docRef = doc(db, "comments", e.target.parentElement.id);
    //         const comment = await getDoc(docRef);
    //         const likes = comment.data().likes;
    //         const newLikes = [...likes, userId];
    //         await updateDoc(docRef, { likes: newLikes });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    console.log(comments);

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
                {!data.comments ? (
                    <NoComments>Still no comments</NoComments>
                ) : (
                    comments.map((com) => {
                        return (
                            <SingleCommentContainer
                                key={
                                    com.text.comment +
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
                                        <LikeComment>
                                            <FcLike
                                                onClick={likeCommentHandler}
                                            />
                                        </LikeComment>
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
