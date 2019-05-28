import React from "react";
import axios from "axios";
import GoodsData from "./GoodsData";
import ErrorMsg from "./ErrorMsg";

const url = 'http://localhost:9085/search';

export default class Form extends React.Component {
  constructor(){
    super();
    this.state = {
      goods: null,
      result: "none",
      error: "none",
      records: 0
    };
    this.elements = null;
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  init () {
    this.state = {
      goods: null,
      result: "none",
      error: "none",
      records: 0
    };
    this.elements = null;
  }

  isValidStr (string) {
    if (string.match(/[\"\'%;]/)){
      return false;
    } else {
      return true;
    }
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.setState({error: "none"});

    //JSONデータ作成
    //elementsに保存されたデータからフォームデータを取得する。
    //elements名はフォームデータのnameに指定されたものが設定される。
    var JSONdata = {
      name: this.elements['name'].value,
    };
    if (JSONdata.name == ""){
      this.setState({error: "blank"});
      return;
    }
    if (!this.isValidStr(JSONdata.name)){
      this.setState({error: "invalidString"});
      return;
    }

    //APIに商品検索データをPOSTし、情報を取得する。
    axios.post(url, JSONdata).then((res) => {
      this.setState({result: JSON.stringify(res.data)});
      this.setState({goods: res.data});
      this.setState({records: res.data.length});
    }).catch(err => {
      this.setState({error: "noData"});
    });
  }

  //商品名検索フォーム表示
  render() {
    return (
	<div align="center">
	<form className="search" onSubmit={this.handleFormSubmit} ref={el => this.elements = el && el.elements} >
	  <input type="text" name='name' placeholder="商品名" />
	  <input type="submit" value="送信" /><br />
	</form>
	<br />
	<ErrorMsg msg = {this.state.error} />
	{this.state.error == "none" &&
		<GoodsData data={this.state.goods} records={this.state.records} />}
	</div>
    );
  }
}
