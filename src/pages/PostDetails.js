import { useNavigate, useParams } from "react-router";
import {
    By,
    CreatedAt,
    DeleteBtn,
    Description,
    EditBtn,
    H1,
    H3,
    Image,
    InfoContainer,
    LikeBtn,
    Likes,
    MuscleGroup,
    PostContainer,
    PostOwner,
    PostSection,
    SignRedirect,
    SrcContainer,
    Title,
    Video,
} from "../styles/PostDetailsElements";
import PostNewComment from "../components/PostNewComment";
import { deletePostService, likePostService } from "../services/postServices";
import { useState } from "react";

function PostDetails({ postData, isLiked, user, setIsLiked }) {
    const post = postData;
    const [postDate, setPostDate] = useState("");
    const [postLikes, setPostLikes] = useState(0);
    const { id } = useParams();
    const navigate = useNavigate();

    let isOwner = false;
    if (user) {
        isOwner = post.owner === user.uid || user.uid === "1z6M3rth04ccBpedA68fqrfZbDY2";
        
    }

    const editRedirect = () => {
        navigate("/edit/" + id);
    };

    const deleteHandler = async () => {
        window.confirm(`Are you sure you want to delete?`);
        await deletePostService(id);
        navigate("/workouts");
    };

    const onLike = async () => {
        await likePostService(id, user.uid);
        setIsLiked(true);
    };

    setTimeout(() => {
        setPostDate(post.timeStamp.toDate().toLocaleString());
        setPostLikes(post.likes.length);
    }, 1000);

    return (
        <>
            <PostSection>
                <H1>Details</H1>
                <PostContainer>
                    <SrcContainer>
                        {!post.src || post.src.includes(".mp4") ? (
                            <Video src={post.src} autoPlay={true} loop={true} />
                        ) : (
                            <Image src={post.src} />
                        )}
                    </SrcContainer>
                    <InfoContainer>
                        <Title>Title: {post.title}</Title>
                        <CreatedAt>Created at: {postDate}</CreatedAt>
                        <By>
                            By:{" "}
                            <PostOwner to={`/profile/${post.owner}`}>
                                {post.ownerName}
                            </PostOwner>
                        </By>
                        <MuscleGroup>
                            Muscle group: {post.muscleGroup}
                        </MuscleGroup>
                        <Description>
                            Description: {post.description}
                        </Description>
                        <Likes>Likes: {postLikes}</Likes>
                        {user && isLiked === false ? (
                            <LikeBtn onClick={onLike}>Like</LikeBtn>
                        ) : (
                            ""
                        )}
                        {isOwner ? (
                            <>
                                <EditBtn onClick={editRedirect}>Edit</EditBtn>
                                <DeleteBtn onClick={deleteHandler}>
                                    Delete
                                </DeleteBtn>
                            </>
                        ) : (
                            ""
                        )}
                    </InfoContainer>
                </PostContainer>
                {user ? (
                    <PostNewComment postData={post} />
                ) : (
                    <H3>
                        <SignRedirect href="/signin">Sign In</SignRedirect> to
                        see and post comments
                    </H3>
                )}
            </PostSection>
        </>
    );
}

export default PostDetails;
