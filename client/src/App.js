import React, { Component } from "react";
import io from "socket.io-client";

export class App extends Component {
  componentDidMount() {
    const socket = io.connect("/");
  }

  render() {
    return (
      <div>
        <h1>This is client site.</h1>
      </div>
    );
  }
}

export default App;
