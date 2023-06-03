import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const DAIKESGLOBAL = React.lazy(() => import("pages/DAIKESGLOBAL"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<DAIKESGLOBAL />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="/daikesglobal" element={<DAIKESGLOBAL />} /> */}
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
