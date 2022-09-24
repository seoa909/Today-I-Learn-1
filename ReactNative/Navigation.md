

```js
const Anna = ({ navigation, route }) => {
  return (
    <ScrollView style={styles.container}>
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
```


```
//navigation 객체가 가지고 있는 두 함수(setOptions와 navigate)

//해당 페이지의 제목을 설정할 수 있음
navigation.setOptions({
   title:'나만의 꿀팁'
})

//Stack.screen에서 name 속성으로 정해준 이름을 지정해주면 해당 페이지로 이동하는 함수
navigation.navigate("DetailPage")

//name 속성을 전달해주고, 두 번째 인자로 딕셔너리 데이터를 전달해주면, Detail 페이지에서 
//두번째 인자로 전달된 딕셔너리 데이터를 route 딕셔너리로 로 받을 수 있음
navigation.navigate("DetailPage",{
  title: title
})


//전달받은 데이터를 받는 route 딕셔너리
//비구조 할당 방식으로 route에 params 객체 키로 연결되어 전달되는 데이터를 꺼내 사용
//navigate 함수로 전달되는 딕셔너리 데이터는 다음과 같은 모습이기 때문입니다.
/*
  {
		route : {
			params :{
				title:title
			}
		}
	}

*/
const { title} = route.params;
```
