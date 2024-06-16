import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopBottomLayout from "../layout/TopBottom";
import Home from "../pages/Home";
import NestedCommentSection from "../pages/NestedCommentSection";
import Tabs from "../pages/Tabs";
import ProgressBar from "../pages/ProgressBar";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<TopBottomLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/nested-comments" element={<NestedCommentSection />} />
          <Route path="/tabs" element={<Tabs />} />
          <Route path="/progressbar" element={<ProgressBar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
