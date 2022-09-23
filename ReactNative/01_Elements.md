
# Elements 
```

1. <View></View>
 - to Layout
 
2. <Text></Text>
 - to use text
 
3. <ScrollView></ScrollView>
 - to scroll the container 
 
```


# Example
```js
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>First Box</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>Second Box</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
  textContainer: {
    height: 500,
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 50,
    margin: 10,
  },
  textStyle: {
    textAlign: "center",
  },
});

```
