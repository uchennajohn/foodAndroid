import { StyleSheet, Text, View, TouchableOpacity,ScrollView,Pressable ,FlatList, Image, Dimensions } from 'react-native'
import React,{useState} from 'react'
import { Icon } from "react-native-elements"
import CountDown from 'react-native-countdown-component'
import Homeheader from '../components/Homeheader'
import { colors } from '../global/styles'
import {filterData, restaurantData} from "../global/Data"
import FoodCard from '../components/FoodCard'
//import { colors } from '../global/styles'


const SCREEN_WIDTH= Dimensions.get('window').width

export default function HomeScreen() {

    const [delivery, setDelivery] = useState(true)
    const [indexCheck, setIndexCheck]= useState("0")

  return (
    <View style={styles.container}>
        <Homeheader />
            <ScrollView 
            stickyHeaderIndices={[0]}
            showsVerticalScrollIndicator={false}
            >
            <View style={{backgroundColor:colors.cardbackground, paddingBottom: 5}}>
            <View style={{marginTop: 10, flexDirection: "row", justifyContent:"center", }}>
                <TouchableOpacity
                onPress={()=>{
                    setDelivery(true)
                }}
                >
                    <View style={{...styles.deliveryButton,backgroundColor: delivery? colors.buttons : colors.grey5, }}>
                            <Text style={styles.deliveryText}>Delivery</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={()=>{
                    setDelivery(false)
                }}
                >
                    <View style={{...styles.deliveryButton,backgroundColor: delivery? colors.grey5 : colors.buttons,marginLeft: 20, }}>
                            <Text style={styles.deliveryText}>Pickup</Text>
                    </View>
                </TouchableOpacity>
                </View>       
        </View>

        <View style={styles.filterView}>
        <View style={styles.addressView}>
                <View style={{flexDirection:"row"}}>
                    <Icon 
                    type='material-community'
                    name= "map-marker"
                    color = {colors.grey1}
                    size={26}
                    />
                    <Text style={{marginLeft: 5}}>22 Okhroumi</Text>
                </View>

                <View style={styles.clockView}>
                    <Icon 
                    type='material-community'
                    name= "clock-time-four"
                    color = {colors.grey1}
                    size={26}
                    />
                    <Text style={{marginLeft: 5}}>Now</Text>
                </View>
                 </View>
                 <View>
                 <Icon 
                    type='material-community'
                    name= "tune"
                    color = {colors.grey1}
                    size={26}
                    />
                 </View>
            </View>

            <View style={{backgroundColor:colors.grey5, paddingVertical: 2}}>
                <Text  style={styles.headerText}>Categories</Text>
            </View>

            <View>
                <FlatList 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={filterData}
                keyExtractor={(item)=> item.id}
                extraData={indexCheck}
                renderItem={({item, index})=>(
                        <Pressable
                        onPress={()=>{
                            setIndexCheck(item.id)
                        }}
                        >
                            <View style={indexCheck=== item.id ? {...styles.smallCardSelected} : {...styles.smallCard}}>
                                <Image 
                                style={{height:60, width:60, borderRadius: 30,}}
                                source={item.image}
                                />
                                 <View>
                                <Text style={indexCheck === item.id ? 
                                  {...styles.smallCardTextSelected}: {...styles.smallCardText}}>{item.name}</Text>
                            </View>

                            </View>
                           
                        </Pressable>
                )}
                />
            </View>

            <View style={{backgroundColor:colors.grey5, paddingVertical: 2}}>
                <Text  style={styles.headerText}>Free Delivery Now</Text>
            </View>
                                        {/* countdown counter */}
            <View style={{flexDirection:"row", alignItems:"center"}}>
                <Text style={{marginLeft: 15, fontSize: 16, marginTop:-10, marginRight: 5}}>Options Changing in</Text>
                <CountDown
                until={3600}
                size={14}
                digitStyle={{backgroundColor: colors.lightgreen}}
                digitTxtStyle={{color: colors.cardbackground}}
                timeToShow={['M','S']}
                timeLabels={{m:"Min", s: 'Sec'}}
                />
            </View>
            
            <View>
                <FlatList 
                style={{marginTop: 10,marginBottom: 10}}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={restaurantData}
                keyExtractor={(item, index)=> index.toString()}

                renderItem={({item})=>(
                    <View style={{marginRight: 5}}>
                        <FoodCard 
                        screenWidth={SCREEN_WIDTH* 0.8}
                        images= {item.images}
                        restaurantName ={item.restaurantName}
                        farAway={item.farAway}
                        businessAddress={item.bussinessAddress}
                        averageReveiew={item.averageReviews}
                        numberOfReview={item.numberOfReviews}
                          />
                    </View>
                )}
                />
            </View>
            <View style={{backgroundColor:colors.grey5, paddingVertical: 2}}>
                <Text  style={styles.headerText}>Promotion Available</Text>
            </View>
            
            <View>
                <FlatList 
                style={{marginTop: 10,marginBottom: 10}}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={restaurantData}
                keyExtractor={(item, index)=> index.toString()}

                renderItem={({item})=>(
                    <View style={{marginRight: 5}}>
                        <FoodCard 
                        screenWidth={SCREEN_WIDTH* 0.8}
                        images= {item.images}
                        restaurantName ={item.restaurantName}
                        farAway={item.farAway}
                        businessAddress={item.bussinessAddress}
                        averageReveiew={item.averageReviews}
                        numberOfReview={item.numberOfReviews}
                          />
                    </View>
                )}
                />
            </View>

            {/* restaurant in your area */}
            <View style={{backgroundColor:colors.grey5, paddingVertical: 2}}>
                <Text  style={styles.headerText}>Resturants Available in Your Area</Text>
            </View>
            <View style={{width:SCREEN_WIDTH, paddingTop: 10}}>
                {
                    restaurantData.map(item=>(
                        <View key={item.id} style={{paddingBottom: 20}}>
                        <FoodCard 
                        screenWidth={SCREEN_WIDTH* 0.95}
                        images= {item.images}
                        restaurantName ={item.restaurantName}
                        farAway={item.farAway}
                        businessAddress={item.bussinessAddress}
                        averageReveiew={item.averageReviews}
                        numberOfReview={item.numberOfReviews}
                          />
                        </View>
                    ))
                }

            </View>
            

        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    deliveryButton: {
        paddingHorizontal: 20,
        borderRadius: 15,
        paddingVertical: 5,
    },
    deliveryText:{
        marginLeft: 5,
        fontSize: 16,
    },
    filterView:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
        marginTop: 10,
        marginHorizontal:10,
        marginVertical:10,
    },
    clockView:{flexDirection:"row",
    alignItems:'center',
    backgroundColor: colors.cardbackground,
    borderRadius:15,
    marginLeft: 20,
    paddingHorizontal: 5,
    marginRight: 20
},
addressView: {
    flexDirection:"row",
    marginLeft: 20,
    backgroundColor: colors.grey5, 
    borderRadius: 15, 
    paddingVertical:3, 
    paddingLeft: 10,
    paddingTop:5, 
    paddingBottom: 5,
    alignItems:"center",
    paddingHorizontal: 20
},headerText:{
    color:colors.grey1,
    fontSize: 22,
    fontWeight:"bold",
    paddingLeft: 10
},
smallCard:{
    borderRadius: 30,
    backgroundColor: colors.grey5,
    justifyContent: "center",
    alignItems:"center",
    padding: 5,
    width: 80,
    margin: 10,
    height: 100
},
smallCardSelected:{
    borderRadius: 30,
    backgroundColor: colors.buttons,
    justifyContent: "center",
    alignItems:"center",
    padding: 5,
    width: 80,
    margin: 10,
    height: 100
},
smallCardTextSelected:{
    fontWeight: "bold",
    color: colors.cardbackground
},
smallCardText:{
    fontWeight: "bold",
    color: colors.grey2
}


})