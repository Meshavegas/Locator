import { Box, HStack, Image, Input, Pressable, Text, View } from "native-base";
import React from "react";
import colors from "../Colors";
import { FontAwesome } from "@expo/vector-icons";

const HomeTop = () => {
  const [seachText, setSeachText] = React.useState("");
  return (
    <Box width="full" bg={colors.primary2} safeAreaTop pt={10} pb={5}>
      <HStack>
        <Image
          source={require("../../assets/icon.png")}
          w="10"
          h={10}
          ml={3}
          rounded="3xl"
          alt="user logo"
        />
        <Input
          focusOutlineColor={colors.primary2}
          bg={colors.fluor}
          w={{
            base: "75%",
            md: "25%",
          }}
          InputRightElement={
            <Box mx="3">
              <Pressable>
                <FontAwesome
                  name="search"
                  size={20}
                  ml="2"
                  color={colors.primary2}
                />
              </Pressable>
            </Box>
          }
          placeholder="Total, Tradex, ..."
          onChangeText={(e) => setSeachText(e)}
          type="email"
          value={seachText}
          validateText={true}
          _focus={{
            bg: colors.white,
            borderColor: colors.white,
          }}
          ml="2"
          rounded={23}
        />
      </HStack>
    </Box>
  );
};

export default HomeTop;
