import {
  Center,
  Divider,
  Heading,
  HStack,
  Image,
  Text,
  View,
  VStack,
} from "native-base";
import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";
import list from "../data/Stations";
import * as Location from "expo-location";
import { useEffect } from "react";
import colors from "../Colors";
import MapViewDirections from "react-native-maps-directions";

const ItineraireScreen = () => {
  const [seeItineraire, setSeeItineraire] = useState(false);
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.1999,
    longitudeDelta: 0.6999,
  });
  const [errorMsg, setErrorMsg] = useState(null);
  const [Visible, setVisible] = useState(false);
  const [direction, setdirection] = useState({});
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: location?.coords.latitude,
        longitude: location?.coords.longitude,
        latitudeDelta: 0.1999,
        longitudeDelta: 0.6999,
      });
    })();
  }, []);

  const onDestinationSelected = (event) => {
    console.log(event);
  };
  return (
    <View>
      <MapView style={{ width: "100%", height: "100%" }} region={location}>
        <Marker
          coordinate={location}
          title="Vous"
          onPress={() => setVisible(true)}
        >
          <Image
            source={require("../../assets/car.png")}
            w="10"
            h="10"
            alt="M"
          />
        </Marker>
        {list.map((data, index) => (
          <Marker
            coordinate={data.position}
            title={data.nom}
            onPress={() => onDestinationSelected(data.position)}
            key={index}
          >
            <Image
              source={require("../../assets/marker.png")}
              w="10"
              h="10"
              alt="M"
            />
          </Marker>
        ))}
      </MapView>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          height: "20%",
          width: "100%",
        }}
        bg={colors.white}
        px={4}
        pt={2}
        borderTopRadius={24}
      >
        <View>
          <Center>
            <Heading>Total Centre</Heading>
          </Center>
          <Divider />
          <HStack w="full">
            <VStack>
              <Center>
                <Heading>Durée</Heading>
                <Heading></Heading>
              </Center>
            </VStack>
            <VStack style={{ position: "absolute", right: 8 }}>
              <Center>
                <Heading>Distances</Heading>
              </Center>
            </VStack>
          </HStack>
        </View>
      </View>
    </View>
  );
};

export default ItineraireScreen;
