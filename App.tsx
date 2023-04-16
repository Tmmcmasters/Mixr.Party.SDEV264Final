import React from "react";
import { Text, Image, ImageBackground, View, StyleSheet} from "react-native";


const App = () => {
  return (
    <View style = {styles.pageContainer}>
      <View style = {styles.card}>
    <ImageBackground 
    source = {{ uri: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'}} 
    style = {styles.image}
    >
      
      <Text style = {styles.availableSpots}>5 Left!</Text>
      <Text style = {styles.costLabel}>$50</Text>
      <View style = {styles.innerTitleDescription}>
      <Text style = {styles.title}>Rap Concert</Text>
      <Text style = {styles.description}>Come celebrate with Dr. Dre at the Notre Dame Stadium this weekend. Experience his new albumn!</Text>
      </View>
      </ImageBackground>
    </View>
    </View>
  )
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  card: {
    width: '95%',
    height: '60%',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
  image: { 
    borderRadius: 10,
    width: '100%', 
    height: '100%',
    overflow: 'hidden',

    justifyContent: 'flex-end',
  },
  availableSpots: {
    position: 'absolute',
    fontSize: 28,
    fontWeight: 'bold',
    color: 'red',
    textShadowColor: '#000',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
    elevation: 5,
    top: 10,
    right: 10
  },
  costLabel: {
    position: 'absolute',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2bff00',
    textShadowColor: '#000',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
    elevation: 5,
    top: 10,
    left: 10
  },
  innerTitleDescription: {
    padding: 10
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    //textAlign: 'left',
    color: 'white',
  },
  description: {
    fontSize: 20,
    //textAlign: 'left',
    color: 'white',
    lineHeight: 25,
  }
})

export default App;