import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../Login/Login";
import Register from "../Register/Register";
import screens from "../core/Screens";
import HomeScreen from "../Home/Home";
import FeedScreen from "../Feed/Feed";
import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from "react";
import ProfileScreen from "../Profile/Profile";

const Navigation = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await SecureStore.getItemAsync("userToken");
        if (userToken) {
          setSignedIn(true);
          console.log(userToken);
        }
      } catch (e) {
        console.log(e);
      }
    };

    bootstrapAsync();
  }, []);

  return (
    <NavigationContainer>
      {signedIn ? (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Feed" component={FeedScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{ headerShown: false, initialRoute: screens.Login }}
        >
          <Stack.Screen name={screens.Login} component={Login} />
          <Stack.Screen name={screens.Register} component={Register} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigation;
