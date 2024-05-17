import PropTypes from "prop-types";

import { getFullDate } from "../../../utils";
import style from "./style.module.css";
import { Fragment, useState } from "react";
import CommentsList from "./CommentsList";

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
};

function Comment({ comment = {} }) {
  const [showReplies, setShowReplies] = useState(false);
  return (
    <Fragment>
      <article className={style["comment-details-card"]}>
        {/* Comment Text */}
        <div title={comment?.comment}>
          {comment?.comment?.length >= 220
            ? comment?.comment?.substring(0, 220) + "..."
            : comment?.comment}
        </div>

        {/* Comment Owner Details */}
        <p className={style["comment-owner-details"]}>
          <strong
            title={comment?.user_email}
            style={{ fontStyle: "italic", marginRight: "0.5rem" }}
          >
            {"-    " + comment?.user_email}
          </strong>
          <span style={{ opacity: 0.5, fontWeight: 400 }}>
            {getFullDate(comment?.createdAt)}
          </span>
        </p>

        {/* Comment Actions Group */}
        <section className={style["comment-actions-group"]}>
          <button
            className={style["delete-button"]}
            onClick={() => setShowReplies(!showReplies)}
            disabled={!comment?.replies?.length}
          >
            {showReplies ? "Hide Replies" : "Show Replies"}
          </button>
          <button
            className={style["reply-button"]}
            onClick={() => setShowReplies(true)}
          >
            Reply
          </button>
        </section>

        {/* Comment Replies Group - Recursively call this component if showReplies is true and there are replies */}
        {showReplies && comment?.replies?.length > 0 && (
          <CommentsList data={comment?.replies} />
        )}
      </article>
    </Fragment>
  );
}

export default Comment;
