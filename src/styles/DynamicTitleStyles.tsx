import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import Typography from '../constants/Typography';

const DynamicTitleStyles = (theme: 'light' | 'dark') =>
	StyleSheet.create({
		card: {
			backgroundColor: theme === 'light' ? Colors.light.primary : Colors.dark.primary,
			borderRadius: 10,
			padding: 10,
			fontFamily: Typography.fontFamily,
			fontSize: Typography.fontSize.xlarge,
			color: theme === 'light' ? Colors.light.text : Colors.dark.text,
			borderColor: theme === 'light' ? Colors.light.secondary : Colors.dark.secondary,
		},
	});

export default DynamicTitleStyles;
