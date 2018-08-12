import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import ReactHLS from "react-hls";
import styled from "styled-components";

const ChillGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row: auto auto;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Surf Stream</h1>
        </header>
        <ChillGrid>
          <div>
            <h1>Seal Beach</h1>
            <ReactHLS url="https://cams.cdn-surfline.com/wsc-west/wc-sealbeachsscam.stream/chunklist.m3u8" />
          </div>

          <div>
            <h1>Goldenwest</h1>
            <ReactHLS url="https://cams.cdn-surfline.com/wsc-west/wc-goldenwestcam.stream/chunklist.m3u8" />
          </div>

          <div>
            <h1>Blackies</h1>
            <ReactHLS url="https://cams.cdn-surfline.com/wsc-west/wc-blackiescam.stream/playlist.m3u8" />
          </div>

          <div>
            <h1>Bolsa</h1>
            <ReactHLS url="https://cams.cdn-surfline.com/wsc-west/wc-bolsachicacam.stream/chunklist.m3u8" />
          </div>
        </ChillGrid>
      </div>
    );
  }
}

export default App;
