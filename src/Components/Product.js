import { Box, Center, Heading, HStack, Text, View, VStack } from "native-base";
import React from "react";
import colors from "../Colors";
import { FontAwesome } from "@expo/vector-icons";
import { Image, StyleSheet } from "react-native";

const Product = ({ produits }) => {
  return (
    <Box bg={produits.color} mx={2} my={2} px={2} py={2}>
      <VStack>
        <Image
          source={produits.image}
          alt={produits.name}
          style={styles.image}
        />

        <Center>
          <Heading>{produits.name}</Heading>
          <HStack>
            <Text color={colors.dark} fontSize={20}>
              Etat :{" "}
            </Text>
            {produits.isDiponible ? (
              <Text color={colors.white} fontSize={20}>
                Disponible
              </Text>
            ) : (
              <Text color={colors.white} fontSize={20}>
                Indisponible
              </Text>
            )}
          </HStack>
          {produits.isDiponible ? (
            <View
              w={4}
              h={4}
              bg={colors.greenSoft}
              rounded={50}
              style={{
                position: "absolute",
                right: 7,
                bottom: 0,
              }}
            ></View>
          ) : null}
        </Center>
        {produits.isDiponible ? (
          <View
            p={1}
            bg={produits.color}
            style={{
              position: "absolute",
              right: 0,
            }}
          >
            <FontAwesome name="cart-plus" size={50} color="white" style={{}} />
          </View>
        ) : null}
      </VStack>
    </Box>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
});

export default Product;
