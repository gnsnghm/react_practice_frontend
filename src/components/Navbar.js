import React from 'react';
import { Navbar as BootstrapNavbar } from 'reactstrap';
import NavbarBrand from './NavBarBrand';

function NavBar(props) {
  const {
    children,
    ...otherProps
  } = props;

  return (
    <BootstrapNavbar {...otherProps}>
      {children}
    </BootstrapNavbar>
  );
}

export default Object.assign(NavBar, {
  Brand: NavbarBrand,
});

