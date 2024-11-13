import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Body/MainPage/MainPage";
import ContentSelector from "./Body/Contents/ContentSelector";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 메인화면 */}
        <Route path="/" element={<MainPage />} />

        <Route path="/index" element={<ContentSelector />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
