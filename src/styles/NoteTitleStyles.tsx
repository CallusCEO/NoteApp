import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const NoteTitleStyles = (theme: 'light' | 'dark') =>
	StyleSheet.create({
		header: {
			backgroundColor: theme === 'light' ? Colors.light.background : Colors.dark.background,
			height: 50,
		},
		icon: {
			color: theme === 'light' ? Colors.light.icon : Colors.dark.icon,
			fontSize: 20,
			marginRight: 10,
		},
	});

export default NoteTitleStyles;
