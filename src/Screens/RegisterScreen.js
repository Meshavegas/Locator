import { View, Text } from "react-native";
import React from "react";
import { Box, Heading, Image, Input, Pressable, VStack } from "native-base";
import colors from "../Colors";
import { Ionicons } from "@expo/vector-icons";

import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
const RegisterScreen = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <Box bg={colors.main} flex={1}>
      <Image
        source={require("../../assets/BacgroundTop.png")}
        w={"full"}
        resizeMode="contain"
        safaAreaTop
        alt="back"
        mt={-20}
      />
      <Box justifyContent="center" alignItems="center">
        <VStack space={4} alignItems="center" mt={10}>
          <Heading color={colors.white}>Inscription</Heading>
          <Input
            focusOutlineColor={colors.primary2}
            bg={colors.fluor}
            w={{
              base: "75%",
              md: "25%",
            }}
            InputLeftElement={
              <Box mx="3">
                <Ionicons
                  name="person"
                  size={20}
                  ml="2"
                  color={colors.primary2}
                />
              </Box>
            }
            placeholder="Nom & Prenom"
            onChangeText={(e) => setEmail(e)}
            type="email"
            value={email}
            validateText={true}
            _focus={{
              bg: colors.white,
              borderColor: colors.white,
            }}
          />
          <Input
            focusOutlineColor={colors.primary2}
            bg={colors.fluor}
            w={{
              base: "75%",
              md: "25%",
            }}
            InputLeftElement={
              <Box mx="3">
                <FontAwesome
                  name="envelope"
                  size={20}
                  ml="2"
                  color={colors.primary2}
                />
              </Box>
            }
            placeholder="Adresse Email"
            onChangeText={(e) => setEmail(e)}
            type="email"
            value={email}
            validateText={true}
            _focus={{
              bg: colors.white,
              borderColor: colors.white,
            }}
          />
          <Input
            focusOutlineColor={colors.primary2}
            bg={colors.fluor}
            w={{
              base: "75%",
              md: "25%",
            }}
            type={showPassword ? "text" : "password"}
            InputLeftElement=<Box mx="3">
              <MaterialIcons
                name="lock"
                size={25}
                ml="2"
                color={colors.primary2}
              />
            </Box>
            InputRightElement={
              <Pressable onPress={() => setShowPassword(!showPassword)} mx="3">
                <MaterialIcons
                  name={showPassword ? "visibility" : "visibility-off"}
                  size={25}
                  mr="2"
                  color={colors.primary2}
                />
              </Pressable>
            }
            placeholder="Mots de Passe"
            onChangeText={(e) => setPassword(e)}
            _focus={{
              bg: colors.white,
              borderColor: colors.white,
            }}
          />
          <Pressable p={3} bg={colors.primary2} rounded={15}>
            <Text color={colors.white} fontSize="xl">
              S'inscrire
            </Text>
          </Pressable>
          <Box justifyContent="center" alignItems="center">
            <Pressable>
              <Text fontSize="xl">
                Déjà inscrit?
                <Text fontSize="xl" color="blue.100">
                  Se Connecter
                </Text>
              </Text>
            </Pressable>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default RegisterScreen;
