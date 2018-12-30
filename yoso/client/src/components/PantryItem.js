import React from 'react';
import {Row, Col, Table, Button, Card, Icon} from 'react-materialize';

const PantryItem = () => {
  return (
    <div>
      <Row>
        <Col s={8} offset="s2">
          <Card className='blue-grey darken-1 z-depth-4' textClassName='white-text'>
            <Table>
              <tbody>
                <tr>
                  <th>
                    <h5>Pantry JSX Title</h5>
                  </th>
                  <th>
                    <h5>Pantry JSX Description</h5>
                  </th>
                  <th>
                    <Button floating medium><Icon>add_circle</Icon></Button>
                  </th>
                </tr>
                <tr>
                  <th>
                    <h5>Pantry JSX Date</h5>
                  </th>
                  <th>
                    <h5>Pantry JSX Amount</h5>
                  </th>
                  <th>
                  <Button floating medium><Icon>skip_next</Icon></Button>
                  </th>
                </tr>              
              </tbody>
            </Table>  
          </Card>
        </Col>       
      </Row>      
    </div>
  );
};

export default PantryItem;