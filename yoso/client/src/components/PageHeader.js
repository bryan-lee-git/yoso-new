import React from 'react';
import { Row, Col } from "react-materialize";

const PageHeader = (props) => {
    return (
        <Row>
            <br />
            <Col s={12}>
                <h1 className="white-text fade-in">{props.children}</h1>
            </Col>
        </Row>
    );
}

export default PageHeader;
