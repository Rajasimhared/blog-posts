import React from "react";
import getData from "../../Utils/Api";
import PostCard from "../../Components/PostCard";
import "./style.css";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: []
    };
  }

  componentDidMount() {
    this.getPostsData();
  }

  async getPostsData() {
    const { dataList, success } = await getData();
    this.setState({ dataList });
  }

  handleClick = value => {
    this.props.history.push(`/posts/${value}`);
  };

  getUserCards = () => {
    const { dataList } = this.state;
    return dataList.map((data, key) => (
      <div onClick={() => this.handleClick(data.id)} className="post-titles">
        {data.title}
      </div>
    ));
  };
  render() {
    return <div className="homepage">{this.getUserCards()}</div>;
  }
}
