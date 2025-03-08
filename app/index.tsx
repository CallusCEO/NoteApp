import { Text, View, useColorScheme } from 'react-native';
import Colors from '../src/constants/Colors';
import Typography from '../src/constants/Typography';
import TextStyles from '../src/styles/TextStyles';
import NoteCardStyles from '../src/styles/NoteCardStyles';
import DinamicTitle from '../src/components/DynamicTitle';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Index() {
	const theme = useColorScheme() || 'light';
	const styles = NoteCardStyles(theme);

	return (
		<View style={styles.card}>
			<DinamicTitle />
		</View>
	);
}
