import React from "react";
import getData from "../../Utils/Api";
import UserCard from "../../Components/UserCard";
import LoadingCard from "../../Components/LoadingCard";
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

  handleClick = (value, name) => {
    localStorage.setItem("userName", name);
    this.props.history.push(`/posts?userId=${value}&skip=0&limit=10`);
  };

  getUserCards = () => {
    const { dataList } = this.state;
    return dataList.map((data, key) => (
      <UserCard key={key} data={data} onClick={this.handleClick} />
    ));
  };
  render() {
    const style = {
      height: "100px",
      width: "300px"
    };
    const { dataList } = this.state;
    return (
      <div className="homepage">
        {dataList.length !== 0 ? (
          this.getUserCards()
        ) : (
          <LoadingCard style={style} count={8} />
        )}
      </div>
    );
  }
}
