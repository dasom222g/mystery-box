import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Complete from "./pages/Complete";
import Layout from "./components/layout/Layout";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
          <Route path="/complete" element={<Complete />} />
        </Routes>
      </Layout>
    </RecoilRoot>
  );
}

export default App;
