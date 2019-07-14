import React from "react";
import getData from "../../Utils/Api";
import PostCard from "../../Components/PostCard";
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
    const { dataList } = this.state;
    const style = {
      height: "60px",
      width: "100%"
    };
    let user = localStorage.getItem("userName");
    return (
      <div className="homepage">
        <h3>{user}</h3>
        {dataList.length !== 0 ? (
          this.getUserCards()
        ) : (
          <LoadingCard style={style} count={5} />
        )}
      </div>
    );
  }
}
