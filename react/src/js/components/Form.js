import React from "react";
import axios from "axios";
import GoodsData from "./GoodsData";

const url = 'http://localhost:9085/search';

export default class Form extends React.Component {
  constructor(){
    super();
    this.state = {
      goods: null,
      result: "none",
      error: 0,
      records: 0
    };
    this.elements = null;
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();

    //JSONデータ作成
    //elementsに保存されたデータからフォームデータを取得する。
    //elements名はフォームデータのnameに指定されたものが設定される。
    var JSONdata = {
      name: this.elements['name'].value,
    };
    if (JSONdata.name == ""){
      this.setState({error: 1});
      return;
    }

    //APIに商品検索データをPOSTし、情報を取得する。
    axios.post(url, JSONdata).then((res) => {
      this.setState({error: 0});
      this.setState({result: JSON.stringify(res.data)});
      this.setState({goods: res.data});
      this.setState({records: res.data.length});
    }).catch(err => {
      this.setState({error: 2});
    });
  }

  //商品名検索フォーム表示
  render() {
    var visible = (this.state.records != 0);
    return (
	<div align="center">
	<form className="search" onSubmit={this.handleFormSubmit} ref={el => this.elements = el && el.elements} >
	  <input type="text" name='name' placeholder="商品名" />
	  <input type="submit" value="送信" /><br />
	</form>
	<br />
	{ visible && <GoodsData data={this.state.goods} records={this.state.records } />}<br />
	{ this.state.error == 1 && <div><font color = "red">商品名を入力してください</font></div> }<br />
	{ this.state.error == 2 && <div><font color = "red">商品が存在しません</font></div> }<br />
	</div>
    );
  }
}
