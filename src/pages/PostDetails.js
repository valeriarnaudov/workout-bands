import { useNavigate, useParams } from "react-router";
import { BiLike } from "react-icons/bi";
import {
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
    PostSection,
    SignRedirect,
    SrcContainer,
    Title,
    Video,
} from "../styles/PostDetailsElements";
import PostNewComment from "../components/PostNewComment";
import { deletePostService, likePostService } from "../services/postServices";

function PostDetails({ postData, isLiked, user, setIsLiked }) {
    const post = postData;
    const { id } = useParams();
    const navigate = useNavigate();

    let isOwner = false;
    if (user) {
        isOwner = post.owner === user.uid;
    }

    const editRedirect = () => {
        navigate("/edit/" + id);
    };

    const deleteHandler = async () => {
        window.confirm(`Are you sure you want to delete?`)
        await deletePostService(id);
        navigate("/workouts");
    };

    const onLike = async () => {
        await likePostService(id, user.uid);
        setIsLiked(true);
    }

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
                        <MuscleGroup>
                            Muscle group: {post.muscleGroup}
                        </MuscleGroup>
                        <Description>
                            Description: {post.description}
                        </Description>
                        <Likes>
                            {!post.likes
                                ? "This post currently has no likes"
                                : "Likes: " + post.likes.length}
                        </Likes>
                        {user && !isOwner && isLiked === false ? (
                            <LikeBtn>
                                <BiLike onClick={onLike}/>
                            </LikeBtn>
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
