import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopBottomLayout from "../layout/TopBottom";
import Home from "../pages/Home";
import NestedCommentSection from "../pages/NestedCommentSection";
import Tabs from "../pages/Tabs";
import ProgressBar from "../pages/ProgressBar";
import StopWatch from "../pages/StopWatch";
import StarRating from "../pages/StarRating";
import FolderStructure from "../pages/FolderStructure";

import folderStructureData from "../assets/data/FolderStructureData.json";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<TopBottomLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/nested-comments" element={<NestedCommentSection />} />
          <Route path="/tabs" element={<Tabs />} />
          <Route path="/progressbar" element={<ProgressBar />} />
          <Route path="/stopwatch" element={<StopWatch />} />
          <Route path="/star-rating" element={<StarRating />} />
          <Route
            path="/folder-structure"
            element={<FolderStructure explorerData={folderStructureData} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
