import * as React from 'react';
import {Image, StyleSheet, View, Text,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StudentSignup from "../screens/StudentSignup";
import CompanySignup from "../screens/CompanySignup";
import User from "../screens/User";
import Jobs from "../screens/Jobs";
import Employes from "../screens/Employes";



const Stack = createStackNavigator();

// ==============SPLASH SCREEN==============

function splashScreen({navigation}){
  setTimeout(() => {
   navigation.replace('User');
  }, 3500);
  return(
    <View style={styles.container}>

      <View style={styles.view1}>
        <Image 
        style={styles.Image}
        source={require('../images/recruitment-icon-9.png')}/>
      </View>
      <View style={styles.view2}>
        <Text style={styles.Text1}>
         C R
        </Text>
        <Text style={styles.Text2}>
          campus 
        </Text>
        <Text style={styles.Text3}>
          recruitment 
        </Text>
      </View>
    </View>
  )
}
// =========================




function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator style={{alignItems: 'center', justifyContent: 'center' }}>
          <Stack.Screen options={{headerShown:false,}} name="splashScreen" component={splashScreen} />

         <Stack.Screen
            options={{
              headerShown:false,
            }} name="User" component={User} />

         <Stack.Screen 
            options={{
              title: 'register your self',
              headerStyle: {
                backgroundColor: '#004B81',
                height:60,               
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                marginRight:50,
                fontSize:18,
                textTransform:"uppercase",
                flex:2,
                textAlign:'center',
              },
              
              
            }} name="StudentSignup" component={StudentSignup} />

         <Stack.Screen 
            options={{
             title: 'register your company',
              headerStyle: {
                backgroundColor: '#004B81',
                height:60,               
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                marginRight:50,
                fontSize:18,
                textTransform:"uppercase",
                flex:2,
                textAlign:'center',
              },
            }} name="CompanySignup" component={CompanySignup} />

          <Stack.Screen 
          options={{
             title: 'Golden Jobs',
              headerStyle: {
                backgroundColor: '#004B81',
                height:60,               
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                marginRight:50,
                fontSize:20,
                textTransform:"uppercase",
                flex:2,
                textAlign:'center',
              },
            }}
          name='Jobs' component={Jobs} />

          <Stack.Screen 
          options={{
             title: 'Hard Workers',
              headerStyle: {
                backgroundColor: '#004B81',
                height:60,               
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                marginRight:50,
                fontSize:20,
                textTransform:"uppercase",
                flex:2,
                textAlign:'center',
              },
            }}
          name='Employes' component={Employes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#07C0C6',
  },
  Image:{
    width:150,
    height:150,
  },
  Text1:{
    marginTop: -150,
    fontSize: 60,
    color: 'white',
    fontFamily:'Acme-Regular',


  },
  Text2:{
    color:"white",
    fontSize:40,
    textTransform: 'uppercase',
    color: 'black'
  },
  Text3:{
    color:"white",
    fontSize:40,
    textTransform: 'uppercase',
  },
  view1:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  view2:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    display: 'flex',
  }

})
  
export default AppNavigation;