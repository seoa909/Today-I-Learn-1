# TouchableWithoutFeedback vs TouchableHighlight

# TouchableWithoutFeedback
- Give no effects to child components

```js
export default App;

import React, { useState } from 'react'; 
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'; 

const App = () => { 
  const [count, setCount] = useState(0); 
  const onPress = () => { setCount(count + 1) } 
  return ( 
    <View style={styles.container}> 
      <View style={styles.countContainer}> 
        <Text style={styles.countText}>Count: {count}</Text> 
      </View> 
      <TouchableWithoutFeedback onPress={onPress}> 
        <View style={styles.button}> 
          <Text>Touch Here</Text> 
        </View> 
      </TouchableWithoutFeedback> </View> 
  ) 
} 
const styles = StyleSheet.create({ 
  container: { 
    flex:1, 
    justifyContent: 'center', 
    paddingHorizontal: 10 
  }, 
  button: { 
    alignItems: 'center', 
    backgroundColor: '#dddddd', 
    padding: 10, 
  }, 
  countContainer: { 
    alignItems: 'center', 
    padding: 10 
  }, 
  countText: { 
    color: '#FF00FF' 
  }, 
  textinput: { 
    borderColor: '#7a42f4', 
    borderWidth: 1 
  } 
}) 
export default App
```

# TouchableHighlight

- Give an touch effect to child components

```js
mport React, { useState } from 'react'; 
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native'; 

const App = () => { 
  const [count, setCount] = useState(0); 
  const onPress = () => { setCount(count + 1) } 
  return ( 
    <View style={styles.container}> 
      <View style={styles.countContainer}> 
        <Text style={styles.countText}>Count: {count}</Text> 
      </View> 
      <TouchableHighlight onPress={onPress}> 
        <View style={styles.button}> 
          <Text>Touch Here</Text> 
        </View> 
      </TouchableHighlight> </View> 
  ) 
} 
const styles = StyleSheet.create({ 
  container: { 
    flex:1, 
    justifyContent: 'center', 
    paddingHorizontal: 10 
  }, 
  button: { 
    alignItems: 'center', 
    backgroundColor: '#dddddd', 
    padding: 10, 
  }, 
  countContainer: { 
    alignItems: 'center', 
    padding: 10 
  }, 
  countText: { 
    color: '#FF00FF' 
  }, 
  textinput: { 
    borderColor: '#7a42f4', 
    borderWidth: 1 
  } 
}) 
export default App
```
