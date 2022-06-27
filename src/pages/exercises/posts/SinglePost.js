import React from "react";

function SinglePost() {
    return (
        <div className="singlePostContainer">
            <div className="container video">
                <h2>Video</h2>
                <p>'video'</p>
            </div>
            <div>
                <h3>Name of video</h3>
                <p>'author'</p>
                <p>Likes: <span>'num of likes'</span></p>
                <button>Like</button>
                <button>Details</button>
            </div>
        </div>
    );
}

export default SinglePost;
