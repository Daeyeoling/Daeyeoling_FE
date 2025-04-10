import { View, Text, Pressable } from 'react-native';
import * as s from '@styles/Survey';
import { Stack, useRouter } from 'expo-router';
import { Ionicons, Feather } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

const headerStyles = StyleSheet.create({
	header: {
		backgroundColor: '#ffffff',
		borderBottomWidth: 1,
		borderBottomColor: '#E5E5E5',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.15,
		shadowRadius: 2,
	},
});

export default function Survey() {
	const router = useRouter();

	const handleBackPress = () => {
		router.back();
	};

	return (
		<>
			<Stack.Screen
				options={{
					title: '',
					headerShadowVisible: true,
					headerShown: true,
					headerStyle: headerStyles.header,
					headerLeft: () => (
						<Pressable onPress={handleBackPress}>
							<Ionicons name='chevron-back' size={24} color='black' />
						</Pressable>
					),
					headerRight: () => (
						<View style={{ flexDirection: 'row', gap: 12 }}>
							<Pressable onPress={() => console.log('검색')}>
								<Feather name='search' size={22} color='black' />
							</Pressable>
							<Pressable onPress={() => console.log('메뉴')}>
								<Feather name='menu' size={22} color='black' />
							</Pressable>
						</View>
					),
				}}
			/>

			<s.Container>
				<s.Layout>
					<Text>Survey</Text>
				</s.Layout>
			</s.Container>
		</>
	);
}
