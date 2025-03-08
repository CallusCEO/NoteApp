import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import Typography from '../constants/Typography';

const TextStyles = (theme: 'light' | 'dark') =>
	StyleSheet.create({
		bodyText: {
			fontFamily: Typography.fontFamily,
			fontSize: Typography.fontSize.medium,
			color: theme === 'light' ? Colors.light.text : Colors.dark.text,
		},
		headerText: {
			fontFamily: Typography.fontFamily,
			fontSize: Typography.fontSize.xlarge,
			color: theme === 'light' ? Colors.light.text : Colors.dark.text,
		},
		linkText: {
			fontFamily: Typography.fontFamily,
			fontSize: Typography.fontSize.medium,
			color: theme === 'light' ? Colors.light.link : Colors.dark.link,
		},
	});

export default TextStyles;
