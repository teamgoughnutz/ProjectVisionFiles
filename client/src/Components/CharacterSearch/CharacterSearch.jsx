import React, { Component } from "react";
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import MarvelAPI from "../../utils/MarvelApi";
import API from "../../utils/API";

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

  getCharacter = () => {
    API.getCharacter()
      .then(res =>
        this.setState({ characters: res.data, name: "", describtion: "" })
      )
      .catch(err => console.log(err));
  };

  searchMarvel = query => {
    MarvelAPI.search(query)
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
    const { props } = this;
    const { classes } = props;
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


CharacterSearch.propTypes = {
      classes: PropTypes.object.isRequired,
    };

    export default withStyles(styles)(CharacterSearch);