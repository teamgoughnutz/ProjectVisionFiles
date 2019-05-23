import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});

function CharacterSearch(props) {
  const { classes } = props;
  return (
    // <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static" style={{ backgroundColor: 'rgb(183, 28, 28)' }}>
          <Toolbar>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              Project Vision Files
          </Typography>
            <div className={classes.grow} />
            <form  onSubmit={props.searchBar} className={classes.search}>
              <Button type="submit" className={classes.searchIcon} color="inherit">
                <SearchIcon />
              </Button>
              
              <InputBase
                placeholder="Execute Search"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                onChange = {props.changeHandle}
                name = "characterSearch"
               
                />
                
            </form>
           
          </Toolbar>
        </AppBar>
      </div>
    // </MuiThemeProvider>
  );
}

CharacterSearch.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CharacterSearch);
