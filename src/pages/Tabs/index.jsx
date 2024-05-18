import { useState, useEffect } from "react";

//* Import Components
import TabBar from "./components/TabBar";
import TabContent from "./components/TabContent";

//* Import assets/styles
import { tabsConfig } from "./config";
import style from "./style.module.css";

function Tabs() {
  const [tabs, setTabs] = useState(tabsConfig);
  const [activeTab, setActiveTab] = useState(tabs[0]?.id ?? 1);

  useEffect(() => {
    setActiveTab(tabs[0]?.id ?? 1);
  }, [tabs]);

  const handleTabChange = (e) => {
    setActiveTab(parseInt(e.target.id));
  };

  const handleDeleteTab = (e) => {
    setTabs((prevTabs) =>
      prevTabs.filter((tab) => tab.id !== parseInt(e.target.value))
    );
  };

  return (
    <div className={style["tabs-and-content-container"]}>
      <TabBar
        variant="spaced"
        data={tabs}
        activeTab={activeTab}
        onChange={handleTabChange}
        onDeleteTab={handleDeleteTab}
      />
      <TabContent>
        {tabs.filter((item) => item.id === activeTab)[0]?.content}
      </TabContent>
    </div>
  );
}

export default Tabs;
