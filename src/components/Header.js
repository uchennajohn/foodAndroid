

import { View, Text, Dimensions, StyleSheet } from 'react-native'
import { colors, parameters } from '../global/styles'
import React from 'react'
import { Icon } from 'react-native-elements'

const Header = ({title, type, navigation}) => {
  return (
    <View style={styles.header}>
      <View style={{marginLeft: 15}}>
        <Icon 
        type='material-community'
        name={type}
        color={colors.headerText}
        size={28}
        onPress={()=>{navigation.goBack()}}
        />
      </View>

      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: colors.buttons,
        flexDirection:"row",
        height: parameters.headerHeight
    },
    headerText:{
        color: colors.headerText,
        fontSize: 22,
        fontWeight:"bold",
        marginLeft: 30
    }
})

export default Header