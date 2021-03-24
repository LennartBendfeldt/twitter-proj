// // you will always need to import React from react
// // import {Component} when building a class component
import React, { Component } from "react";
// // importing our CSS file from src>css
import "../css/Feed.css";
import Tweets from "./Tweets";

const GENERIC_Tweets_USERNAME = "Username",
  GENERIC_Tweets_TIMESTAMP = "Timestamp";
class Feed extends Component {
  // // constructor method available to us in class components
  constructor() {
    super();
    this.state = {
      tweets: [],
      username: GENERIC_Tweets_USERNAME,
      body: "",
      timestamp: GENERIC_Tweets_TIMESTAMP,
    };
  }
  
  addTweets = () => {
    if(this.state.body !== ""){
    this.setState({
      tweets: this.state.tweets.concat({
        id: Date.now(),
        body: this.state.body,
      }),
      body: "",
    });
    this.inputEntry.value = "";
  }
  };

  handleTweet = (event) => {
    this.setState({ body: event.target.value });
  };

  deleteTweets(id) {
    let newTweetsArr = this.state.tweets;
    newTweetsArr.map((tweets, index) => {
      if (id === tweets.id) {
        newTweetsArr.splice(index, 1);
      }
    });
    this.setState({
      tweets: newTweetsArr,
    });
  }

  // // render method - render what is returned (JSX) onto the browser
  render() {
    return (
      <div>
        <div className="div-board">
          <div className="row">
          <form action="/">
          <button 
          type="submit" >
            Logout
          </button>
          </form>
            <div>
              <input
                onChange={this.handleTweet}
                placeholder="What's Happening?"
                ref={el => this.inputEntry = el}
              ></input>
            </div>
            <div>
              {this.state.description}
              <button
                className="btn btn-success add-button"
                onClick={this.addTweets.bind(this)}
              >
                Tweet
              </button>
            </div>
            {this.state.tweets.reverse().map((tweets) => {
              return (
                <Tweets
                  key={tweets.id}
                  id={tweets.id}
                  deleteHandler={this.deleteTweets.bind(this)}
                  body={tweets.body}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Feed;
