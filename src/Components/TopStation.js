import React from "react";
import { Center, Heading, HStack, Text, View } from "native-base";
import { ImageBackground, ImageBackgroundBase } from "react-native";
import colors from "../Colors";

const TopStation = () => {
  return (
    <Center safeArea height={140} bg={colors.main}>
      <HStack>
        <Heading>Total Centre</Heading>
      </HStack>
    </Center>
  );
};

export default TopStation;
