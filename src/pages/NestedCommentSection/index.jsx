import { useState } from "react";
import CommentTextArea from "./components/CommentTextArea";

import style from "./style.module.css";
import nestedCommentsData from "../../assets/data/NestedCommentsSection.json";
import CommentsList from "./components/CommentsList";

function NestedCommentSection() {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState(nestedCommentsData);

  function handleNewCommentTextChange(e) {
    setNewComment(e.target.value);
  }

  function handleAddNewComment() {
    setNewComment("");
    console.log("ADDED NEW COMMENT");
  }

  return (
    <section className={style["nested-comment-section-container"]}>
      <CommentTextArea
        placeholder="Add new a comment"
        value={newComment}
        onChange={handleNewCommentTextChange}
        onAddComment={handleAddNewComment}
      />
      <CommentsList data={comments} />
    </section>
  );
}

export default NestedCommentSection;
