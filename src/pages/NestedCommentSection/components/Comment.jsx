import PropTypes from "prop-types";
import { useState } from "react";

//* Import components
import CommentsList from "./CommentsList";
import CommentTextArea from "./CommentTextArea";

//* Import utils
import { getFullDate } from "../../../utils";

//* Import styles
import style from "./style.module.css";

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  onAddComment: PropTypes.func.isRequired,
};

function Comment({ comment = {}, onAddComment = () => {} }) {
  const [showReplies, setShowReplies] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const [newReply, setNewReply] = useState("");

  function handleOpenReplyCommentBox() {
    setIsReplying(!isReplying);
    if (!isReplying) {
      setNewReply("");
    }
  }

  function handleNewReplyTextChange(e) {
    setNewReply(e.target.value);
  }

  function handleAddNewReply(parentId, newReply) {
    onAddComment(parentId, newReply);
    setNewReply("");
  }

  return (
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
          onClick={handleOpenReplyCommentBox}
        >
          {isReplying ? "Cancel" : "Reply"}
        </button>
      </section>

      {isReplying && (
        <CommentTextArea
          id={comment?.id}
          placeholder="Add a new reply"
          value={newReply}
          onChange={handleNewReplyTextChange}
          onAddComment={handleAddNewReply}
        />
      )}

      {/* Comment Replies Group - Recursively call this component if showReplies is true and there are replies */}
      {showReplies && comment?.replies?.length > 0 && (
        <CommentsList
          data={comment?.replies}
          onAddComment={handleAddNewReply}
        />
      )}
    </article>
  );
}

export default Comment;
