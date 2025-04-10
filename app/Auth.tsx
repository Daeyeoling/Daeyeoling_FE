import { Stack, useRouter } from 'expo-router';
import * as s from '@styles/Auth';
import logoImg from '@assets/images/Logo.png';
import GoogleAuth from '@/components/Auth/Google';
import KakaoAuth from '@/components/Auth/Kakao/kakaoAuth';

export default function Index() {
	const router = useRouter();

	const handleClick = () => {
		router.push('/Survey');
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
				<s.LogoComponents>
					<s.LogoImg source={logoImg} />
					<s.LogoText>대여링</s.LogoText>
				</s.LogoComponents>

				<s.OAuthButtonContainer>
					<s.Button onPress={handleClick}>
						<GoogleAuth />
					</s.Button>

					<s.Button onPress={handleClick}>
						<KakaoAuth />
					</s.Button>
				</s.OAuthButtonContainer>
			</s.Container>
		</>
	);
}
