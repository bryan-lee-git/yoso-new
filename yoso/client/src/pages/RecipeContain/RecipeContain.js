import React, { Component } from "react";
import Recipe from "../../components/RecipeComponents/Recipe";
import { Container, Row, Col, Card } from "react-materialize";
import Yummly from "../../utilities/RecipeAPI";
import RecipeSearch from "../../components/RecipeComponents/RecipeSearch";
import BackBtn from "../../components/BackBtn";

class RecipeContain extends Component {

  state = {
    query: "",
    response: "",
    errMsg: "Search for a recipe!"
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
        <br />
        <Row>
          <Col s={12}>
            <h1 className="white-text fade-in">FIND RECIPES</h1>
          </Col>
          <Col s={12}>
          <BackBtn
            goto="/home"
          />
          </Col>
        </Row>
        <Card className="rounded z-depth-5 animate-up">
        <RecipeSearch
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        </Card>
        <div className="animate-up-2 btn-row">
          {this.state.response ? (
            <Row>
              {this.state.response.map((recipe, index) => (
                <Recipe
                  key={index}
                  title={recipe.recipeName}
                  ingredients={recipe.ingredients}
                  img={recipe.smallImageUrls[0]}
                  link={`https://www.yummly.com/recipe/${recipe.id}`}
                />
              ))}
            </Row>
          ) : (
            <div></div>
          )}
        </div>
      </Container>
    );
  }
}

export default RecipeContain;
