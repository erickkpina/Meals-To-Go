import React, {useState, useEffect} from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { initializeApp } from "firebase/app";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
	apiKey: "AIzaSyA0xpeq7c5UBP6kYP8UVfICr957qEf3ol4",
	authDomain: "mealstogo-5b0d1.firebaseapp.com",
	projectId: "mealstogo-5b0d1",
	storageBucket: "mealstogo-5b0d1.appspot.com",
	messagingSenderId: "333349464653",
	appId: "1:333349464653:web:279d22be3687ba69ab0a04"
};
 
initializeApp(firebaseConfig);


export default function App() {
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
				<AuthenticationContextProvider>
					<Navigation />
				</AuthenticationContextProvider>
			</ThemeProvider>
			<ExpoStatusBar style="auto" />
		</>
	);
}