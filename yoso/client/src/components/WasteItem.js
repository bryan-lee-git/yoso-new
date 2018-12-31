import React from 'react';
import { Col, Card, Row } from 'react-materialize';

const WasteItem = () => {
  return (
    <div>
      <Row>
        <Col s={6} offset="s3">
          <Card className="z-depth-3">
            <h4>Waste JSX Name</h4>
            <h6>Waste JSX Info</h6>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default WasteItem;