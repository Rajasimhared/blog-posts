import React from "react";
import getData from "../../Utils/Api";
import UserCard from "../../Components/UserCard";
import LoadingCard from "../../Components/LoadingCard";
import "./style.css";

const MemoizedLoader = React.memo(LoadingCard);

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
    if (success) {
      this.setState({ dataList });
    }
  }

  handleClick = (value, name) => {
    const { history } = this.props;
    // Save user name on localstorage as we don't get in further calls
    localStorage.setItem("userName", name);
    history.push(`/posts?userId=${value}&skip=0&limit=10`);
  };

  getUserCards = () => {
    const { dataList } = this.state;
    return dataList.map((data, key) => (
      <UserCard key={key} data={data} onClick={this.handleClick} />
    ));
  };

  render() {
    // style for loader
    const style = {
      height: "100px",
      width: "250px",
      margin: "auto",
      marginTop: "10px"
    };

    const { dataList } = this.state;
    return (
      <div className="homepage">
        {dataList.length !== 0 ? (
          this.getUserCards()
        ) : (
          <MemoizedLoader style={style} count={10} />
        )}
      </div>
    );
  }
}
