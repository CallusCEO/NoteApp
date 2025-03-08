import { useFonts } from 'expo-font';

const [fontsLoaded] = useFonts({
	Nexa: require('../assets/fonts/Nexa-ExtraLight.ttf'),
});

const Typography = {
	fontFamily: 'Nexa',
	fontSize: {
		small: 12,
		medium: 16,
		large: 20,
		xlarge: 24,
	},
	fontWeight: {
		light: 300,
		regular: 400,
		medium: 500,
		bold: 700,
	},
};

export default Typography;
