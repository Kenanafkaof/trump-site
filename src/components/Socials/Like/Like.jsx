import * as React from "react";
import { render } from "react-dom";
import c from "classnames";
import "./styles.scss";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

export default class Like extends React.Component {
  state = {
    like: Math.floor(Math.random() * 300),
    dislike: Math.floor(Math.random() * 300),
    likeActive: false,
    dislikeActive: false
  };

  setDislike() {
    this.setState({
      dislikeActive: !this.state.dislikeActive,
      dislike: this.state.dislikeActive
        ? this.state.dislike - 1
        : this.state.dislike + 1
    });
  }
  setLike() {
    this.setState({
      likeActive: !this.state.likeActive,
      like: this.state.likeActive ? this.state.like - 1 : this.state.like + 1
    });
  }

  handleLike() {
    if (this.state.dislikeActive) {
      this.setLike();
      this.setDislike();
    }
    this.setLike();
  }

  handleDislike() {
    if (this.state.likeActive) {
      this.setDislike();
      this.setLike();
    }
    this.setDislike();
  }

  render() {
    return (
      <>
        <div className={c({ ["active-like"]: this.state.likeActive })} onClick={() => this.handleLike()}>
            <div className="wrapper-like">
                <ThumbUpIcon className="count-icon"/> <span className="count">{this.state.like}</span>
            </div>
        </div>
        <div className={c({ ["active-dislike"]: this.state.dislikeActive })} onClick={() => this.handleDislike()}>
            <div className="wrapper-dislike">
                <ThumbDownAltIcon className="count-icon"/> <span className="count">{this.state.dislike}</span>
            </div>
        </div>
      </>
    );
  }
}

