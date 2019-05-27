import React from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form.js";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <h1>商品検索</h1>
	<Form />
      </div>
    );
  }
}
