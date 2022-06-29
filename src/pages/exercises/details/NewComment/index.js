import React from "react";

function NewComment() {
    return (
        <section className="new-comment">
            <h3>Add comment</h3>
            <form method="post">
                <input type="text" placeholder="Whrite here a new comment..." />
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default NewComment;
