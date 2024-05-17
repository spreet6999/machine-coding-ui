import PropTypes from "prop-types";

import style from "./style.module.css";

CommentTextArea.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  addCommentText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onAddComment: PropTypes.func.isRequired,
};

function CommentTextArea({
  placeholder = "Add a comment",
  value = "",
  addCommentText = "Add",
  onChange = () => {},
  onAddComment = () => {},
}) {
  return (
    <section className={style["comment-text-area-container"]}>
      <textarea
        className={style["comment-text-area"]}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <button
        className={style["add-comment-button"]}
        onClick={onAddComment}
        disabled={!value}
      >
        {addCommentText}
      </button>
    </section>
  );
}

export default CommentTextArea;
