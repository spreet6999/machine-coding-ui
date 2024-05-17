import PropTypes from "prop-types";

//* Import components

//* Import utils

//* Import styles
import style from "./style.module.css";

CommentTextArea.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  addCommentText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onAddComment: PropTypes.func.isRequired,
};

function CommentTextArea({
  id = "",
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
        onClick={() => onAddComment(id, value)}
        disabled={!value}
      >
        {addCommentText}
      </button>
    </section>
  );
}

export default CommentTextArea;
