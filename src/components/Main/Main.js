import React, { Component } from "react";
import WhatsTrendingController from "../WhatsTrendingController/WhatsTrendingController";
import Banner from "../Banner/Banner";
import SearchForPerson from "../SearchForPerson/SearchForPerson";
import LocalMap from "../LocalMap/LocalMap";
import SpotifyPlayer from "../SpotifyPlayer/SpotifyPlayer";
import Flexbox from "flexbox-react";

class Main extends Component {
  render() {
    return (
      <Flexbox
        flexDirection="column"
        minHeight="100vh"
        style={{
          background: "linear-gradient(180deg, #091740 0%, #112bbf 100%)",
          color: "#efefef"
        }}
      >
        <Flexbox element="header" height="60px" marginTop="20px">
          <div>
            <Banner />
          </div>

          <div
            style={{
              display: "flex",
              position: "absolute",
              flexGrow: 1,
              right: "15vw"
            }}
          >
            <SearchForPerson />
          </div>
        </Flexbox>

        <Flexbox flexGrow={1} alignSelf="center">
          <div
            style={{
              display: "flex",
              position: "absolute",
              top: "20vh",
              width: "100vw",
              height: "40vh",
              left: 0
            }}
          >
            <WhatsTrendingController />
          </div>
        </Flexbox>

        <Flexbox
          flexGrow={1}
          alignSelf="center"
          element="footer"
          flexDirection="column"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              bottom: "15vh",
              left: 0,
              width: "100vw",
              height: "10vh",
              background: "#112BBF"
            }}
          >
            <LocalMap />
          </div>

          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100vw",
              height: "15vh",
              background: "#112BBF"
            }}
          >
            <SpotifyPlayer />
          </div>
        </Flexbox>
      </Flexbox>
    );
  }
}

export default Main;
