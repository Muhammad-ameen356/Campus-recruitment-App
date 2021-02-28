import React, {useState} from 'react';
import { Text, View, StyleSheet, Image,Button, ScrollView, SafeAreaView, onChangeText} from 'react-native'
import { TextInput, TouchableOpacity,} from 'react-native-gesture-handler';
import database from '@react-native-firebase/database';




function User (props){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const save_data = () =>{
        let user = {
            email,
            password
        }
        // console.log('user===>',user)
        database().ref('/').child('users').push(user)
        setEmail("");
        setPassword("");
    }
    

    
    return(
        <SafeAreaView style={styles.container}>
              <ScrollView style={styles.scrollView}
                showsVerticalScrollIndicator={false}>

        <View style={styles.container}>
            <Image 
                style={styles.Image}
                source={require('../images/Login.png')}
            />
            <TextInput
                style={styles.TextInput1}
                placeholder="Enter Your Email"
                placeholderTextColor="white" 
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
             <TextInput
                style={styles.TextInput2}
                placeholder="Password"
                placeholderTextColor="white" 
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                value={password}
            />
            <TouchableOpacity
                style={styles.button1}
                onPress={save_data}
            >
            <Text style={styles.buttonText1}>Login</Text>
            </TouchableOpacity>
            <Text style={{color:'white', marginTop:10,fontSize:16,}}>
                Forgot Password
                
            </Text>
            <Text style={{color:'black', marginTop:10, fontSize: 17, color:'#004B81'}}>
                OR
            </Text>
            <TouchableOpacity
                style={styles.button2}
                // onPress={onPress}
                onPress={()=>props.navigation.navigate("StudentSignup")}
            >
            <Text 
            style={styles.buttonText2} 
            >Sign Up as a Student</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button3}
                // onPress={onPress}
                onPress={()=>props.navigation.navigate("CompanySignup")}
            >
            <Text style={styles.buttonText3}>Sign Up as a Company</Text>
            </TouchableOpacity>
            {/* <Text style={styles.bottomborder}>
                _____________________
            </Text> */}
        </View>
        </ScrollView>
</SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#07C0C6',
},
      TextInput1:{
        height: 50,
        width:300,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius:50, 
        textAlign:'center',
        fontSize: 20,
},
      TextInput2:{
        height: 50,
        marginTop: 20,
        width:300,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius:50,
        textAlign:'center',
        fontSize: 20,
},
      button1:{
        marginTop:20,
        alignItems: "center",
        justifyContent:'center',
        backgroundColor: "#004B81",
        width:200,
        height:43,
},
buttonText1:{
    fontSize:17,
    textTransform:'uppercase',
    fontWeight:'bold',
    color:'white',
},
button2:{
    marginTop:20,
    alignItems: "center",
    justifyContent:'center',
    backgroundColor: "#3887BF",
    width:250,
    height:43,
    borderRadius:50,
},
buttonText2:{
    fontSize:18,
    fontWeight:'bold',
    color:'white',
    fontFamily:'Acme-Regular'
},
button3:{
    marginTop:20,
    alignItems: "center",
    justifyContent:'center',
    backgroundColor: "#3887BF",
    width:250,
    height:43,
    borderRadius:50,
},
buttonText3:{
    fontSize:18,
    fontWeight:'bold',
    color:'white',
},
Image:{
    width:100,
    height:100,
    marginBottom:20,
    marginTop:25,
},
// bottomborder:{
//     fontWeight:'bold',
//     fontSize:16,
//     color:'white',
//     borderRadius:50,
// }
})

export default User;








// TeMPLETE 


// import React from 'react';
// import { Text, View, StyleSheet } from 'react-native'


// function User (){
//     return(
//         <View style={styles.container}>
//             <Text>
//                 asdas
//             </Text>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         justifyContent:'center',
//         alignItems:'center',
//       },
// })

// export default User;