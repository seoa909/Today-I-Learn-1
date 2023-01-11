# Height 100vh

# Usage
- Get Window Height as global
- Use it in StyleSheet

```js
import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

let ScreenHeight = Dimensions.get("window").height;

const Loading = () => {
  return (
    <View>
      <Image
        source={require("pics/family.jpg")}
        resizeMode={"cover"}
        style={styles.imageStyle}
      />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  imageStyle: {
    height: ScreenHeight,
    backgroundColor: "red",
  },
});
```
