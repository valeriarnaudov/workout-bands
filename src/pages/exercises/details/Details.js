import React from "react";

import {
    CommentsContainer,
    DetailsContainer,
    NewCommentContainer,
} from "./DetailsElements";

import Title from "../../pageTitle/Title";
import Comments from "./Comments";
import Post from "./Post";
import Video from "./Video";
import NewComment from "./NewComment";

function Details() {
    return (
        <div>
            <Title />
            <DetailsContainer>
                <Video />
                <Post />
            </DetailsContainer>

            <NewCommentContainer>
                <NewComment />
            </NewCommentContainer>

            <CommentsContainer>
                <Comments />
            </CommentsContainer>
        </div>
    );
}

export default Details;
