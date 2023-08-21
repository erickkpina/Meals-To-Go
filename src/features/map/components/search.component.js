import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
    padding-top: ${(props) => props.theme.space[3]};
    padding-left: ${(props) => props.theme.space[3]};
    padding-right: ${(props) => props.theme.space[3]};
    position: absolute;
    z-index: 999;
    top: 40px;
    width: 100%;
`;

const SearchBarStyled = styled(Searchbar)`
  border-radius: 3px;
  background-color: ${(props) => props.theme.colors.bg.primary};
  box-shadow: 0 40px 24px rgba(0, 0, 0, 0.1);
  height: 53px; 
`;

export const Search = () => {
    const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);
    useEffect(() => {
        setSearchKeyword(keyword);
    }, [keyword])
    return (
        <SearchContainer>
            <SearchBarStyled
                placeholder="Search for a location"
                icon="map"
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