import React from "react";

export default class GoodsData extends React.Component {
  render() {
    var list = [];
    var obj = this.props.data;
    var records = this.props.records;

    for (var i in obj){
      list.push(
	<tr key={i}>
	  <td>{obj[i].name}</td>
	  <td align="right">{obj[i].price}</td>
	  <td>{obj[i].description}</td>
	</tr>
      );
    }
    return (
      <div>
	{records} 件見つかりました。<br /><br />
	<table border="1" align="center"> 
	<tbody>
	<tr>
	  <th>名前</th>
	  <th>値段</th>
	  <th>説明</th>
	</tr>
	{list}
	</tbody>
	</table>
      </div>
    );
  }
}
