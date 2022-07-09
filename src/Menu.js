import React from 'react';
export class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const newSrc = e.target.value;
    this.props.chooseVideo(newSrc);
  }
  render() {
    return (
      <form onClick={this.handleChange}>
        <input type="radio" name="src" value="1" /> fast
        <input type="radio" name="src" value="2" /> slow
        <input type="radio" name="src" value="3" /> cute
        <input type="radio" name="src" value="4" /> eek
        <br />
        <input type="range" step="1" min="1" max="4" name="src" />
      </form>
    );
  }
}