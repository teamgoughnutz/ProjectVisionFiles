import React, { Component } from "react";



class CharacterSearch extends Component {
  state = {
    characters: [],
    name: "",
    description: "",
   
  };

  // componentDidMount() {
  //   this.loadCharacter();
  // }

  // loadCharacter = () => {
  //   API.getCharacter()
  //     .then(res =>
  //       this.setState({ characters: res.data, title: "", author: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // };



  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

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
      // <Container fluid>
      //   <Row>
      //     <Col size="md-6">
      //       <Jumbotron>
      //         <h1>What Character are you searching?</h1>
      //       </Jumbotron>
      //       <form>
      //         <Input
      //           value={this.state.title}
      //           onChange={this.handleInputChange}
      //           name="title"
      //           placeholder="Title (required)"
      //         />
      //         <Input
      //           value={this.state.author}
      //           onChange={this.handleInputChange}
      //           name="author"
      //           placeholder="Author (required)"
      //         />
           
      //         <FormBtn
      //           disabled={!(this.state.author && this.state.title)}
      //           onClick={this.handleFormSubmit}
      //         >
      //           Submit Character
      //         </FormBtn>
      //       </form>
      //     </Col>
      //     <Col size="md-6 sm-12">
      //       <Jumbotron>
      //         <h1>CharacterSearch On My List</h1>
      //       </Jumbotron>
      //       {this.state.characters.length ? (
      //         <List>
      //           {this.state.characters.map(character => (
      //             <ListItem key={character._id}>
      //               <Link to={"/characters/" + character._id}>
      //                 <strong>
      //                   {character.title} by {character.author}
      //                 </strong>
      //               </Link>
      //               <DeleteBtn onClick={() => this.deleteCharacter(character._id)} />
      //             </ListItem>
      //           ))}
      //         </List>
      //       ) : (
      //         <h3>No Results to Display</h3>
      //       )}
      //     </Col>
      //   </Row>
      // </Container>
      <div>
        </div>
    );
  }
}

export default CharacterSearch;
