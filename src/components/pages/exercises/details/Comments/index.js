import React from "react";

function Comments() {
    return (
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
                    <button className="like-comment" type="submit">
                        Like
                    </button>

                    <button
                        className="delete-comment comment-post-owner"
                        type="submit"
                    >
                        Delete
                    </button>

                    <button
                        className="edit-comment comment-author"
                        type="submit"
                    >
                        Edit
                    </button>
                    <button
                        className="delete-comment comment-author"
                        type="submit"
                    >
                        Delete
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Comments;
