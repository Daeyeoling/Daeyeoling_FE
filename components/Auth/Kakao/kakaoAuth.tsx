import { Image } from 'react-native';
import * as s from './style';
import KakaoLogo from '@assets/images/KakaoLogo.png';

export default function KakaoAuth() {
	return (
		<s.Container>
			<s.LogoWrapper>
				<Image source={KakaoLogo} style={{ width: 20, height: 20 }} />
			</s.LogoWrapper>
			<s.Label>카카오로 3초만에 로그인</s.Label>
		</s.Container>
	);
}
