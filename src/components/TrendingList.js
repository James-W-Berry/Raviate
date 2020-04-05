import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import audio_wave from "../assets/audio_wave.png";
import uuid from "react-uuid";
import { Typography } from "@material-ui/core";
import firebase from "../firebase";
import "firebase/auth";
import { Scrollbars } from "react-custom-scrollbars";

function uploadSelectedSong(selectedSong) {
  const userId = firebase.auth().currentUser.uid;
  const docRef = firebase
    .firestore()
    .collection("users")
    .doc(userId);

  return docRef
    .set(
      {
        selectedSong: selectedSong
      },
      { merge: true }
    )
    .then(function() {
      console.log("successfully updated selected song");
    })
    .catch(function(error) {
      console.log(error);
    });
}

function TrendingList(props) {
  function createSongItem(song) {
    if (song !== undefined) {
      return (
        <ListItem
          style={{
            marginBottom: "5px",
            backgroundColor: "#252a2e",
            width: "90%",
            borderRadius: "5px"
          }}
          key={uuid()}
          button={true}
          onClick={() => {
            uploadSelectedSong(song.pastSong);
          }}
        >
          <ListItemAvatar>
            <Avatar style={{ backgroundColor: "#37e0b6" }}>
              <img src={audio_wave} alt="" height="70%" width="70%" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            disableTypography
            primary={
              <Typography
                variant="h6"
                style={{
                  fontFamily: "AntikorMonoLightItalic",
                  color: "#f7f7f5",
                  fontSize: "100%"
                }}
              >
                {song.pastSong.name}
              </Typography>
            }
            secondary={
              <Typography
                variant="body2"
                style={{
                  fontSize: "100%",
                  fontFamily: "AntikorMonoLightItalic",
                  color: "#f7f7f5"
                }}
              >
                {song.pastSong.artists}
              </Typography>
            }
          />
        </ListItem>
      );
    }
  }

  return (
    <div style={{ flex: 1, width: "100%" }}>
      {props.songList.length > 0 ? (
        <Scrollbars autoHeight autoHeightMin={"50vh"}>
          <List
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              borderRadius: "10px",
              backgroundColor: "#37e0b610"
            }}
          >
            {props.songList.map(song => createSongItem(song))}
          </List>
        </Scrollbars>
      ) : (
        <Typography
          align="center"
          style={{
            padding: "5px",
            color: "#f7f7f5",
            fontFamily: "AntikorMonoLightItalic"
          }}
        >
          {`No songs for this group over the selected range`}
        </Typography>
      )}
    </div>
  );
}

export default TrendingList;
