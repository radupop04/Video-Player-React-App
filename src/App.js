import React from 'react';
import { Video } from './Video';
import { Menu } from './Menu';
const VIDEOS = {
  "1": 'https://content.codecademy.com/courses/React/react_video-fast.mp4',
  "2": 'https://content.codecademy.com/courses/React/react_video-slow.mp4',
  "3": 'https://content.codecademy.com/courses/React/react_video-cute.mp4',
  "4": 'https://content.codecademy.com/courses/React/react_video-eek.mp4'
};
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { src: VIDEOS[1] };
    this.chooseVideo = this.chooseVideo.bind(this);
  }
  chooseVideo(newVideo) {
    this.setState({
      src: VIDEOS[newVideo]
    });
  }
  render() {
    return (
      <div>
        <h1>Video Player</h1>
        <Menu chooseVideo={this.chooseVideo}/>
        <Video src={this.state.src}/>
      </div>
    );
  }
}