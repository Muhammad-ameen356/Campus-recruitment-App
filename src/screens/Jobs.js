import React from 'react';
import { Text, View, StyleSheet } from 'react-native'


function Jobs (){
    return(
        <View style={styles.container}>
        <View></View>
            <Text style={styles.text1}>
               Name: Ameen 
            </Text>
            <Text style={styles.text1}>
                Web And App designer
            </Text>
            <Text style={styles.text1}>
                Contact : 0312-2859225
            </Text>
            <Text style={styles.text1}>
                From : Saylani
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
      },
    //   text1:{
    //     width:'',
    //     height:70,
    //   }
})

export default Jobs;