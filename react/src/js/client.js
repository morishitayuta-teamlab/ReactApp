import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
//表示系としてLayoutのインクルードを行なっている
import Layout from "./pages/Layout";

const app = document.getElementById('app');
ReactDOM.render(
  <Router>
    <Layout>
    </Layout>
  </Router>,
app);
