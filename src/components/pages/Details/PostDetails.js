import { useNavigate, useParams } from "react-router";
import { BiLike } from "react-icons/bi";
import {
    DeleteBtn,
    Description,
    EditBtn,
    Image,
    InfoContainer,
    LikeBtn,
    Likes,
    MuscleGroup,
    PostSection,
    SrcContainer,
    Title,
    Video,
} from "./PostDetailsElements";

function PostDetails(props) {
    const post = props.postData;
    const isSignIn = props.isSignIn;
    const isOwner = props.isOwner;
    const { id } = useParams();


    const navigate = useNavigate()

    console.log(post)

    const editHandler = () => {
        navigate("/edit/" + id)
    }
 
    return (
        <PostSection>
            <SrcContainer>
                {!post.src || post.src.includes(".mp4") ? (
                    <Video src={post.src} autoPlay={true} loop={true} />
                ) : (
                    <Image src={post.src} />
                )}
            </SrcContainer>
            <InfoContainer>
                <Title>Title: {post.title}</Title>
                <MuscleGroup>Muscle group: {post.muscleGroup}</MuscleGroup>
                <Description>Description: {post.description}</Description>
                <Likes>
                    {!post.likes
                        ? "This post currently has no likes"
                        : "Likes: " + post.likes.length}
                </Likes>
                {isSignIn && !isOwner ? <LikeBtn><BiLike /></LikeBtn> : ""}
                {isOwner ? (
                    <>
                        <EditBtn onClick={editHandler}>Edit</EditBtn>
                        <DeleteBtn>Delete</DeleteBtn>
                    </>
                ) : (
                    ""
                )}
            </InfoContainer>
        </PostSection>
    );
}

export default PostDetails;
