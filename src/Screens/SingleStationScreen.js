import { Center, HStack, Text, View } from "native-base";
import React, { useState } from "react";
import { ImageBackground, ImageBackgroundBase } from "react-native";
import colors from "../Colors";
import TopStation from "../Components/TopStation";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import StationBody from "../Components/StationBody";

const SingleStationScreen = () => {
  return (
    <View flex={1}>
      <TopStation />
      <StationBody />
    </View>
  );
};

export default SingleStationScreen;
