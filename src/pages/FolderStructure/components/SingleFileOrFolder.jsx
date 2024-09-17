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
  const [isSingleClicked, setIsSingleClicked] = useState(false);

  //* Double Click Feature Flag
  const enableDoubleClickFeature = true;
  let timerId = null;
  const handleClick = () => {
    if (enableDoubleClickFeature) {
      if (!isSingleClicked && !timerId) {
        setIsSingleClicked(true);
        timerId = setTimeout(() => {
          setIsSingleClicked(false)
        }, 300)
      } else if (isSingleClicked) {
        setIsExpanded(!isExpanded);
        timerId = null;
      }
    } else setIsExpanded(!isExpanded);
  }

  if (!explorerObj) return null;
  if (Object.keys(explorerObj).length === 0) return null;
  if (explorerObj?.isFolder)
    return (
      <article className={style["single-folder-or-file-container"]}>
        <span
          // onClick={() => setIsExpanded((prevState) => !prevState)}
          onClick={handleClick}
        >
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
