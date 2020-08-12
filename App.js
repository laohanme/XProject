import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen({ navigation, route }) {
	React.useEffect(() => {
		if (route.params?.post) {
			// Post updated, do something with `route.params.post`
			// For example, send the post to the server
			console.log(route.params?.post);
		}
	}, [route.params?.post]);

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Button
				title="Create post"
				onPress={() =>
					navigation.navigate('CreatePost')
				}
			/>
			<Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
		</View>
	);
}

function DetailsScreen({ route, navigation }) {
	/* 2. Get the param */
	const { itemId } = route.params;
	const { otherParam } = route.params;
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Details Screen</Text>
			<Text>itemId: {JSON.stringify(itemId)}</Text>
			<Text>otherParam: {JSON.stringify(otherParam)}</Text>
			<Button
				title="Go to Details... again"
				onPress={() =>
					navigation.push('Details', {
						itemId: Math.floor(Math.random() * 100),
					})
				}
			/>
			<Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
			<Button title="Go back" onPress={() => navigation.goBack()} />
		</View>
	);
}

function CreatePostScreen({ navigation, route }) {
	const [postText, setPostText] = React.useState('');
	return (
		<>
			<TextInput
				multiline
				placeholder="What's on your mind?"
				style={{ height: 100, padding: 10, backgroundColor: 'white' }}
				value={postText}
				onChangeText={setPostText}
			/>
			<Button
				title="Done"
				onPress={() => {
					// Pass params back to home screen
					if (postText != "") {
						navigation.navigate('Home', { post: postText });
					}
				}}
			/>
		</>
	);
}

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={HomeScreen} options={{
	
				}} />
				<Stack.Screen name="Details" component={DetailsScreen} />
				<Stack.Screen name="CreatePost" component={CreatePostScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;