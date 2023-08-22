import React from "react";
import styled from "styled-components/native";
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component";

const MyText = styled.Text``;

const MapCallout = ({ restaurant }) => (
    <CompactRestaurantInfo 
        isMap
        restaurant={restaurant}
    />
);

export { MapCallout };
