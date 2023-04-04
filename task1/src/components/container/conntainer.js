import React from "react";
import SearchBar from "../search/search_bar.js";
import List from "../list/list.js";
import Pagination from "../pagination/pagination-btn.js";

const API_KEY = process.env.REACT_APP_API_KEY;

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      url: `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&type=video&part=snippet&maxResults=15&q=`,
      ytApiData: [],
      nextPageToken: "",
      prevPageToken: "",
    };
    this.handleQueryState = this.handleQueryState.bind(this);
    this.setStateNextToken = this.setStateNextToken.bind(this);
    this.setStatePrevToken = this.setStatePrevToken.bind(this);
  }
  setStateNextToken() {
    this.setState({
      url: `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&type=video&part=snippet&maxResults=15&q=${this.state.query}&pageToken=${this.state.nextPageToken}`,
    });
  }
  setStatePrevToken() {
    this.setState({
      url: `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&type=video&part=snippet&maxResults=15&q=${this.state.query}&pageToken=${this.state.prevPageToken}`,
    });
  }
  handleQueryState(queryStr) {
    const str = queryStr;
    console.log(str);
    this.setState({ query: str });
    this.setState({
      url: `https://www.googleapis.com/youtube/v3/search?key=AIzaSyA7czYe075wnp3HGBgQlk6knPkQZmyoYb4&type=video&part=snippet&maxResults=15&q=${str}&pageToken=`,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.url !== this.state.url) {
      this.fetchData();
    }
  }
  fetchData() {
    fetch(this.state.url)
      .then((res) => res.json())
      .then((data) => {
        const newState = data.items;
        this.setState({ nextPageToken: data.nextPageToken });
        data.prevPageToken
          ? this.setState({ prevPageToken: data.prevPageToken })
          : this.setState({ prevPageToken: "" });
        this.setState({ ytApiData: [...newState] });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <>
        <SearchBar handlestate={this.handleQueryState} />
        <Pagination
          nextToken={this.setStateNextToken}
          prevToken={this.setStatePrevToken}
        />
        <List listData={this.state.ytApiData} />
      </>
    );
  }
}
