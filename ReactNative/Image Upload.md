# Install
```js
yarn add expo-image-picker
```

# Example

```js

import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { temp } from "shared/Types";

export default function UploadPage({ navigation, route }: temp) {
  const [photo, setPhoto] = useState<any>(undefined);
  const _handlePhotoBtnPress = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setPhoto(result.uri);
    }
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={_handlePhotoBtnPress}>
        <Image source={{ uri: photo }} style={styles.imageStyle} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  imageStyle: {
    width: "100%",
    height: 400,
    marginTop: 5,
  },
});

```
