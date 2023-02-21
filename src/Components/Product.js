import { Box, Center, Heading, HStack, Text, View, VStack } from "native-base";
import React from "react";
import colors from "../Colors";
import { FontAwesome } from "@expo/vector-icons";
const Product = ({ produits }) => {
  return (
    <Box bg={produits.color} mx={2} my={2} px={2} py={2}>
      <VStack>
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
                left: 12,
              }}
            ></View>
          ) : null}
        </Center>
        {produits.isDiponible ? (
          <View
            p={1}
            rounded={10}
            bg={colors.pink}
            style={{
              position: "absolute",
              right: 0,
            }}
          >
            <FontAwesome name="cart-plus" size={24} color="white" />
          </View>
        ) : null}
      </VStack>
    </Box>
  );
};

export default Product;
