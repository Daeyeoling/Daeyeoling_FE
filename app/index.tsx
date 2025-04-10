import { Stack, useRouter } from 'expo-router';
import { Text, TouchableOpacity } from 'react-native';
import * as s from '@styles/index';

export default function Index() {
	const router = useRouter();

	const handleClick = () => {
		router.replace('/Auth');
	};

	return (
		<>
			<Stack.Screen
				options={{
					title: '',
					headerShadowVisible: false,
					headerShown: true,
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
