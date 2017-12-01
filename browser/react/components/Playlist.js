import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PlaylistForm from './PlaylistForm';
import Songs from './Songs';

export default class Playlist extends Component {

  constructor(props) {
    super(props);
    this.state = {
      playlistName: '',
      playlist: [],
      errors: [],
      disabled: true
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  onSubmit(event) {
    // HERE IT IS INPUT.TARGET.NAME!!!!!!
    event.preventDefault();
    this.setState({
      playlistName: ''
    });
  }

  validate(event) {
    let value = event.target.value;
    console.log(value);
    if(value.length > 16) {
      if(this.state.errors.length === 0) {
        this.setState({
          errors: this.state.errors.concat({message: 'Title is too long'}),
          disabled: true
        });
      }
    } else {
      this.setState({
        errors: [],
        disabled: false
      });
    }
    this.setState({
      playlistName: value
    });
  }

  render() {
    return(
      <div>
        <Songs songs={this.state.playlist}/>
        <PlaylistForm
          disabled={this.state.disabled}
          onSubmit={this.onSubmit}
          onChange={this.validate}
          inputText={this.state.playlistName}
          errors={this.state.errors}
        />
      </div>
    )
  }
}
