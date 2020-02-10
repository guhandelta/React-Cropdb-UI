import React from "react";
import { List, Header } from "semantic-ui-react";

export const Crops = ({ crops }) => {
  return (
    <List>
      {crops.map(crop => {
        return (
          <List.Item key={crop.price}>
            <Header>{crop.name}</Header>
          </List.Item>
        );
      })}
    </List>
  );
};
