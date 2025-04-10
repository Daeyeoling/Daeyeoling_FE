import { Stack } from 'expo-router';
import { FlatList, Image, Pressable } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import * as s from '@styles/index';

const DATA = Array(10).fill({
	title: '에어팟 프로',
	location: '군자동',
	date: '3일 전',
	price: '220,000원',
	comments: 3,
	likes: 11,
	image:
		'https://1801889e95b1f9bf.kinxzone.com/webfile/product/9/9134/s8rg44227936.jpeg',
});

export default function Index() {
	return (
		<>
			<Stack.Screen
				options={{
					title: '',
					headerShadowVisible: true,
					headerShown: true,
					headerBackVisible: false,
					headerLeft: () => (
						<s.HeaderButton>
							<s.HeaderButtonText>로고 or 지역</s.HeaderButtonText>
						</s.HeaderButton>
					),
					headerRight: () => (
						<s.HeaderRightContainer>
							<Pressable>
								<Feather name='search' size={22} color='black' />
							</Pressable>
							<Pressable>
								<Feather name='menu' size={22} color='black' />
							</Pressable>
						</s.HeaderRightContainer>
					),
					headerStyle: { backgroundColor: '#FFF' },
					animation: 'none',
				}}
			/>

			<s.Container>
				<FlatList
					data={DATA}
					keyExtractor={(_, index) => index.toString()}
					showsVerticalScrollIndicator={false}
					renderItem={({ item }) => (
						<s.ItemContainer>
							<Image
								source={{ uri: item.image }}
								style={{ width: 100, height: 100, borderRadius: 6 }}
							/>
							<s.ItemContent>
								<s.Title>{item.title}</s.Title>
								<s.SubInfo>
									{item.location} · {item.date}
								</s.SubInfo>
								<s.Price>{item.price}</s.Price>
								<s.Status>
									<FontAwesome name='commenting-o' size={14} color='#888' />
									<s.StatusText>{item.comments}</s.StatusText>
									<FontAwesome
										name='heart-o'
										size={14}
										color='#888'
										style={{ marginLeft: 10 }}
									/>
									<s.StatusText>{item.likes}</s.StatusText>
								</s.Status>
							</s.ItemContent>
						</s.ItemContainer>
					)}
					ItemSeparatorComponent={() => <s.Separator />}
				/>

				<s.FloatingButton>
					<Feather name='plus' size={28} color='#fff' />
				</s.FloatingButton>
			</s.Container>
		</>
	);
}
