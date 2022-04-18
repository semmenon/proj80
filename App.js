import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from '@react-navigation/stack';
//import { createStackNavigator } from '@react-navigation/stack';
//import { createStackNavigation } from '@react-navigation/stack';
//import { createStack } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import StartMapScreen from "./screens/StarMap";
import DailyPicScreen from "./screens/DailyPic";
import SpaceCraftScreen from "./screens/SpaceCraft";
import { View } from 'react-native';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
    
        {/* <Stack.Screen component="Home" name={HomeScreen} /> */}
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        {Stack.Screen name="Home" component="HomeScreen"}
        {/* <Stack.Screen name:"Home" component:{HomeScreen} /> */}
    
        <Stack.Screen name="StarMap" component={StartMapScreen} />
        <Stack.Screen name="DailyPic" component={DailyPicScreen} />
        <Stack.Screen name="SpaceCraft" component={SpaceCraftScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

getData=()=>{
  axios.get("")
    .then(response => {
        this.setState({ aircrafts: response.data.results})
        console.log(response.data.results)
    })
    .catch(error => {
      console.log(error.message)
    })
}

returnItem = ({item}) => {
  return(
    <View style = {{borderWidth: 1, justifyCOntent: 'center', alignItems: 'center',marginBotton:10,elevation:10}}>
      <Image
      source={{uri: item.agency.image_url}} style={{ width: "100%", height: 200, marginTop: 15, marginBotton:15, marginRight:10}}></Image>
    </View>
  )
}

<View
  style={{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }}>
  <View styles={{flex:0.25}}>
      <Text>Space crafts</Text>
  </View>
  <View styles={{flex:0.75}}>
  <FlatList
    keyExtractor={this.keyExtractor}
    data={this.state.aircrafts}
    renderItem={this.renderItem}
  />
  </View>
</View>

export default App;
