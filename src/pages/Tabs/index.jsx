import { useState } from "react";
import TabBar from "./components/TabBar";
import { tabsConfig } from "./config";

import style from "./style.module.css";

function Tabs() {
  const [activeTab, setActiveTab] = useState(tabsConfig[0].id ?? 1);

  const handleTabChange = (e) => {
    setActiveTab(parseInt(e.target.id));
  };

  return (
    <div className={style["tabs-and-content-container"]}>
      <TabBar
        variant="spaced"
        data={tabsConfig}
        activeTab={activeTab}
        onChange={handleTabChange}
      />
    </div>
  );
}

export default Tabs;
