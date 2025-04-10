import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme';

export default function RootLayout() {
	const [fontsLoaded] = useFonts({
		PretendardBold: require('@/assets/fonts/Pretendard-Bold.otf'),
		PretendardSemiBold: require('@/assets/fonts/Pretendard-SemiBold.otf'),
		PretendardMedium: require('@/assets/fonts/Pretendard-Medium.otf'),
		PretendardRegular: require('@/assets/fonts/Pretendard-Regular.otf'),
		EliceDigitalBaeumRegular: require('@/assets/fonts/EliceDigitalBaeum-Regular.otf'),
	});

	if (!fontsLoaded) return null;

	return (
		<ThemeProvider theme={theme}>
			<Stack>
				<Stack.Screen
					name='index'
					options={{
						title: '',
						headerShadowVisible: false,
						headerStyle: {
							backgroundColor: '#FFF',
						},
					}}
				/>
			</Stack>
		</ThemeProvider>
	);
}
