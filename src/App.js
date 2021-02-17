import "react-native-gesture-handler";
import * as React from "react";
import { View, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import styled from "styled-components/native";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

var { height, width } = Dimensions.get("window");

function HomeScreen({ navigation }) {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <StyledView></StyledView>
            <StyledText>Hello</StyledText>
        </View>
    );
}

function HomeTabs() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
}

function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === "HomeTab") {
                            iconName = focused
                                ? "ios-document"
                                : "ios-document-outline";
                        }
                        // You can return any component that you like here!
                        return (
                            <Ionicons
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        );
                    },
                })}
                tabBarOptions={{
                    activeTintColor: "tomato",
                    inactiveTintColor: "gray",
                }}
            >
                <Tab.Screen name="HomeTab" component={HomeTabs} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const StyledText = styled.Text`
    color: palevioletred;
    font-size: 20px;
`;

const StyledView = styled.View`
    background-color: red;
    height: 200px;
    width: width;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
`;
export default App;
