import React from "react";
import getData from "../../Utils/Api";
import UserCard from "../../Components/UserCard";
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
    this.props.history.push(`/posts?userId=${value}&skip=0&limit=10`);
  };

  getUserCards = () => {
    const { dataList } = this.state;
    return dataList.map((data, key) => (
      <UserCard key={key} data={data} onClick={this.handleClick} id={key + 1} />
    ));
  };
  render() {
    return <div className="homepage">{this.getUserCards()}</div>;
  }
}
