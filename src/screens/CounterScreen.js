import React from "react";
import { ViewBase, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button 
        title="Increase"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button 
        title="Decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text>Current Count:</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;