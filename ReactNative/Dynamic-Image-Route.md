# Dynamic Image Route

# Using Switch ~ Case
```js
export default function DetailPage({ navigation, route }: temp) {
  useEffect(() => {
    navigation.setOptions({
      title: route.params.title,
    });
  }, []);

  const member = route.params.title;

  const imagePath = () => {
    switch (member) {
      case "Mom":
        return require("pics/Mom.jpg");
      case "Dad":
        return require("pics/Dad.jpg");
      case "Son":
        return require("pics/Son.jpg");
      case "Daughter":
        return require("pics/Daughter.jpg");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={imagePath()}
        resizeMode={"cover"}
        style={styles.imageStyle}
      />
    </ScrollView>
  );
}
```
