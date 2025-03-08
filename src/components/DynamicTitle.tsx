import { useColorScheme } from 'react-native';
import { TextInput } from 'react-native';
import DynamicTitleStyles from '../styles/DynamicTitleStyles';

export default function DynamicTitle() {
	const theme = useColorScheme() || 'light';
	const styles = DynamicTitleStyles(theme);

	return <TextInput style={styles.card} placeholder='Untitled' />;
}
