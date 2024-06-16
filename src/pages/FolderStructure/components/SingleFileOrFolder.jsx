import { useState } from "react";
import PropTypes from "prop-types";

import FolderStructure from "..";

//* Import styles
import style from "../style.module.css";

SingleFolderOrFile.propTypes = {
  explorerObj: PropTypes.object,
};
export default function SingleFolderOrFile({ explorerObj = {} }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!explorerObj) return null;
  if (Object.keys(explorerObj).length === 0) return null;
  if (explorerObj?.isFolder)
    return (
      <article className={style["single-folder-or-file-container"]}>
        <span onClick={() => setIsExpanded((prevState) => !prevState)}>
          🗂{"  "}
          {explorerObj?.name}
        </span>
        {isExpanded && explorerObj?.items && explorerObj?.items?.length ? (
          <div style={{ paddingLeft: "1rem" }}>
            <FolderStructure explorerData={explorerObj?.items} />
          </div>
        ) : null}
      </article>
    );
  else
    return (
      <div>
        <span>
          📄{"  "}
          {explorerObj?.name}
        </span>
      </div>
    );
}
