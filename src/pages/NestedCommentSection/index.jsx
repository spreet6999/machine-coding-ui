import { useState } from "react";
import CommentTextArea from "./components/CommentTextArea";

//* Import components
import nestedCommentsData from "../../assets/data/NestedCommentsSection.json";
import CommentsList from "./components/CommentsList";

//* Import utils
import { insertNewCommentAtId } from "./utils";

//* Import styles
import style from "./style.module.css";

function NestedCommentSection() {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState(nestedCommentsData);

  function handleNewCommentTextChange(e) {
    setNewComment(e.target.value);
  }

  function handleAddNewComment(parentId, newComment) {
    const updatedComments = insertNewCommentAtId(
      comments,
      parentId,
      newComment
    );
    console.log(updatedComments);
    setComments(updatedComments);
    setNewComment("");
  }

  return (
    <section className={style["nested-comment-section-container"]}>
      <CommentTextArea
        placeholder="Add a new reply"
        value={newComment}
        onChange={handleNewCommentTextChange}
        onAddComment={handleAddNewComment}
      />
      <CommentsList data={comments} onAddComment={handleAddNewComment} />
    </section>
  );
}

export default NestedCommentSection;
