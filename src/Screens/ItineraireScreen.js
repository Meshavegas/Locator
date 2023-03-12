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
  const [direction, setDirection] = useState(null);
  const [result, setResult] = useState({ duration: 0, distance: 0 });

  useEffect(() => {
    const getPosition = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("La permission a été refuser");
        return;
      }

      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.BestForNavigation,
      });
      setLocation({
        latitude: location?.coords.latitude,
        longitude: location?.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    };
    const interval = setInterval(() => {
      getPosition();
      console.log("jappel");
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const onDestinationSelected = (event) => {
    console.log(event);
    setDirection(event);
  };
  return (
    <View>
      <MapView style={{ width: "100%", height: "100%" }} region={location}>
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
        <Marker coordinate={location} title="Vous">
          <Image
            source={require("../../assets/car.png")}
            w="10"
            h="10"
            alt="M"
          />
        </Marker>
        {direction ? (
          <MapViewDirections
            origin={location}
            destination={direction}
            apikey="AIzaSyD9D4sU6IKYgZLbKK08cgKLvuRnnPd-_bk"
            strokeWidth={15}
            strokeColor={colors.greenSoft}
            mode="DRIVING"
            timePrecision="now"
            onReady={(re) => {
              const datav = { distance: re.distance, duration: re.duration };
              setResult(datav);
            }}
            onStart={(params) => {
              console.log(
                `Started routing between "${params.origin}" and "${params.destination}"`
              );
            }}
          />
        ) : null}
      </MapView>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          height: "15%",
          width: "100%",
        }}
        bg={colors.white}
        px={4}
        pt={2}
        borderTopRadius={24}
      >
        <View>
          <Center>
            <Heading>Detail du trajet</Heading>
          </Center>
          <Divider />
          <HStack w="full">
            <VStack>
              <Center>
                <Heading>Durée</Heading>
                <Heading>
                  {Math.floor(result?.duration / 60)} H{" "}
                  {Math.floor(result?.duration % 60)} MN
                </Heading>
              </Center>
            </VStack>
            <VStack style={{ position: "absolute", right: 8 }}>
              <Center>
                <Heading>Distances</Heading>
                <Heading>{Math.floor(result?.distance)} KM</Heading>
              </Center>
            </VStack>
          </HStack>
        </View>
      </View>
    </View>
  );
};

export default ItineraireScreen;
