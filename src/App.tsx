import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Complete from "./pages/Complete";
import routes from "./lib/routes";
import Layout from "./components/layout/Layout";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Layout>
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.quiz} element={<Quiz />} />
          <Route path={routes.result} element={<Result />} />
          <Route path={routes.complete} element={<Complete />} />
        </Routes>
      </Layout>
    </RecoilRoot>
  );
}

export default App;
