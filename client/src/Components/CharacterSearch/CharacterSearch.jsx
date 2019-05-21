import React, { Component } from "react";
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';


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



function CharacterSearch() {
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
    )
  }


};


CharacterSearch.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CharacterSearch);