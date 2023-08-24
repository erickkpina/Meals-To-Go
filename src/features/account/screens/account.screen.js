import React from "react";
import styled from "styled-components/native";
import LottieView from "lottie-react-native";
import { ImageBackground } from "react-native";
import { Button } from "react-native-paper";

import { AccountCover, AccountContainer, AuthButton, Title, AnnimationWrapper } from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";

const AccountBackground = styled(ImageBackground)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;





export const AccountScreen = ({ navigation }) => {
    return (
        
        <AccountBackground source={require("../../../../assets/home_bg.png")}>
            <Title>Meals To Go</Title>
            <AccountCover />
            <AnnimationWrapper>
                <LottieView 
                    key="animation"
                    autoPlay
                    loop
                    resizeMode="cover"
                    source={require("../../../../assets/watermelon.json")}
                />
            </AnnimationWrapper>
            <AccountContainer>
                <Spacer size="medium">
                    <AuthButton 
                        icon="lock-open-outline"
                        buttonColor="purple"
                        mode="contained"
                        onPress={() => navigation.navigate("Login")}
                    >  
                        Login
                    </AuthButton>
                </Spacer>
                <Spacer size="medium">
                    <AuthButton 
                        icon="email-outline"
                        buttonColor="purple"
                        mode="contained"
                        onPress={() => navigation.navigate("Register")}
                    >  
                        Register
                    </AuthButton>
                </Spacer>
            </AccountContainer>
        </AccountBackground>
    );
};