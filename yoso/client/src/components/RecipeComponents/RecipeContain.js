import React, { Component } from "react";
import Recipe from "./Recipe";
import { Container, Row, Card } from "react-materialize";
import Yummly from "../../utilities/RecipeAPI";
import RecipeSearch from "./RecipeSearch";
import BackBtn from "../BackBtn";
import BottomSpacer from "../BottomSpacer";
import PageHeader from "../PageHeader";
import ListAPI from "../../utilities/ListAPI";

class RecipeContain extends Component {

  state = {
    query: "",
    response: "",
    errMsg: "Search for a recipe!",
    lists: []
  };

  componentDidMount() {
    this.getLists(this.props.user.id);
  }

  getLists = id => {
    ListAPI.getLists(id).then(res => {
      this.setState({ lists: res.data });
      console.log(this.state.lists);
    });
  };

  findRecipes = () => {
    Yummly.getRecipes(this.state.query)
      .then(res => {
        this.setState({ response: res.data.matches });
        console.log(this.state.response);
      })
      .catch(err => {
        if (err) {
          this.setState({ errMsg: "No results. Please try again!" });
        }
      });
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
    console.log(this.state);
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.findRecipes(this.state.query);
  };

  render() {
    return (
      <Container className="center-align">
        <PageHeader>FIND RECIPES</PageHeader>
        <BackBtn goto="/home"/>
        <Card className="rounded z-depth-5 animate-up">
          <RecipeSearch
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
          />
        </Card>
        {this.state.response ? (
          <Row className="animate-up-2">
            {this.state.response.map((recipe, index) => (
              <Recipe
                key={index}
                title={recipe.recipeName}
                ingredients={recipe.ingredients}
                img={recipe.smallImageUrls[0]}
                link={`https://www.yummly.com/recipe/${recipe.id}`}
                lists={this.state.lists}
              />
            ))}
          </Row>
        ) : (
          <div></div>
        )}
        <BottomSpacer/>
      </Container>
    );
  }
}

export default RecipeContain;
