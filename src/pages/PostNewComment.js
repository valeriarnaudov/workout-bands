import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
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
import {
    createCommentService,
    getAllComments,
    likeCommentService,
} from "../services/postServices";
import { AuthContext } from "../contexts/AuthContext";
import { getUserName } from "../services/userServices";
import Loading from "../components/Loading";

function PostNewComment() {
    const [comment, setComment] = useState("");
    const [ownerName, setOwnerName] = useState("");
    const [comments, setComments] = useState([]);
    const [onLike, setOnLike] = useState(false);
    const [onPost, setOnPost] = useState(false);

    const [loading, setLoading] = useState(true);

    const { id } = useParams();
    const { user } = useContext(AuthContext);

    let navigate = useNavigate();

    const userId = user.uid;

    useEffect(() => {
        const getComments = async () => {
            const list = await getAllComments(id);
            setComments(list);
            setLoading(false);
        };

        getComments();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [onLike, onPost]);

    useEffect(() => {
        const ownerDisplayName = async () => {
            const user = await getUserName(userId);
            setOwnerName(user);
        };

        ownerDisplayName();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleInput = (e) => {
        const targetId = e.target.id;
        const value = e.target.value;
        setComment({ ...comment, [targetId]: value });
    };

    const commentSubmitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        await createCommentService(id, comment, userId, ownerName);
        setComment("");
        navigate("/details/" + id);
        setLoading(false);
        setOnPost(!onPost);
        e.target.querySelector("textarea").value = "";
    };

    const likeCommentHandler = async (e) => {
        e.preventDefault();
        const commentId = e.target.parentNode.id;
        const currentComment = comments.find((cmt) => cmt.id === commentId);
        await likeCommentService(id, commentId, currentComment, userId);
        setOnLike(!onLike);
    };

    if (loading) {
        return <Loading />;
    }

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
