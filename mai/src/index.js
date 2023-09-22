import React from "react";
import ContextProvider from 'e-ui-react';
import  { AppRouting } from '@Config/Routing.js';
import './index.css';

import("react-dom/client").then((ReactDOM)=>{
  ReactDOM.createRoot(document.getElementById("root"))
   .render(
    <ContextProvider variables={{ "test":"Hello" }}>
      <AppRouting />
   </ContextProvider>);
 });
 
 