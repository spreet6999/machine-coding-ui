import PropTypes from "prop-types";

//* Import components
import Comment from "./Comment";

//* Import utils

//* Import styles
import style from "./style.module.css";

CommentsList.propTypes = {
  data: PropTypes.array.isRequired,
  onAddComment: PropTypes.func.isRequired,
};

function CommentsList({ data = [], onAddComment = () => {} }) {
  return (
    <section className={style["comments-list-container"]}>
      {!data.length && <p>No comments, be the first to comment</p>}
      {data.map((comment, index) => (
        <Comment key={index} comment={comment} onAddComment={onAddComment} />
      ))}
    </section>
  );
}

export default CommentsList;
