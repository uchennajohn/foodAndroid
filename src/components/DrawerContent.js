import { StyleSheet, Text, View, Switch } from 'react-native'
import {DrawerContentScrollView, DrawerItemList, DrawerItem} from "@react-navigation/drawer"
import { Avatar, Icon } from "react-native-elements"
import React from 'react'
import { colors } from '../global/styles'


const DrawerContent = (props) => {
  return (
    <View style={styles.container}>
        <DrawerContentScrollView {...props}>


    <View style={{ backgroundColor: colors.buttons,}}>

      <View style={{flexDirection: "row", 
      alignItems:"center", 
      
      paddingLeft: 20}}>
        <Avatar 
        rounded
        size={75}
        avatarStyle={styles.avatar}
        source = {{uri:'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg'}}
        />

        <View style={{marginLeft:10}}>
            <Text style={{fontWeight:"bold",color:colors.cardbackground, fontSize: 18}}>John Uchenna</Text>
            <Text style={{color: colors.cardbackground, fontSize: 14}}>john@gmail.com</Text>
        </View>
    </View>

    <View style={{flexDirection:"row", paddingBottom: 5, marginTop: 10}}>
    <View style={{flexDirection:"row", marginTop: 10,marginHorizontal: 20}}>
            <View style={{marginLeft:10, alignItems:"center", justifyContent:"center", }}>
                    <Text style={{fontWeight:"bold", color:colors.cardbackground, fontSize:18}}>1</Text>
                    <Text style={{fontSize:14, color: colors.cardbackground}}>My Favorite</Text>

            </View>
        </View>

        <View  style={{flexDirection:"row", marginTop: 10}}>
              <View style={{marginLeft:10, alignItems:"center", justifyContent:"center"}}>
                    <Text style={{fontWeight:"bold", color:colors.cardbackground, fontSize:18}}>1</Text>
                    <Text style={{fontSize:14, color: colors.cardbackground}}>Shopping Cart</Text>
             </View>
        </View>
    </View>

</View>
    

      
      <DrawerItemList {...props} />

      < DrawerItem 
       label="Payment"
       icon={({color, size,  })=>(
        <Icon 
        type="material-community"
        name="credit-card-outline"
        color={color}
        size={size}
        />
       )}
       />

< DrawerItem 
       label="Promotions"
       icon={({color, size,  })=>(
        <Icon 
        type="material-community"
        name="tag-heart"
        color={color}
        size={size}
        />
       )}
       />

< DrawerItem 
       label="Settings"
       icon={({color, size,})=>(
        <Icon 
        type="material-community"
        name="cog-outline"
        color={color}
        size={size}
        />
       )}
       />

< DrawerItem 
       label="Help"
       icon={({color, size,  })=>(
        <Icon 
        type="material-community"
        name="lifebuoy"
        color={color}
        size={size}
        />
       )}
       />

         <View style={{borderTopWidth: 1, borderTopColor:colors.grey5}}>
            <Text style={styles.preferences}>Preferences</Text>
            <View style={styles.switchText}>
                  <Text style={styles.darkThemeText}> Dark Theme</Text>
                  <View style={{paddingRight:10 }}>
                          <Switch 
                          trackColor={{false: "#767577", true: "#81b0ff " }}
                          thumbColor={"#f4f3f4"}
                          />
                  </View>
            </View>
           </View>




      </DrawerContentScrollView>

      < DrawerItem 
       label="Sign Out"
       icon={({color, size,  })=>(
        <Icon 
        type="material-community"
        name="logout-variant"
        color={color}
        size={size}
        />
       )}
       />
    </View>
  )
}





export default DrawerContent

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    avatar:{
        borderWidth: 4,
        borderColor: colors.pagebackground,
       
    },
    preferences:{
       fontSize: 16,
       color:colors.grey2,
       paddingTop:10,
       paddingLeft:20
    },
    switchText:{
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      paddingLeft: 20,
      paddingVertical:15,
      paddingRight: 10
    },
    darkThemeText:{
      fontSize: 16,
      paddingTop: 10,
      paddingLeft: 0,
      fontWeight: "bold"
    }
})