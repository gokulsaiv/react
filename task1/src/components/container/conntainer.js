import React from "react";
import SearchBar from "../search/search_bar.js";
import List from "../list/list.js";
import Pagination from "../pagination/pagination-btn.js";
import API_KEY from "../../constants.js";


export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",

      items: [],
      nextPageToken: "",
      prevPageToken: "",
    };
    this.handleSearchOnChange = this.handleSearchOnChange.bind(this);
    this.handleNextPageClick = this.handleNextPageClick.bind(this);
    this.handlePreviousPageClick = this.handlePreviousPageClick.bind(this);
  }
  handleNextPageClick() {
    const urlLink = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&type=video&part=snippet&maxResults=15&q=${this.state.query}&pageToken=${this.state.nextPageToken}`;
    this.fetchData(urlLink);
  }
  handlePreviousPageClick() {
    const urlLink = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&type=video&part=snippet&maxResults=15&q=${this.state.query}&pageToken=${this.state.prevPageToken}`;
    this.fetchData(urlLink);
  }
  handleSearchOnChange(queryStr) {
    const str = queryStr;

    this.setState({ query: str });

    const urlLink = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&type=video&part=snippet&maxResults=15&q=${str}&pageToken=`;
    this.fetchData(urlLink);
  }

  async fetchData(urlLink) {
    try {
      const apiData = await fetch(urlLink);
      const apiJson = await apiData.json();
      const { items, nextPageToken, prevPageToken } = apiJson;
      const prevPageTokenCheck = prevPageToken ? prevPageToken : "";
      this.setState({
        nextPageToken: nextPageToken,
        prevPageToken: prevPageTokenCheck,
        items: [...items],
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <>
        <SearchBar handleSearchOnChange={this.handleSearchOnChange} />
        <Pagination
          handleNextPageClick={this.handleNextPageClick}
          handlePreviousPageClick={this.handlePreviousPageClick}
        />
        <List listData={this.state.items} />
      </>
    );
  }
}
