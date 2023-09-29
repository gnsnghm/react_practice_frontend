import React from "react";
import { NavbarBrand as BootstrapNavbar } from "reactstrap";

function NavbarBrand(props) {
  const {
    id,
    children,
    ...otherProps
  } = props;

  return (
    <BootstrapNavbar.Brand id={id} {...otherProps}>
      {children}
    </BootstrapNavbar.Brand>
  )
}

export default NavbarBrand;