
# Elements 
```

1. <View></View>
 - to Layout
 
2. <Text></Text>
 - to use text
 
3. <ScrollView></ScrollView>
 - to scroll the container 
 
4. <Button></Button>
- title property is mandatory
- styling should go for the <View> tag
 ex) 
 <View style={}> 
   <Button title="Button"><Button> 
 </View>

5. <TouchableOpacity></TouchableOpacity>
- Same as button
- Can style itself

6. <Image></Image>
- source, resizeMode properties 

7. <StatusBar />
<StatusBar barStyle="light-content" />
<StatusBar barStyle="dark-content" />

```


# Example
```js
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

import sampleImage from "./assets/icon.png";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.textContainer}>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.textStyle}>First Box</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.textStyle}>Second Box</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        {/*  Absolute Route */}
        <Image
          source={{
            uri: "https://pbs.twimg.com/profile_images/1374979417915547648/vKspl9Et_400x400.jpg",
          }}
          resizeMode={"cover"}
          style={styles.imageStyle}
        />
      </View>
      <View style={styles.textContainer}>
        {/* Relative Route */}
        <Image
          source={sampleImage}
          resizeMode={"cover"}
          style={styles.imageStyle}
        />
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
    height: 300,
    backgroundColor: "pink",
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    margin: 10,
  },
  buttonStyle: {
    justifyContent: "center",
    backgroundColor: "blue",
    borderRadius: 30,
    height: 100,
    margin: 10,
  },
  textStyle: {
    textAlign: "center",
    color: "#fff",
    fontSize: 30,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});


```
# Preview
![asdsad](https://user-images.githubusercontent.com/59503331/192061258-2d7a0439-682a-4651-bbaf-d7ba7785ebdc.PNG)


