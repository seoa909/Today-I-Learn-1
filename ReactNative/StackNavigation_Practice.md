# Preview
![ezgif com-gif-maker](https://user-images.githubusercontent.com/59503331/192073784-00449860-703b-4b91-88c9-96aac1ec63f2.gif)

# App.js
```js
import React, { useEffect, useState } from "react";
import Loading from "./pages/Loading";
import Navi from "./pages/Navi";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return loading ? (
    <Loading />
  ) : (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Navi />
    </NavigationContainer>
  );
};

export default App;
```

# Navi.js
```js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Anna from "./Anna";
import Elsa from "./Elsa";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "black",
          borderBottomColor: "black",
          shadowColor: "black",
          height: 50,
        },
        headerTitleAlign: "center",
        headerTintColor: "#FFF",
        headerBackTitleVisible: false,
        headerTitle: "Frozen",
      }}
    >
      <Stack.Screen name="Elsa" component={Elsa} />
      <Stack.Screen name="Anna" component={Anna} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
```

# Anna.js
```js
import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  StatusBar,
} from "react-native";

const Anna = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.ProfileBox}>
        <Image
          source={{
            uri: "https://www.fashionn.com/files/board/2021/image/o_1faap5brl655njdi8v3rq1ll4b.JPG",
          }}
          resizeMode={"cover"}
          style={styles.imageStyle}
        />
      </View>
      <View style={styles.ExplainBox}>
        <Text style={styles.textStyle}>Name: Anna</Text>
        <Text style={styles.textStyle}>Nationality: Arendelle</Text>
        <Text style={styles.textStyle}>Birth: 1820-06-21</Text>
        <View style={styles.themeStyle}>
          <Text style={styles.textStyle}>Theme Songs</Text>
          <Text style={styles.textStyle}>
            1. Do You Want to Build a Snowman?
          </Text>
          <Text style={styles.textStyle}>2. Some Things Never Change </Text>
          <Text style={styles.textStyle}>3. Love Is an Open Door </Text>
        </View>
        <View style={styles.ButtonBox}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              navigation.navigate("Elsa");
            }}
          >
            <Text style={styles.textStyle}>Check Elsa</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Anna;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000080",
  },
  ProfileBox: {
    height: 300,
    margin: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  ExplainBox: {
    backgroundColor: "#fff",
    alignItems: "flex-start",
    marginTop: 0,
    margin: 50,
    borderRadius: 30,
    padding: 15,
  },
  ButtonBox: {
    width: "100%",
    alignItems: "center",
  },
  FlexBox: {
    flex: 1,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
  },
  textStyle: {
    color: "#000080",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 5,
  },
  buttonStyle: {
    width: 200,
    backgroundColor: "yellow",
    borderRadius: 30,
    marginTop: 10,
    padding: 10,
  },
  themeStyle: {
    width: "100%",
    backgroundColor: "pink",
    borderRadius: 20,
    padding: 5,
  },
});

```

# Elsa.js
```js
import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  StatusBar,
} from "react-native";

const Elsa = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.ProfileBox}>
        <Image
          source={{
            uri: "https://i.pinimg.com/736x/50/e5/55/50e5553f6d297903788694952c9d71b5.jpg",
          }}
          resizeMode={"cover"}
          style={styles.imageStyle}
        />
      </View>
      <View style={styles.ExplainBox}>
        <Text style={styles.textStyle}>Name: Elsa</Text>
        <Text style={styles.textStyle}>Nationality: Arendelle</Text>
        <Text style={styles.textStyle}>Birth: 1817-12-22</Text>
        <View style={styles.themeStyle}>
          <Text style={styles.textStyle}>Theme Songs</Text>
          <Text style={styles.textStyle}>1. Let It Go</Text>
          <Text style={styles.textStyle}>2. Show Yourself </Text>
          <Text style={styles.textStyle}>3. Into the Unknown </Text>
        </View>
        <View style={styles.ButtonBox}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              navigation.navigate("Anna");
            }}
          >
            <Text style={styles.textStyle}>Check Anna</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Elsa;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000080",
  },
  ProfileBox: {
    height: 300,
    margin: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  ExplainBox: {
    backgroundColor: "#fff",
    alignItems: "flex-start",
    marginTop: 0,
    margin: 50,
    borderRadius: 30,
    padding: 15,
  },
  ButtonBox: {
    width: "100%",
    alignItems: "center",
  },
  FlexBox: {
    flex: 1,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
  },
  textStyle: {
    color: "#000080",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 5,
  },
  buttonStyle: {
    width: 200,
    backgroundColor: "yellow",
    borderRadius: 30,
    marginTop: 10,
    padding: 10,
  },
  themeStyle: {
    width: "100%",
    backgroundColor: "pink",
    borderRadius: 20,
    padding: 5,
  },
});

```

# Loading.js
```js
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://coolhdwall.com/storage1/202107/frozen-2-elsa-anna-4K-wallpaper-pc-preview.jpg",
        }}
        resizeMode={"cover"}
        style={styles.imageStyle}
      />
      <Text style={styles.title}>Frozen</Text>
      <Text style={styles.title}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000080",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
    marginTop: 30,
  },
  imageStyle: {
    width: "100%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
  },
});

```

# Package.json
```js
{
  "name": "practice",
  "version": "1.0.0",
  "main": "node_modules/expo/AppEntry.js",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web"
  },
  "dependencies": {
    "@react-navigation/elements": "^1.3.6",
    "@react-navigation/native": "^6.0.13",
    "@react-navigation/stack": "^6.3.1",
    "expo": "~46.0.9",
    "expo-status-bar": "~1.4.0",
    "react": "18.0.0",
    "react-dom": "^18.2.0",
    "react-native": "0.69.5",
    "react-native-gesture-handler": "^2.6.2",
    "react-native-safe-area-context": "^4.3.4",
    "react-native-screens": "^3.17.0",
    "react-native-web": "~0.18.7",
    "react-navigation": "^4.4.4"
  },
  "devDependencies": {
    "@babel/core": "^7.12.9"
  },
  "private": true
}

```
