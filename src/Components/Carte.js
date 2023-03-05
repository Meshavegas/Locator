import {
  Button,
  Center,
  Divider,
  Heading,
  HStack,
  Image,
  Modal,
  View,
  VStack,
} from "native-base";
import { StyleSheet } from "react-native";
import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";
import ModalItineraire from "./ModalItineraire";
import MapViewDirections from "react-native-maps-directions";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "../Colors";
const Carte = () => {
  const [mapRegion, setMapRegion] = useState({
    latitude: 3.8182505000000004,
    longitude: 11.6593769,
    latitudeDelta: 0.0999,
    longitudeDelta: 0.0999,
  });
  const origin = {
    latitude: 3.8182505000000004,
    longitude: 11.5593769,
    latitudeDelta: 0.0999,
    longitudeDelta: 0.0999,
  };
  const [visible, setVisible] = useState(false);
  const [seeItineraire, setSeeItineraire] = useState(false);
  const [result, setResult] = useState({
    distance: 0,
    duration: 0,
  });

  return (
    <View>
      <MapView style={styles.map} region={seeItineraire ? origin : mapRegion}>
        {seeItineraire ? (
          <>
            <MapViewDirections
              origin={origin}
              destination={mapRegion}
              apikey="AIzaSyD9D4sU6IKYgZLbKK08cgKLvuRnnPd-_bk"
              strokeWidth={10}
              strokeColor={colors.greenSoft}
              mode="DRIVING"
              timePrecision="now"
              onReady={(re) => {
                const datav = { distance: re.distance, duration: re.duration };
                setResult(datav);
                // console.log(`Distance : ${re.distance}`);
                // console.log(`Distance : ${re.duration}`);
              }}
              onStart={(params) => {
                console.log(
                  `Started routing between "${params.origin}" and "${params.destination}"`
                );
              }}
            />
            <Marker
              coordinate={origin}
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
          </>
        ) : (
          <Marker
            coordinate={mapRegion}
            title="Dr Vegas"
            onPress={() => setSeeItineraire(true)}
          >
            <Image
              source={require("../../assets/marker.png")}
              w="10"
              h="10"
              alt="M"
            />
          </Marker>
        )}
      </MapView>
      {seeItineraire ? (
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
                  <Heading>
                    {Math.floor(result.duration / 60)} H{" "}
                    {Math.floor(result.duration % 60)} MN
                  </Heading>
                </Center>
              </VStack>
              <VStack style={{ position: "absolute", right: 8 }}>
                <Center>
                  <Heading>Distances</Heading>
                  <Heading>{Math.floor(result.distance)} KM</Heading>
                </Center>
              </VStack>
            </HStack>
          </View>
        </View>
      ) : (
        <View
          style={{
            position: "absolute",
            bottom: 4,

            width: "17%",
          }}
          ml={1}
        >
          <Button
            onPress={() => setSeeItineraire(true)}
            leftIcon={<FontAwesome5 name="route" size={24} color="white" />}
          ></Button>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default Carte;
