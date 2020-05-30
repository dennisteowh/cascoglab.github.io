import React, { Component, Fragment } from "react";
import { Header as SemanticHeader, Menu, MenuItem } from "semantic-ui-react";

class Header extends Component {
  render() {
    return (
      <Fragment>
        <Menu
          size="large"
          attached
          stackable
          borderless
          className="header primary"
        >
          <MenuItem>
            <SemanticHeader to="/" as="h1" className="primary">
              CASCOGLAB
            </SemanticHeader>
          </MenuItem>
        </Menu>
      </Fragment>
    );
  }
}

export default Header;
