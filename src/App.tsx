import React from "react";
import { Routes, Route } from 'react-router-dom';
import ConverterPage from "./pages/ConverterPage";
import Layout from "./components/Layout";

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<ConverterPage />} />
      </Routes>
    </Layout>
  );
};

export default App;