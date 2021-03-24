import React, { Component } from "react";
import PropTypes from "prop-types";
import '../css/Tweets.css';

// const GENERIC_Tweets_USERNAME = "Username" , GENERIC_Tweets_BODY = "Body", GENERIC_Tweets_TIMESTAMP = "Timestamp";
class Tweets extends Component {
  // // ignore constructor method for now
  constructor(props) {
    super(props);
    this.usernameContent = React.createRef();
    this.bodyContent = React.createRef();
    this.timestampContent = React.createRef();
    this.state = {
      count: 0,
      didLike: false
    };
  }

  incrementMe = () => {
    if(this.state.didLike === false){
    let newCount = this.state.count + 1;
    this.setState({
      count: newCount,
      didLike: true
    });
  } else {
    let newCount = this.state.count - 1;
    this.setState({
      count: newCount,
      didLike: false
    });
  }
  };

  handleDelete() {
    this.props.deleteHandler(this.props.id);
  }
  // render method return JSX
  render() {
    let usernameElement, bodyElement, timestampElement, buttonArea, likeButton, likeDisplay;

    usernameElement = <h5 className="card-username">{this.props.username}</h5>;
    bodyElement = <p>{this.props.body}</p>;
    // console.log(this.props);
    timestampElement = <p>{this.props.timestamp}</p>;
    buttonArea = (
      <div>
        <button
          className="btn btn-danger"
          onClick={this.handleDelete.bind(this)}
        >
          Delete
        </button>
      </div>
    );
    likeButton = (
      <div>
        <button onClick={this.incrementMe} className="like-btn"></button>
      </div>
    );
    likeDisplay = (
      <div>
        <span>Likes: {this.state.count}</span>
      </div>
    );

    return (
      <div className="col-sm-6">
        <div className="card card-view">
          <div className="card-synopsis">
            {usernameElement}
            {bodyElement}
            {timestampElement}
            {buttonArea}
            {likeButton}
            {likeDisplay}
          </div>
        </div>
      </div>
    );
  }
}

Tweets.propTypes = {
  username: PropTypes.string,
};
export default Tweets;
