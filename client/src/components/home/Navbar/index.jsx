"use client";

import React from "react";
import { useNavbar } from "./Navbar.hooks";
import { NavbarView } from "./Navbar.view";

export default function Navbar(props) {
  const logic = useNavbar();
  return <NavbarView {...props} {...logic} />;
}
