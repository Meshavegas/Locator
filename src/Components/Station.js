import {
  HStack,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
  VStack,
} from "native-base";

import React from "react";
import colors from "../Colors";
import list from "../data/Stations";
import { TouchableOpacity } from "react-native";

const Station = ({ st }) => {
  const doNothing = () => {
    console.log(st.id, "do nothing");
  };
  return (
    <Pressable onPress={doNothing}>
      <View mx={4} bg={colors.white} my={2} p={4} rounded="lg" shadow="5">
        <HStack alignItems="center">
          <Image
            source={require("../../assets/icon.png")}
            w="10"
            h={10}
            ml={3}
            rounded="3xl"
            mr="4"
            alt="Logo"
          />
          <VStack justifyContent="center">
            <Text fontSize="xl" fontWeight="bold">
              {st.nom}
            </Text>
          </VStack>
          <VStack position="absolute" right="0" mr="3">
            <Text fontSize="12" fontWeight="bold">
              Situé à
            </Text>
            <Text fontSize="12" fontWeight="bold">
              {st.distance}
            </Text>
          </VStack>
        </HStack>
      </View>
    </Pressable>
  );
};

export default Station;
