"use client";

import React from "react";
import { useFooter } from "./Footer.hooks";
import { FooterView } from "./Footer.view";

export default function Footer(props) {
  const logic = useFooter();
  return <FooterView {...props} {...logic} />;
}
