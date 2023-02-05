import { View, Text } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Index = () => {
  return (
    <View>
      <NavigationContainer>
        <Stack.Navigator>
          
          <Stack.Group
            screenOptions={{
              headerStyle: {
                backgroundColor: "#06AED5",
              },
            }}
          >
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                title: "Connexion",
                headerStatusBarHeight: 10,
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Registration"
              options={{
                title: "Inscription",
                headerStatusBarHeight: 10,
                headerShown: false,
              }}
              component={Inscription}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="Single" component={MakePublication} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Index;
