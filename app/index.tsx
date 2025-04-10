import { Stack, useNavigation, useRouter } from 'expo-router';
import { Text, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import * as s from '@styles/index';

export default function Index() {
	const router = useRouter();
	const handleClick = () => {
		router.replace('/Auth');
	};

	const navigation = useNavigation();
	useFocusEffect(() => {
		navigation.setOptions({
			headerLeft: () => null,
		});
	});

	return (
		<>
			<Stack.Screen
				options={{
					title: '',
					headerShadowVisible: false,
					headerShown: true,
					headerBackVisible: false,
					headerLeft: () => null,
					gestureEnabled: true,
					animation: 'none',
					headerStyle: {
						backgroundColor: '#FFF',
					},
				}}
			/>
			<s.Container>
				<TouchableOpacity onPress={handleClick}>
					<Text>Click Me</Text>
				</TouchableOpacity>
				<Text>Home</Text>
			</s.Container>
		</>
	);
}
