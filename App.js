import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

function HomeScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text style={{ margin: 10 }}>Hello</Text>
			<Button title="GO" onPress={() => navigation.navigate('FeedTab')} />
		</View>
	);
}

function Feed({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text style={{ margin: 10 }}>Feed</Text>
		</View>
	);
}

function Notifications({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text style={{ margin: 10 }}>Notifications</Text>
		</View>
	);
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={HomeScreen} />
		</Stack.Navigator>
	);
}

function FeedTabs() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Feed" component={Feed} />
		</Stack.Navigator>
	);
}

function NotificationTab() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Notifications" component={Notifications} />
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

						if (route.name === 'HomeTab') {
							iconName = focused ? 'ios-document' : 'ios-document-outline';
						}
						else if (route.name === 'FeedTab') {
							iconName = focused ? 'ios-list-outline' : 'ios-list';
						}

						// You can return any component that you like here!
						return <Ionicons name={iconName} size={size} color={color} />;
					},
				})}
				tabBarOptions={{
					activeTintColor: 'tomato',
					inactiveTintColor: 'gray',
				}}
			>

				<Tab.Screen name="HomeTab" component={HomeTabs} />
				<Tab.Screen name="FeedTab" component={FeedTabs} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}

export default App;