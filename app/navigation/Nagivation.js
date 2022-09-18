import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../screens/Login/Login";
import screens from "../constants/Screens";
import HomeScreen from "../screens/Home/Home";
import PostScreen from "../screens/Post/Post";
import Splash from "../screens/Splash/Splash";
import Ionicons from "react-native-vector-icons/Ionicons";
import Register from "../screens/Register/Register";
import ProfileScreen from "../screens/Profile/Profile";

const Navigation = ({ state }) => {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  const Root = () => (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        switch (route.name){
          case screens.Home:
            iconName = focused
              ? 'home'
              : 'home-outline';
            break;
          case screens.Post:
            iconName = focused
              ? 'add-circle'
              : 'add-circle-outline';
            break;
          case screens.Profile:
            iconName = focused
              ? 'person-circle'
              : 'person-circle-outline';
            break;
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'burlywood',
    })}>
      <Tab.Screen name={screens.Home} component={HomeScreen} />
      <Tab.Screen name={screens.Post} component={PostScreen} />
      <Tab.Screen name={screens.Profile} component={ProfileScreen} />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {state.isLoading ? (
          // We haven't finished checking for the token yet
          <Stack.Screen name={screens.Splash} component={Splash} />
        ) : state.userToken == null ? (
          // No token found, user isn't signed in
          <>
            <Stack.Screen name={screens.Login} component={Login} />
            <Stack.Screen name={screens.Register} component={Register} />
          </>
        ) : (
          // User is signed in
          <Stack.Screen name={screens.Root} component={Root} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
