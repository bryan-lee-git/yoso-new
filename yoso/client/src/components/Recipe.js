import React from 'react';
import { Card, Col, CardTitle } from 'react-materialize';

const Recipe = (props) => {
    return (
        <div>
            <Col l={4} m={6} s={12}>
                <Card className="recipe-card" horizontal header={<CardTitle image={props.img} />}>
                    
                    <p>{props.title}</p>
                    <a href={props.link}>View Recipe</a>
                </Card>
            </Col>
            {/* <Col s={2}>
                <Card header={<CardTitle reveal image={props.img} waves='light' />}
                    title={props.title}
                    reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                    <p><a href={props.link}>This is a link</a></p>
                </Card>
            </Col> */}
        </div>
    );
};

export default Recipe;
