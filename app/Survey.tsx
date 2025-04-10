import { View, Text, Pressable, TextInput } from 'react-native';
import * as s from '@styles/Survey';
import { Stack, useRouter } from 'expo-router';
import { Ionicons, Feather } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { useState } from 'react';

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

	const handleNextPress = () => {
		router.replace('/');
	};

	const [selectedAge, setAge] = useState('');
	const [selectedGender, setGender] = useState('');

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
					<s.TextLayout>
						<s.Title>회원정보를 입력해주세요.</s.Title>
						<s.SubTitle>
							회원정보는 원활한 서비스 사용을 위해 사용됩니다.
						</s.SubTitle>
					</s.TextLayout>

					<s.InputLayout>
						<s.InputTitle>별명</s.InputTitle>
						<s.TextInputLayout>
							<s.TextInput placeholder='별명을 입력해주세요.' />
						</s.TextInputLayout>
					</s.InputLayout>

					<s.InputLayout>
						<s.InputTitle>주소</s.InputTitle>
						<s.TextInputLayout>
							<s.TextInput placeholder='주소를 입력해주세요.' />
						</s.TextInputLayout>
					</s.InputLayout>

					<s.InputLayout>
						<s.InputTitle>연령</s.InputTitle>
						<s.RadioRow>
							{['10대', '20대', '30대', '40대', '기타'].map((age) => (
								<s.RadioOption key={age} onPress={() => setAge(age)}>
									<s.RadioCircle selected={age === selectedAge} />
									<s.RadioLabel>{age}</s.RadioLabel>
								</s.RadioOption>
							))}
						</s.RadioRow>
					</s.InputLayout>

					<s.InputLayout>
						<s.InputTitle>성별</s.InputTitle>
						<s.RadioRow>
							{['여성', '남성'].map((gender) => (
								<s.RadioOption key={gender} onPress={() => setGender(gender)}>
									<s.RadioCircle selected={gender === selectedGender} />
									<s.RadioLabel>{gender}</s.RadioLabel>
								</s.RadioOption>
							))}
						</s.RadioRow>
					</s.InputLayout>
				</s.Layout>
				<s.ButtonLayout>
					<s.Button onPress={handleNextPress}>
						<s.ButtonText>다음</s.ButtonText>
					</s.Button>
				</s.ButtonLayout>
			</s.Container>
		</>
	);
}
