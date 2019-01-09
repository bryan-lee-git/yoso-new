import React from "react";
import { Card, Col, CardTitle, Modal, Button } from "react-materialize";

const Recipe = props => {
    return (
        <div>
            <Col l={6} m={6} s={12}>
                <Card
                    className="recipe-card"
                    horizontal
                    header={<CardTitle image={props.img} />}
                >
                    <p>{props.title}</p>
                    <a href={props.link} target="blank">
                        View Recipe
                    </a>

                    <Modal
                        header='Recipe Ingredients'
                        trigger={<Button>Ingredients</Button>}>
                        <ul>
                        {props.ingredients.map((ingredient) => (
                            <li>{ingredient}</li>
                        ))}
                        </ul>
                        <Button>Add Ingredients to List</Button>
                    </Modal>
                </Card>
            </Col>
        </div>
    );
};

export default Recipe;
