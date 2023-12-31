import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  	padding-top: ${(props) => props.theme.space[3]};
  	padding-left: ${(props) => props.theme.space[3]};
  	padding-right: ${(props) => props.theme.space[3]};
`;

const SearchBarStyled = styled(Searchbar)`
	border-radius: 3px;
	background-color: ${(props) => props.theme.colors.bg.primary};
	box-shadow: 0 40px 24px rgba(0, 0, 0, 0.1);
	height: 53px; 
`;

export const Search = ({ isFavouritesToggled, onFavouritesToggle }) => {
	const { keyword, search } = useContext(LocationContext);
	const [searchKeyword, setSearchKeyword] = useState(keyword);

	return (
		<SearchContainer>
			<SearchBarStyled
				icon={isFavouritesToggled ? "heart" : "heart-outline"}
				onIconPress={ onFavouritesToggle }
				placeholder="Search for a location"
				value={searchKeyword}
				onSubmitEditing={() => {
					search(searchKeyword);
				}}
				onChangeText={(text) => {
					setSearchKeyword(text);
				}}
			/>
		</SearchContainer>
	);
};