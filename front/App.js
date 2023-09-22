import { useState } from 'react';
import {Text} from 'react-native'

// import all the components we are going to use
import { SafeAreaView, StyleSheet, View, FlatList, Image, Pressable, Button } from 'react-native';

export default function App(){
  this.state = {
    buttonColor: 'red' // default button color goes here
  };
  return(
    <View>
      <Pressable color={this.state.btnColor} onPress={(r) =>{r.this.style = styles.btnPressed}}>
      <Text>Peoo</Text>
      </Pressable>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  imageThumbnail: {
    //justifyContent: 'center',
    //alignItems: 'center',
    height: 100,
    backgroundColor: 'white',
    color: 'red',
  },
  btn:{
    backgroundColor: 'red',

  },
  btnPressed:{
    backgroundColor: 'blue',
  }
});

/*
<FlatList
        data={dataSource}
        renderItem={({ item }) => (
          <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
            <Pressable onPress={()=> source={uri: null}}>
              <Image style={styles.imageThumbnail} source={{ uri: item.src }} />
            </Pressable>
          </View>
        )}
        //Setting the number of column
        numColumns={3}
        keyExtractor={(item, index) => index}
      />


*/