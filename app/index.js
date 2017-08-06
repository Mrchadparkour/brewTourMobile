import React from "react";
import { createRootNavigator } from "./router";
import { isSignedIn } from './auth.js';

export default class App extends React.Component {

  render() {
    const Layout = createRootNavigator(isSignedIn());
    return <Layout />;
  }
}
