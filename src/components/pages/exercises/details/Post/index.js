import React from "react";

function Post() {
    return (
        <div>
            <section className="info">
                <div className="container info">
                    <h2>
                        Name: <span>'the name of video'</span>
                    </h2>
                    <p>
                        Date of upload: <span>'date'</span>
                    </p>
                    <p>
                        Author: <span>author name</span>
                    </p>

                    <h3>
                        Type of exercise: <span>'type</span>
                    </h3>
                    <p>
                        Description: <span>'description'</span>
                    </p>

                    <button className="like">Like</button>

                    <button className="author edit">Edit</button>
                    <button className="author delete">Delete</button>
                </div>
            </section>
        </div>
    );
}

export default Post;
