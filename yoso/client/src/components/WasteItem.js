import React from 'react';
import { Col, Card, Row } from 'react-materialize';

const WasteItem = () => {
  return (
    <Row>
      <Col s={12}>
        <Card className="z-depth-3">
          <h4>Waste JSX Name</h4>
          <h6>Waste JSX Info</h6>
        </Card>
      </Col>
    </Row>
  );
};

export default WasteItem;