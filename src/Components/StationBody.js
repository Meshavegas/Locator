import { Center, HStack, ScrollView, Text, View } from "native-base";
import React, { useState } from "react";
import { ImageBackground, ImageBackgroundBase } from "react-native";
import colors from "../Colors";
import TopStation from "../Components/TopStation";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import Product from "./Product";
import produits from "../data/produit";
import Carte from "./Carte";

const StationBody = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Produits" },
    { key: "second", title: "Localisation" },
  ]);
  const FirstRoute = () => (
    <View style={{ flex: 1 }} bg={colors.easyWhite}>
      <ScrollView>
        {produits.map((p, index) => (
          <Product produits={p} index={index} key={index} />
        ))}
      </ScrollView>
    </View>
  );
  const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: "#673ab7" }}>
      <Carte />
    </View>
  );
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      style={{ marginTop: -20 }}
    />
  );
};

export default StationBody;
