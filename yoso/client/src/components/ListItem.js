import React from 'react';
import {Card, Row, Col, Button, Icon, Table} from 'react-materialize';

const ListItem = () => {
  return (
    <div>
      <Row>
        <Col s={8} offset="s2">
          <Card className='blue-grey darken-1 z-depth-4' textClassName='white-text'>
            <Table>
              <tbody>
                <tr>
                  <th>
                    <h5>Item JSX Title</h5>
                  </th>
                  <th>
                    <h5>Item JSX Description</h5>
                  </th>
                  <th>
                    <Button floating medium><Icon>add_a_photo</Icon></Button>
                  </th>
                </tr>
                <tr>
                  <th>
                    <h5>Item JSX Units</h5>
                  </th>
                  <th>
                    <h5>Item JSX Amount</h5>
                  </th>
                  <th>
                  <Button floating medium><Icon>edit</Icon></Button>
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

export default ListItem;
