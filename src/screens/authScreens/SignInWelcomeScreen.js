import { View, Text, Dimensions, StyleSheet, Image } from 'react-native'
import { colors, parameters } from '../../global/styles';
import Header from "../../components/Header";
import React, {useRef, useState} from 'react'
import { Icon, Button, SocialIcon } from 'react-native-elements'
import * as  Animatable from "react-native-animatable"
import Swiper from "react-native-swiper"



const SignInWelcomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>

      <View style={{flex:3, justifyContent:"flex-start", alignItems:"center", paddingTop: 20 }}>
        <Text style={{fontSize: 26, color: colors.buttons, fontWeight:"bold"}}>DISCOVER RESTAURANT</Text>
        <Text style={{fontSize: 26, color: colors.buttons, fontWeight:"bold"}}>IN YOUR AREA</Text>
      </View>

      <View style={{flex:4, justifyContent:"center"}}>
            <Swiper autoplay={true}>
                <View style={styles.slide1}>
                    <Image 
                   source={require("../../../assets/pizza.jpeg")}
                   style={{height:"100%", width: '100%'}}
                    />
                </View>

                <View style={styles.slide2}>
                    <Image 
                   source={require("../../../assets/chicken.jpeg")}
                   style={{height:"100%", width: '100%'}}
                    />
                </View>

                <View style={styles.slide3}>
                    <Image 
                   source={require("../../../assets/smallchops.jpeg")}
                   style={{height:"100%", width: '100%'}}
                    />
                </View>

                <View style={styles.slide3}>
                    <Image 
                   source={require("../../../assets/food.jpeg")}
                   style={{height:"100%", width: '100%'}}
                    />
                </View>

                <View style={styles.slide3}>
                    <Image 
                   source={require("../../../assets/chicken1.jpeg")}
                   style={{height:"100%", width: '100%'}}
                    />
                </View>

                <View style={styles.slide3}>
                    <Image 
                   source={require("../../../assets/food1.jpeg")}
                   style={{height:"100%", width: '100%'}}
                    />
                </View>

                <View style={styles.slide3}>
                    <Image 
                   source={require("../../../assets/fruits.jpeg")}
                   style={{height:"100%", width: '100%'}}
                    />
                </View>

                <View style={styles.slide3}>
                    <Image 
                   source={require("../../../assets/chicken2.jpeg")}
                   style={{height:"100%", width: '100%'}}
                    />
                </View>

                <View style={styles.slide3}>
                    <Image 
                   source={require("../../../assets/fruits1.jpeg")}
                   style={{height:"100%", width: '100%'}}
                    />
                </View>

                <View style={styles.slide3}>
                    <Image 
                   source={require("../../../assets/chicken.jpeg")}
                   style={{height:"100%", width: '100%'}}
                    />
                </View>



            </Swiper>    
      </View>

      <View style={{flex:4, justifyContent:"flex-end", marginBottom:20, marginTop: 30}}>
      <View style={{marginHorizontal:20, marginVertical: 10}}>
        <Button  title="SIGN IN"
         buttonStyle={parameters.styledButton}
         titleStyle={parameters.buttonTitle}
         onPress={()=>{
            navigation.navigate("SignInScreen")
         }}
        />
      </View>
      </View>

      <View style={{marginHorizontal: 20, marginBottom: 30, height: 50}}>
        <Button 
        title="Create your Account"
        buttonStyle= {styles.createButton}
        titleStyle= {styles.createButtonTitle}
        />
       </View>


    </View>
  )
}

const styles = StyleSheet.create({

    slide1:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#9DD6EB",
    },
    slide2:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#97CAE5",
    },
    slide3:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#92BBD9",
    },
    createButton: {
        backgroundColor: "white",
        alignContent:"center",
        justifyContent:"center",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#ff8c52",
        height: 40,
        paddingHorizontal: 20,
        borderColor:colors.buttons
    },
    createButtonTitle:{
        color:colors.grey1,
        fontSize: 20,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        marginTop:0,
        paddingBottom: -2
    }

})



export default SignInWelcomeScreen

