import React from "react";
import { ViewBase, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({ color }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`Increase ${color}`} />
      <Button ttitle={`Decrease ${color}`} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;