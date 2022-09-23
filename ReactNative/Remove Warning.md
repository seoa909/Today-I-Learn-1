# LogBox
- Using LogBox to Remove Warning Logs

```js
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, LogBox } from "react-native";

export default function App() {
  LogBox.ignoreLogs(["Warning: ..."]);
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>연습하기</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: "blue",
    fontSize: "30px",
  },
});

```
