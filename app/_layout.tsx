import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';

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
		<Stack>
			<Stack.Screen name='index' />
			<Stack.Screen name='Auth' />
			<Stack.Screen name='Survey' />
		</Stack>
	);
}
