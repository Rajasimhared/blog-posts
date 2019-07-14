import React from "react";
import getData from "../../Utils/Api";
import PostCard from "../../Components/PostCard";
import { API_BASE } from "../../Utils/Constants";
import LoadingCard from "../../Components/LoadingCard";
import "./style.css";

const MemoizedLoader = React.memo(LoadingCard);

export default class DetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: [],
      loading: false
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
    this.setState({ loading: true });
    fetch(`${API_BASE}${window.location.pathname}/comments`)
      .then(response => response.json())
      .then(myJson => this.setState({ comments: myJson, loading: false }));
  };

  deletePost = () => {
    const { history } = this.props;
    fetch(`${API_BASE}${window.location.pathname}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(history.goBack());
  };

  render() {
    const { comments, dataList, loading } = this.state;
    const styleContent = {
      height: "100px",
      width: "100%"
    };
    const styleComment = {
      height: "30px",
      width: "100%"
    };
    return (
      <div className="homepage">
        {dataList.length !== 0 ? (
          this.getUserCards()
        ) : (
          <MemoizedLoader style={styleContent} count={1} />
        )}
        <button onClick={this.fetchComments} className="button">
          Show Comments
        </button>
        <button onClick={this.deletePost} className="button">
          Delete Post
        </button>

        {comments ? (
          <div>
            {comments.map(value => (
              <div className="comment">{value.body}</div>
            ))}
          </div>
        ) : (
          loading && <MemoizedLoader style={styleComment} count={10} />
        )}
      </div>
    );
  }
}
