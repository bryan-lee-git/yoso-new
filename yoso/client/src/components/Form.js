import React from 'react';
import {Input, Row, Col, Icon, Card} from 'react-materialize'

const Form = () => {
  return (
    <div>
      <Card>
        <Row>
          <Col s={6}>
            <Input s={12} label="Username" name="username" validate><Icon>account_circle</Icon></Input>
          </Col>
      
          <Col s={6}>
            <Input s={12} label="Password" name="password" validate><Icon>lock</Icon></Input>
          </Col>
        </Row>
        <Row>
          <Col s={6}>
            <Input s={12} label="Email" name="email" validate><Icon>email</Icon></Input>
          </Col>
        
          <Col s={6}>
            <Input s={12} offset="s3" label="Address" name="address" validate><Icon>location_on</Icon></Input>
          </Col>
        </Row>
      </Card>  
    </div>
  );
};

export default Form;