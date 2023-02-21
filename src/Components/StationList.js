import {
  Box,
  HStack,
  Image,
  Input,
  Pressable,
  ScrollView,
  Text,
  View,
  VStack,
} from "native-base";

import React from "react";
import { Touchable, TouchableOpacity } from "react-native";
import colors from "../Colors";
import list from "../data/Stations";
import Station from "./Station";

const StationList = () => {
  return (
    <View>
      <ScrollView pb={4}>
        {list.map((st, key) => (
          <Station st={st} key={key} />
        ))}
      </ScrollView>
    </View>
  );
};

export default StationList;
