import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';


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



function CharacterSearch(props) {
  const { classes } = props;
  return (
    <div className={classes.heroButtons}>
      <Grid container spacing={16} justify="center">
        <div className={classes.root}>
          <FormControl className={classes.margin}>
            <Grid item>
              <InputBase
                onChange={props.handleInputChange}
                value={props.search}
                name="search"
                type="text"
                id="search"
                placeholder="Search Vision Files"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
              <Button onClick={props.handleInputChange} variant="contained" color="primary">
                Execute
                  </Button>
            </Grid>
          </FormControl>

        </div>
      </Grid>
    </div>
  )
}

CharacterSearch.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CharacterSearch);