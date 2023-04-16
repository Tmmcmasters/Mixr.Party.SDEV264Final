import React from "react";
import { Text, Image, ImageBackground, View, StyleSheet} from "react-native";
const Card = (props) => {
    const {availableSpots, costLabel, image, title, description} = props.user;
    return  (<View style = {styles.card}>
    <ImageBackground 
    source = {{ uri: image }} 
    style = {styles.image}
    >
      <Text style = {styles.availableSpots}>{availableSpots}</Text>
      <Text style = {styles.costLabel}>{costLabel}</Text>
      <View style = {styles.innerTitleDescription}>
      <Text style = {styles.title}>{title}</Text>
      <Text style = {styles.description}>{description}</Text>
      </View>
      </ImageBackground>
    </View>);
}
const styles = StyleSheet.create({
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
      textShadowOffset: { width: -3, height: 1 },
      textShadowRadius: 8,
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
      textShadowOffset: { width: -3, height: 1 },
      textShadowRadius: 8,
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
  });

export default Card