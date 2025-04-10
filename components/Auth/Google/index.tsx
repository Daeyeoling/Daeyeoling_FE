import { Image } from 'react-native';
import * as s from './style';
import GoogleLogo from '@assets/images/GoogleLogo.png';

export default function GoogleAuth() {
	return (
		<s.Container>
			<s.LogoWrapper>
				<Image source={GoogleLogo} style={{ width: 20, height: 20 }} />
			</s.LogoWrapper>
			<s.Label>구글계정으로 계속하기</s.Label>
		</s.Container>
	);
}
