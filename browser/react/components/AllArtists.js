import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class AllArtists extends Component {

  constructor () {
    super();
    this.state = {
      artists: [],
      visibleArtists: [],
      searchInput: ''
    };
    this.inputChange = this.inputChange.bind(this);
  }

  componentDidMount () {
    axios.get('/api/artists')
      .then(res => res.data)
      .then(artists => this.setState({ artists, visibleArtists: artists }));
  }

  inputChange (event) {
    const value = event.target.value.toUpperCase();
    const visibleArtists = this.state.artists.filter((artist) => artist.name.toUpperCase().match(value));
    this.setState({searchInput: value, visibleArtists});
  }

  render () {

    const artists = this.state.visibleArtists;

    return (
      <div>
        <h3>Artists</h3>
        <form className="form-group" style={{marginTop: '20px'}}>
          <input
            className="form-control"
            placeholder="Enter artist name"
            onChange={this.inputChange}
          />
        </form>
        <div className="list-group">
          {
            artists.map(artist => {
              return (
                <div className="list-group-item" key={artist.id}>
                  <Link to={`/artists/${artist.id}`}>{ artist.name }</Link>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}
