import React, { Component } from 'react';
import UserLists from '../../components/UserLists';
import ListItem from '../../components/ListItem';


class MyLists extends Component {
  render() {
    return (
      <div>
        <UserLists />
        <ListItem />
      </div>
    );
  }
}

export default MyLists;