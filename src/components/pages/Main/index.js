import {
    ContentContainer,
    ContentItemsContainer,
    LikeBtn,
    Likes,
    MainSection,
    MainSectionTitle,
    PostContainer,
    // PostImage,
    PostInfo,
    PostTitle,
    PostVideo,
    // PostVideo,
} from "./MainElements";
import { BiLike } from "react-icons/bi";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

function Main() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let list = [];
            try {
                const postsSnapshop = await getDocs(collection(db, "posts"));
                postsSnapshop.forEach((doc) => {
                    list.push({ id: doc.id, ...doc.data() });
                });
                setData(list);
            } catch (error) {
                return error;
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <MainSection>
                <MainSectionTitle>Workouts</MainSectionTitle>
                <ContentContainer>
                    <ContentItemsContainer>
                        {data.map((item) => (
                            <PostContainer>
                                {/* <PostImage src={item.img} /> */}
                                <PostVideo>{
                                    <>
                                        <blockquote
                                            class="tiktok-embed"
                                            cite="https://www.tiktok.com/@fabrizioalessandr90/video/7113948147814108422"
                                            data-video-id="7113948147814108422"
                                            style="max-width: 605px;min-width: 325px;"
                                        >
                                            {" "}
                                            <section>
                                                {" "}
                                                <a
                                                    target="_blank"
                                                    title="@fabrizioalessandr90"
                                                    href="https://www.tiktok.com/@fabrizioalessandr90"
                                                >
                                                    @fabrizioalessandr90
                                                </a>{" "}
                                                <p></p>{" "}
                                                <a
                                                    target="_blank"
                                                    title="♬ Daddy Cool - Boney M."
                                                    href="https://www.tiktok.com/music/Daddy-Cool-6698932824587634690"
                                                >
                                                    ♬ Daddy Cool - Boney M.
                                                </a>{" "}
                                            </section>{" "}
                                        </blockquote>{" "}
                                        <script
                                            async
                                            src="https://www.tiktok.com/embed.js"
                                        ></script>
                                    </>}
                                </PostVideo>
                                {/* <video className="video__player" src="https://v16m.tiktokcdn.com/00f8150467034acf33c0036f54dc624a/5f497764/video/tos/useast2a/tos-useast2a-pve-0068/5c92cd711b4c4d11a0f7560389ff3514/?a=1233&br=2200&bt=1100&cr=0&cs=0&dr=0&ds=3&er=&l=2020082815291201019018913720166B55&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=Mzg8NjY0a2RodTMzPDczM0ApaTY8MzdnOWVlN2k4ZzVmOWdwcWdqLW5mNWNfLS0xMTZzc2AzNS0vMS41MDYwMWBhM2A6Yw%3D%3D&vl=&vr="></video> */}

                                {/* <PostVideo src={item.video} /> */}
                                <PostInfo>
                                    <PostTitle>{item.title}</PostTitle>
                                    <Likes>Likes: {item.likes.length}</Likes>
                                    <LikeBtn>
                                        <BiLike />
                                    </LikeBtn>
                                </PostInfo>
                            </PostContainer>
                        ))}
                    </ContentItemsContainer>
                </ContentContainer>
            </MainSection>
        </>
    );
}

export default Main;
