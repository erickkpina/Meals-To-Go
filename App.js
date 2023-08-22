import React, {useState, useEffect} from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";

const firebaseConfig = {
	apiKey: "AIzaSyA0xpeq7c5UBP6kYP8UVfICr957qEf3ol4",
	authDomain: "mealstogo-5b0d1.firebaseapp.com",
	projectId: "mealstogo-5b0d1",
	storageBucket: "mealstogo-5b0d1.appspot.com",
	messagingSenderId: "333349464653",
	appId: "1:333349464653:web:279d22be3687ba69ab0a04"
};
 
const app = initializeApp(firebaseConfig);


export default function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const auth = getAuth(app);

	useEffect(() => {
		signInWithEmailAndPassword(auth, "erickmpina@gmail.com", "123456")
		.then((userCredential) => {
			const user = userCredential.user;
			console.log(userCredential);
			setIsAuthenticated(true);
		})
		.catch((e) => {
			console.error(e);
		});
	}, []);
		

	const [oswaldLoaded] = useOswald({
		Oswald_400Regular,
	});

	const [latoLoaded] = useLato({
		Lato_400Regular,
	});

	if (!oswaldLoaded || !latoLoaded) {
		return null;
	}

	return (
		<>
			<ThemeProvider theme={theme}>
				<FavouritesContextProvider>
					<LocationContextProvider>
						<RestaurantsContextProvider>
							<Navigation />
						</RestaurantsContextProvider>
					</LocationContextProvider>
				</FavouritesContextProvider>
			</ThemeProvider>
			<ExpoStatusBar style="auto" />
		</>
	);
}