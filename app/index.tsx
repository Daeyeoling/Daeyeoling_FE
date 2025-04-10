import { useNavigation } from 'expo-router';
import { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
import * as s from '@styles/index';
import logoImg from '@assets/images/Logo.png';

export default function Index() {
	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			title: '',
			headerShown: true,
		});
	}, [navigation]);

	return (
		<s.Container>
			<s.LogoImg source={logoImg} />
			<s.Label>
				<Text>ㅁㄴㄹㅇㄴㅇㄹ</Text>
			</s.Label>
		</s.Container>
	);
}
