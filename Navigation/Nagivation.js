import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../Login/Login";
import Register from "../Register/Register";

const isLoggedIn = false;

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// const MainNavigator = () => (
//     <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Feed" component={FeedScreen} />
//         <Tab.Screen name="Catalog" component={CatalogScreen} />
//     </Tab.Navigator>
// );

// const LoginNavigation = () => (
//     <Stack.Navigator headerMode="none">
//         <Stack.Screen name="Sign Up" component={SignUpScreen}/>
//         <Stack.Screen name="Sign In" component={SignInScreen}/>
//         <Stack.Screen name="Main" component={MainNavigator}/>
//     </Stack.Navigator>
// );

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
