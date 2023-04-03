import React from "react";
import { Routes, Route } from 'react-router-dom';
import ConverterPage from "./pages/ConverterPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ConverterPage />} />
    </Routes>
  );
};

export default App;