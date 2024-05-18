import PropTypes from "prop-types";

TabContent.propTypes = {
  children: PropTypes.element || PropTypes.string,
  style: PropTypes.object,
};

function TabContent({ children = <></>, style = {} }) {
  return <section style={{ height: "100%", ...style }}>{children}</section>;
}

export default TabContent;
