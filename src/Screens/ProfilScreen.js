import { View, Text } from "native-base";
import React from "react";
import colors from "../Colors";
import TopStation from "../Components/TopStation";

const ProfilScreen = () => {
  return (
    <View bg={colors.danger}>
      <TopStation />
    </View>
  );
};

export default ProfilScreen;
