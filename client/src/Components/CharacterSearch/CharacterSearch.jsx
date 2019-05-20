import React, { Component } from "react";
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
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import API from "./utils/api.js"

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});




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
    const { classes } = this.props;
    return (
      <div className={classes.heroButtons}>
        <Grid container spacing={16} justify="center">
          <div className={classes.root}>
            <FormControl className={classes.margin}>
              <InputLabel
                htmlFor="custom-css-standard-input"
                classes={{
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                }}
                onChange={props.handleInputChange}
                value={props.search}
                name="search"
                type="text"
                placeholder="Vision Files"
                id="search"
              />
              <Grid item>
                <Button onClick={props.handleFormSubmit} variant="contained" color="primary">
                  Search
                  </Button>
              </Grid>
            </FormControl>

          </div>
          </Grid>
      </div>
    )}
  

};


      Album.propTypes = {
      classes: PropTypes.object.isRequired,
    };

    export default withStyles(styles)(CharacterSearch);