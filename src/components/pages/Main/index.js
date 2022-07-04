import { ContentContainer, ContentItemsContainer, LikeBtn, Likes, MainSection, MainSectionTitle, PostContainer, PostInfo, PostTitle, PostVideo } from "./MainElements";
import { BiLike } from "react-icons/bi";

function Main() {
    return (
        <>
            <MainSection>
                <MainSectionTitle>Workouts</MainSectionTitle>
                <ContentContainer>
                    <ContentItemsContainer>
                        <PostContainer>
                            <PostVideo>Any video</PostVideo>
                            <PostInfo>
                                <PostTitle>Any title</PostTitle>
                                <Likes>Likes count</Likes>
                                <LikeBtn><BiLike /></LikeBtn>
                            </PostInfo>
                        </PostContainer>
                        <PostContainer>
                            <PostVideo>Any video</PostVideo>
                            <PostInfo>
                                <PostTitle>Any title</PostTitle>
                                <Likes>Likes count</Likes>
                                <LikeBtn><BiLike /></LikeBtn>
                            </PostInfo>
                        </PostContainer>
                        <PostContainer>
                            <PostVideo>Any video</PostVideo>
                            <PostInfo>
                                <PostTitle>Any title</PostTitle>
                                <Likes>Likes count</Likes>
                                <LikeBtn><BiLike /></LikeBtn>
                            </PostInfo>
                        </PostContainer>
                        <PostContainer>
                            <PostVideo>Any video</PostVideo>
                            <PostInfo>
                                <PostTitle>Any title</PostTitle>
                                <Likes>Likes count</Likes>
                                <LikeBtn><BiLike /></LikeBtn>
                            </PostInfo>
                        </PostContainer>
                        <PostContainer>
                            <PostVideo>Any video</PostVideo>
                            <PostInfo>
                                <PostTitle>Any title</PostTitle>
                                <Likes>Likes count</Likes>
                                <LikeBtn><BiLike /></LikeBtn>
                            </PostInfo>
                        </PostContainer>
                    </ContentItemsContainer>
                </ContentContainer>
            </MainSection>
        </>
    );
}

export default Main;
