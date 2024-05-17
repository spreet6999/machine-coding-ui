import cloneDeep from "lodash.clonedeep";
import { v4 as uuidv4 } from "uuid";

export function updateCommentsData(
  commentsData = [],
  parentId = "",
  commentToInsert = ""
) {
  if (commentsData.length === 0 || !commentToInsert) {
    return commentsData;
  }
  const matchingComment = commentsData.find(
    (comment) => comment.id === parentId
  );
  if (matchingComment) {
    matchingComment.replies = [
      {
        id: uuidv4(),
        user_email: "Anonymous@gmail.com",
        comment: commentToInsert,
        likes: 0,
        dislikes: 0,
        replies: [],
        createdAt: new Date(),
      },
      ...(matchingComment?.replies ? matchingComment.replies : []),
    ];
    return commentsData;
  } else {
    for (let commentObj of commentsData) {
      if (commentObj?.replies?.length) {
        commentObj.replies = updateCommentsData(
          commentObj.replies,
          parentId,
          commentToInsert
        );
      }
    }
  }
  return commentsData;
}

export function insertNewCommentAtId(
  commentsData = [],
  parentId = "",
  commentToInsert = ""
) {
  console.log("commentsData", commentsData, parentId, commentToInsert);
  if (commentsData.length === 0 || !commentToInsert) {
    return commentsData;
  }
  const mutableCommentsData = cloneDeep(commentsData);
  console.log("mutableCommentsData", mutableCommentsData);
  if (parentId) {
    console.log("HERE");
    return updateCommentsData(mutableCommentsData, parentId, commentToInsert);
  } else {
    console.log("HERE 2");
    return [
      {
        id: uuidv4(),
        user_email: "Anonymous@gmail.com",
        comment: commentToInsert,
        likes: 0,
        dislikes: 0,
        replies: [],
        createdAt: new Date(),
      },
      ...mutableCommentsData,
    ];
  }
}
