import React, { Component } from "react";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';







class CharacterSearch extends Component {
  state = {
    characters: [],
    name: "",
    description: "",
   
  };

   componentDidMount() {
  //   this.loadCharacter();
     this.searchMarvel("thor");
  }

  // loadCharacter = () => {
  //   API.getCharacter()
  //     .then(res =>
  //       this.setState({ characters: res.data, title: "", author: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

searchMarvel = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data.data.results }))
      .catch(err => console.log(err));
  
  };

    handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };
    handleFormSubmit = event => {
    event.preventDefault();
    this.searchMarvel(this.state.search);
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.author) {
  //     API.saveCharacter({
  //       title: this.state.title,
  //       author: this.state.author,
       
  //     })
  //       .then(res => this.loadCharacter())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
    return (
       <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList results={this.state.results} />
      </div>
    );
  }
}

export default CharacterSearch;