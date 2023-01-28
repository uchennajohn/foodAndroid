import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BusinessConsoleScreen = () => {
  return (
    <View style={styles.container}> 
      <Text>BusinessConsoleScreen</Text>
    </View>
  )
}

export default BusinessConsoleScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }

})