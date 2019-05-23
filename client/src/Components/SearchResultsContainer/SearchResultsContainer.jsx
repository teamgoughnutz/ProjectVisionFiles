import React from 'react';
import { Component } from "react";
// import Grid from '@material-ui/core/Grid';
// import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import CharacterSearch from "../CharacterSearch/CharacterSearch";
import SearchResultsCard from "../SearchResultsCard/SearchResultsCard.jsx";
import MarvelAPI from "../../utils/MarvelApi";
import API from "../../utils/API";
import Header from "../Header/Header"
import { MuiThemeProvider } from "@material-ui/core/styles";
import Pagination from "material-ui-flat-pagination";
import Footer from "../Footer/Footer"


const styles = theme => ({

  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 500,
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

/// pagination code
const theme = createMuiTheme();

class SearchResultsContainer extends Component {
  state = {
    characters: [],
    results: [],
    name: "",
    description: "",
    offset: 0,
    total: 0,
    characterSearch:  ""
  };


  //pagination code
  handlePageClick(offset) {
   this.searchMarvelAll(offset);
  }

  componentDidMount() {
    //   this.loadCharacter();
    this.searchMarvelAll();
  }

  getCharacter = () => {
    API.getCharacter()
      .then(res =>
        this.setState({ characters: res.data, name: "", describtion: "" })
      )
      .catch(err => console.log(err));
  };

  searchMarvel = (query, event) => {
    if (event.key === 'Enter'){
      MarvelAPI.search(query)
      .then(res => this.setState({ results: res.data.data.results }))  //filter contains look through 
      .catch(err => console.log(err));
    }
   
    console.log(this.state.characterSearch)
  };

  searchMarvelAll = (offset) => {
    MarvelAPI.searchAll(offset)
      .then(res => {this.setState({ 
        offset,
        results: res.data.data.results, 
        total: res.data.data.total
      })
      console.log(res.data.data)
      })
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
    return (
      <React.Fragment>
        <CssBaseline />
        <main>
          <Header />
          <CharacterSearch 
           searchBar = {this.searchMarvel} 
           changeHandle = {this.handleInputChange}
            />
          <SearchResultsCard results={this.state.results} />
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Pagination
              limit={20}
              offset={this.state.offset}
              total={this.state.total}
              onClick={(e, offset) => this.handlePageClick(offset)}
            />
          </MuiThemeProvider>

        </main>
        <Footer />
      </React.Fragment>
    );
  }

}


export default withStyles(styles)(SearchResultsContainer);