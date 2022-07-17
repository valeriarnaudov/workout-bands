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
    PostContainer,
    PostSection,
    SrcContainer,
    Title,
    Video,
} from "./PostDetailsElements";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";

function PostDetails(props) {
    const post = props.postData;
    const isSignIn = props.isSignIn;
    const { id } = useParams();

    const ownerId = post.owner;

    console.log(ownerId);

    const navigate = useNavigate();

    const editRedirect = () => {
        navigate("/edit/" + id);
    };

    const isOwner = () => {
        const signedUser = JSON.parse(localStorage.getItem("user")).uid;
        if (ownerId !== signedUser) {
            return false;
        }
        return true;
    };

    isOwner();

    const deleteHandler = async () => {
        await deleteDoc(doc(db, "posts", id));
        navigate("/workouts");
    }

    return (
        <>
            <PostSection>
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
                        {isSignIn && !isOwner() ? (
                            <LikeBtn>
                                <BiLike />
                            </LikeBtn>
                        ) : (
                            ""
                        )}
                        {isOwner() ? (
                            <>
                                <EditBtn onClick={editRedirect}>Edit</EditBtn>
                                <DeleteBtn onClick={deleteHandler}>Delete</DeleteBtn>
                            </>
                        ) : (
                            ""
                        )}
                    </InfoContainer>
                </PostContainer>
            </PostSection>
        </>
    );
}

export default PostDetails;
