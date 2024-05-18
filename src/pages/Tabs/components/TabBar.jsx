import PropTypes from "prop-types";

import style from "./style.module.css";
import TabButton from "./TabButton";

TabBar.propTypes = {
  data: PropTypes.array.isRequired,
  variant: PropTypes.string,
  activeTab: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  onDeleteTab: PropTypes.func.isRequired,
};

function TabBar({
  data = [],
  variant = "normal",
  activeTab = 1,
  onChange = () => {},
  onDeleteTab = () => {},
}) {
  return (
    <section className={style["tab-buttons-container"]}>
      {data?.length
        ? data.map((item) => {
            const buttonWidth =
              variant === "spaced" ? `${(1 / data.length) * 100}%` : "auto";

            return (
              <TabButton
                key={item.id}
                label={item.title}
                id={item.id}
                isActive={item.id === activeTab}
                style={{ width: buttonWidth, ...item?.style }}
                additionalProps={item?.additionalProps ?? {}}
                onClick={onChange}
                onDelete={onDeleteTab}
              />
            );
          })
        : null}
    </section>
  );
}

export default TabBar;
