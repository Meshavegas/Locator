import React from "react";
import {
  Center,
  Heading,
  HStack,
  Image,
  Text,
  View,
  VStack,
} from "native-base";
import {
  ImageBackground,
  ImageBackgroundBase,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import colors from "../Colors";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Rating } from "react-native-ratings";

const TopStation = () => {
  return (
    <VStack bg={colors.main} safeArea height={140}>
      <StatusBar animated={true} backgroundColor={colors.main} />
      <HStack ml={4} mt={4}>
        <VStack justifyContent="center">
          <Image
            source={require("../../assets/stationPic.png")}
            w="70"
            h={"70"}
            alt="ADS"
            resizeMode="cover"
            rounded={12}
          />
        </VStack>

        <VStack ml={5} justifyContent="center">
          <Heading>Total Centre</Heading>
          <Text fontSize={20}>Yaoundé, Cameroun</Text>
          <Rating
            fractions
            ratingCount={5}
            startingValue={2.5}
            readonly
            size="10"
            type="custom"
            tintColor={colors.main}
            imageSize={30}
          />
        </VStack>
        <TouchableOpacity style={{ position: "absolute", right: 15, top: 12 }}>
          <MaterialIcons name="notifications-active" size={39} color="white" />
          {/* <Ionicons name="notifications" size={34} color="white" /> */}
        </TouchableOpacity>
      </HStack>
    </VStack>
  );
};

export default TopStation;
