import React, { Component, PropTypes } from 'react';

import NavBar from './NavBar';
import SideBar from './SideBar';
import Content from './Content';

import styles from './application.css';

const menuItems = [
  {name: 'Movio Cinema', href: ''},
  {name: 'Member Service', href: ''},
  {name: 'Member', href: ''},
  {name: 'POST /members', href: ''},
];

const sideItems = [
  {
    name: 'Resources',
    items: [
      {
        name: 'Generator',
        items: [
          {'name': 'POST /member', href: ''},
          {'name': 'POST /members', href: ''},
          {'name': 'GET /member/:id', href: ''},
        ]
      }
    ]
  }
];

class Application extends Component {
  render() {
    return (
      <div>
        <NavBar items={menuItems}/>
        <div className={styles.main}>
          <SideBar items={sideItems}/>
          <Content />
        </div>
      </div>
    );
  }
}

Application.propTypes = {
  // service: PropTypes.object.isRequired,
  description: PropTypes.string,
};

export default Application;
