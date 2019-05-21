import React from 'react';
import  { Component } from "react";
// import Grid from '@material-ui/core/Grid';
// import PropTypes from 'prop-types';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
// import CharacterSearch from "../CharacterSearch/CharacterSearch";
import SearchResultsCard from "../SearchResultsCard/SearchResultsCard.jsx";
import MarvelAPI from "../../utils/MarvelApi";
import API from "../../utils/API";


const styles = theme => ({

  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

class SearchResultsContainer extends Component {
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


 
    render() {
      const { classes } = this.props;
      return(
     <React.Fragment>
      <main>
         <SearchResultsCard results={this.state.results} />
      </main>
      
   
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
    </footer>
   
  </React.Fragment>
  );
    
    }
   


// SearchResultsContainer.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
}


export default withStyles(styles)(SearchResultsContainer);