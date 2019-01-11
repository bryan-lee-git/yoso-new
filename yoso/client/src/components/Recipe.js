import React from "react";
import { Card, Row, Col, CardTitle, Button } from "react-materialize";

const Recipe = props => {
    return (
        <div>
            <Col l={6} m={6} s={12}>
                <Card
                    className="recipe-card rounded z-depth-5"
                    horizontal
                    header={<CardTitle image={props.img} />}
                >
                    <h5>{props.title}</h5>
                    <br/><br/>
                    <Row>
                        <Col s={6}>
                            <a href={props.link} target="blank"><Button className="recipe-btn">Recipe</Button></a>
                        </Col>
                        <Col s={6}>
                            <Button className="recipe-btn">Add</Button>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </div>
    );
};

export default Recipe;
