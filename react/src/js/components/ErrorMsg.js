import React from "react";

export default class ErrorMsg extends React.Component {
  render() {
    var errMsg = {
	"none" : "none",
	"noData" : "商品がありません",
	"blank" : "商品名を入力してください",
	"invalidString" : "無効な文字(\"/'/%/;)が含まれています"
    };
    return (
	<div>
	{this.props.msg != "none" && <font color="red">{errMsg[this.props.msg]}</font>}
	</div>
    );
  }
}
