import React from "react";
import getData from "../../Utils/Api";
import PostCard from "../../Components/PostCard";
import { API_BASE } from "../../Utils/Constants";
import "./style.css";

export default class DetailsPage extends React.Component {
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
    // this.props.history.push(`/posts?userId=${value}&skip=0&limit=10`);
  };

  getUserCards = () => {
    const { dataList } = this.state;
    return dataList.map((data, key) => (
      <PostCard key={key} data={data} onClick={this.handleClick} id={key + 1} />
    ));
  };

  fetchComments = () => {
    fetch(`${API_BASE}${window.location.pathname}/comments`)
      .then(response => response.json())
      .then(myJson => this.setState({ comments: myJson }));
  };

  deletePost = () => {
    fetch(`${API_BASE}${window.location.pathname}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(this.props.history.goBack());
  };

  render() {
    const { comments } = this.state;
    return (
      <div className="homepage">
        {this.getUserCards()}
        <button onClick={this.fetchComments}>Show Comments</button>
        <button onClick={this.deletePost}>Delete Post</button>
        <div>
          {comments &&
            comments.map(value => <div className="comment">{value.body}</div>)}
        </div>
      </div>
    );
  }
}
