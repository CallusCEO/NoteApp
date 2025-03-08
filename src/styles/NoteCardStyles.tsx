import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import Typography from '../constants/Typography';

const NoteCardStyles = (theme: 'light' | 'dark') =>
	StyleSheet.create({
		card: {
			backgroundColor: theme === 'light' ? Colors.light.primary : Colors.dark.primary,
			borderRadius: 10,
			padding: 10,
			marginHorizontal: 5,
			marginVertical: 10,
			width: '90%',
			display: 'flex',
			flexDirection: 'row',
		},
	});

export default NoteCardStyles;
