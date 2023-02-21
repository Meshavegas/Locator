import { Box, Text, Heading } from "native-base";

import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../Colors";
import HomeTop from "../Components/HomeTop";
import StationList from "../Components/StationList";

export default function HomeScreen() {
  return (
    <Box bg={Colors.easyWhite} flex={1}>
      <HomeTop />
      <Box w="full" h="full">
        <StationList />
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
