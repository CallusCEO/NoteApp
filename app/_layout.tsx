import { Stack } from 'expo-router';
import { TextInput, useColorScheme } from 'react-native';
import createNoteTitleStyles from '@/src/styles/NoteTitleStyles';
import createTextStyles from '@/src/styles/TextStyles';

export default function RootLayout() {
	const theme = useColorScheme() || 'light';
	const NoteTitleStyles = createNoteTitleStyles(theme);
	const TextStyles = createTextStyles(theme);

	return (
		<Stack
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name='index' />
		</Stack>
	);
}
