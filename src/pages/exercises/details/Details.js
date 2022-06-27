import React from "react";
import Title from "../../pageTitle/Title";

function Details() {
    return (
        <div>
            <Title />
            <section className="video">
                <div className="container video">
                    <h2>Video</h2>
                    <p>'video'</p>
                </div>
            </section>
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
            <section className="new-comment">
                <h3>Add comment</h3>
                <form method="post">
                    <input
                        type="text"
                        placeholder="Whrite here a new comment..."
                    />
                    <button type="submit">Submit</button>
                </form>
            </section>
            <section className="comments">
                <h3>Comments</h3>
                <div className="comment">
                    <form method="post">
                        <p>
                            Author: <span>'author'</span>
                        </p>
                        <p>
                            Date: <span>'date'</span>
                        </p>
                        <p>
                            Comment: <span>'comment'</span>
                        </p>
                        <button className="like-comment" type="submit">Like</button>

                        <button className="delete-comment comment-post-owner" type="submit">Delete</button>

                        <button className="edit-comment comment-author" type="submit">Edit</button>
                        <button className="delete-comment comment-author" type="submit">Delete</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Details;
