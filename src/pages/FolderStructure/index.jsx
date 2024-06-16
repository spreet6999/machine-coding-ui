import PropTypes from "prop-types";

//* Import styles
import style from "./style.module.css";
import SingleFolderOrFile from "./components/SingleFileOrFolder";

FolderStructure.propTypes = {
  explorerData: PropTypes.arrayOf(PropTypes.object),
};

export default function FolderStructure({ explorerData = [] }) {
  if (explorerData?.length === 0) return null;

  return (
    <section className={style["folder-structure-container"]}>
      {explorerData?.map((explorerObj) => (
        <SingleFolderOrFile key={explorerObj?.id} explorerObj={explorerObj} />
      ))}
    </section>
  );
}
