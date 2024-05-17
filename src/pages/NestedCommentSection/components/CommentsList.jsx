import PropTypes from "prop-types";
import Comment from "./Comment";

import style from "./style.module.css";

CommentsList.propTypes = {
  data: PropTypes.array.isRequired,
};

function CommentsList({ data = [] }) {
  return (
    <section className={style["comments-list-container"]}>
      {!data.length && <p>No comments, be the first to comment</p>}
      {data.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </section>
  );
}

export default CommentsList;
