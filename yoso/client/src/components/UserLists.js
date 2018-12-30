import React from 'react';
import {Card, Row, Col, Button} from 'react-materialize';

const UserLists = () => {
  return (
    <div>
      <ul>
        <li>        
          <Row>
            <Col s={8} offset="s2">
              <Card className='blue-grey darken-1 z-depth-4' textClassName='white-text'>
                <h3>Store Lists</h3>                                
              </Card>
            </Col>
            {/* <Col s={3}>
              <Button floating large className='red' waves='light' icon='add' />
            </Col> */}
          </Row>     
        </li>
      </ul>
    </div>
  );
};

export default UserLists;