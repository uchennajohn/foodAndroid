import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import {colors, parameters } from "../global/styles"

const FoodCard = ({
    onPressFoodCard,
    restaurantName,
    deliveryAvailable,
    discountAvailable,
    discountPercent,
    numberOfReview,
    businessAddress,
    farAway,
    averageReveiew,
    image,
    screenWidth
}) => {

    

  return (
    <TouchableOpacity>
        <View style={{...styles.cardView, width: screenWidth}}>
                 <Image style={{...styles.image, window:screenWidth}} 
                source={{uri:image}}
                />

<View>
            <View>
                <Text style={styles.restaurantName}>{restaurantName}</Text>
            </View>

            <View style={{flex:1, flexDirection:"row"}}>
                    <View style={styles.distance}>
                        <Icon name="place"
                              type='material'
                              color={colors.grey2}
                              size={18}
                              iconStyle={{marginTop: 3}}  
                         />
                         <Text style={styles.minutes}>{farAway}Min</Text>
                    </View>
                    <View style={{flex: 9, flexDirection:"row"}}>
                            <Text style={styles.address}>{businessAddress}</Text>
                    </View>
            </View>
        </View>
        </View>

      
        <View style={styles.review}>
            <Text style={styles.averageReveiew}>{averageReveiew}</Text>
            <Text style={styles.numberOfReview}>{numberOfReview}review</Text>

        </View>
    </TouchableOpacity>
  )
}

export default FoodCard

const styles = StyleSheet.create({
cardView:{
    marginHorizontal:9,
    borderTopRightRadius:5,
    borderTopLeftRadius:5,
    borderWidth: 1,

    borderColor:colors.grey4,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5
    
},
image:{
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    height: 150
}, 
restaurantName:{
    fontSize: 17,
    fontWeight:"bold",
    color:colors.grey1,
    marginTop:5,
    marginLeft: 10
}, distance:{
    flex:4,
    flexDirection:"row",
    borderRightColor:colors.grey4,
    paddingHorizontal: 5,
    borderRightWidth: 1
}, minutes:{
    fontSize:12,
    fontWeight:"bold",
    paddingTop: 5,
    color:colors.grey3
}, address: {
    fontSize: 12,
    paddingTop: 5,
    color: colors.grey4,
    paddingHorizontal: 10
}, 
review:{
    position: "absolute",
    right: 10,
    backgroundColor: "rgba(52,52,52, 0.3)",
    padding: 2,
    alignItems:"center",
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 12,
    top:0,
    right: 10,
    justifyContent:"center"
},
averageReveiew:{
    color:"white",
    fontSize:20,
    fontWeight:"bold",
    marginTop: -3
},
numberOfReview:{
   color: "white",
   fontSize: 13,
   marginRight: 0,
   marginLeft: 0 
}


})