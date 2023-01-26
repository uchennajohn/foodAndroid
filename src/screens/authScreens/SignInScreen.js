import { View, Text, Dimensions, StyleSheet, TextInput } from 'react-native'
import { colors, parameters } from '../../global/styles';
import Header from "../../components/Header";
import React, {useRef, useState} from 'react'
import { Icon, Button, SocialIcon } from 'react-native-elements'
import * as  Animatable from "react-native-animatable"


export default function SignInScreen({navigation}) {
    const [textInput2focused, setTextInput2focused] = useState(false)
    const textInput1 = useRef(1);
    const textInput2= useRef(2)




  return (
    <View style={styles.container}>
       <Header title="MY ACCOUNT" type="arrow-left" navigation={navigation} />


       <View>
        <Text style={{color: colors.buttons}}>Sign- IN</Text>
       </View>
 
       <View style={{alignItems:"center", marginTop: 10}}>
        <Text style={styles.text1}>Please Enter the Email and Password</Text>
        <Text style={styles.text1}>registered with your account</Text>
       </View>

       <View style={{marginTop: 20}}>
        <View>
            <TextInput  
            style={styles.textInput1}
            placeholder="Email"
            ref={textInput1}
            />
        </View>

        <View style={styles.textInput2}>

        <Animatable.View animation={textInput2focused ? "" : "fadeInLeft"} duration={400}>
         <Icon
         name="lock"
         iconStyle={{color:colors.grey3}}
         type="material"
          
         />
        </Animatable.View>

        <TextInput  
            style={{width:"80%", }}
            placeholder="Password"
            ref={textInput2}
            onFocus={()=>{
                setTextInput2focused(false)
            }}

            onBlur={()=>{
                setTextInput2focused(true)
             }}
            />

        <Animatable.View animation={textInput2focused ? "" : "fadeInLeft"} duration={400}>
        <Icon
         name="visibility-off"
         iconStyle={{color:colors.grey3}}
         type="material"
         style={{marginRight: 10}}

        
         />
        </Animatable.View>

        </View>

       </View>

      <View style={{marginHorizontal:20, marginVertical: 30}}>
        <Button  title="SIGN IN"
         buttonStyle={parameters.styledButton}
         titleStyle={parameters.buttonTitle}
         onPress={()=>{navigation.navigate("HomeScreen")}}
        />
      </View>


      <View style={{alignItems:"center"}}>
        <Text style={{...styles.text1, textDecorationLine:"underline"}}>Forgot Password?</Text>
      </View>

      <View  style={{alignItems:"center", marginTop: 30, marginBottom: 30}} >
        <Text style={{fontSize: 20, fontWeight:"bold"}}>OR</Text>
      </View>

      <View >
        <SocialIcon 
        title='Sign In With Facebook'
        button
        type='facebook'
        style={styles.SocialIcon}
        onPress={()=>{}}
        />
      </View>

      <View >
        <SocialIcon 
        title='Sign In With Google'
        button
        type='google'
        style={styles.SocialIcon}
        onPress={()=>{}}
        />
      </View>

      <View style={{marginTop: 15, marginLeft: 20}}>
        <Text style={{...styles.text1,}}>New on TeeFood?</Text>
      </View>
       
       <View style={{alignItems:"flex-end", marginHorizontal: 20}}>
        <Button 
        title="Create An Account"
        buttonStyle= {styles.createButton}
        titleStyle= {styles.createButtonTitle}
        />
       </View>



    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    text1:{
        color: colors.grey3,
        fontSize: 16
    },
    textInput1:{
        borderWidth: 1,
        borderColor:"#86939e",
        marginHorizontal: 20,
        borderRadius:12,
        marginBottom:20,
        paddingLeft: 15,
        height: 50
      
        
    },
    textInput2:{
        borderWidth: 1,
        borderRadius: 12,
        marginHorizontal: 20,
        borderColor: "#86939e",
        flexDirection:"row",
        justifyContent: "space-between",
        alignContent:"center",
        alignItems:"center",
        paddingLeft: 15,
        height: 50
        
       
    },
    SocialIcon:{
        borderRadius: 12,
        height: 50,
        marginHorizontal:20,
        marginVertical: 10
    },
    createButton: {
        backgroundColor: "white",
        alignContent:"center",
        justifyContent:"center",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#ff8c52",
        height: 40,
        paddingHorizontal: 20
    },
    createButtonTitle:{
        color:"#ff8c52",
        fontSize: 16,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        marginTop: -3
    }
})