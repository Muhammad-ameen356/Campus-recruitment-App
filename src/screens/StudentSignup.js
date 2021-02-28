import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, Button, SafeAreaView, ScrollView } from 'react-native'
import { TextInput, TouchableOpacity,} from 'react-native-gesture-handler';
import database from '@react-native-firebase/database';


function StudentSignup (props){
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [contact, setContact] = useState("");
    const [college, setCollege] = useState("");
    const [mark, setMark] = useState("");
    const [passed, setPassed] = useState("");


    const save_data = () =>{
          //Check for the Name TextInput
          if (!fullname.trim()) {
            alert('Please Enter Name');
            return;
          }
          //Check for the Email TextInput
          if (!email.trim()) {
            alert('Please Enter Email');
            return;
          }
          if (!password.trim()) {
              alert('Please Enter Password');
              return;
          }
          if (!contact.trim()) {
              alert('Please Enter Contact');
              return;
          }
          if (!college.trim()) {
              alert('Please Enter College');
              return;
          }
          if (!mark.trim()) {
              alert('Please Enter Mark');
              return;
          }
          if (!passed.trim()) {
              alert('Please Enter Your Passed Course');
              return;
          }
          else{
              alert("Your Data Store On Firebase Successfully")
          }
        let user = {
            fullname,
            email,
            password,
            contact,
            college,
            mark,
            passed
        }
        // console.log('user===>',user)
        database().ref('/').child('StudentSignUp').push(user)
        
        setFullname('');
        setEmail('');
        setPassword('');
        setContact('');
        setCollege('');
        setMark('');
        setPassed('')
    }
    return(
        <SafeAreaView style={styles.container}>
              <ScrollView style={styles.scrollView} 
              showsVerticalScrollIndicator={false}>


        <View style={styles.container}>
            <Image 
                style={styles.Image}
                source={require('../images/person.png')}
            />
            <TextInput
                style={styles.TextInput1}
                placeholder="Full Name"
                placeholderTextColor="rgba(0, 0, 0, 0.5)" 
                // secureTextEntry={true}
                // placeholderTextAlign="center"
                onChangeText={text => setFullname(text)}
                value={fullname}
            />
            <TextInput
                 style={styles.TextInput1}
                placeholder="Email"
                placeholderTextColor="rgba(0, 0, 0, 0.5)" 
                onChangeText={text => setEmail(text)}
                value={email}
            />
            <TextInput
                 style={styles.TextInput1}
                placeholder="Password"
                placeholderTextColor="rgba(0, 0, 0, 0.5)" 
                onChangeText={text => setPassword(text)}
                value={password}
            />
            <TextInput
                 style={styles.TextInput1}
                placeholder="Phone Number"
                keyboardType='number-pad'
                placeholderTextColor="rgba(0, 0, 0, 0.5)" 
                onChangeText={text => setContact(text)}
                value={contact}
            />
            <TextInput
                 style={styles.TextInput1}
                placeholder="Year In College"
                keyboardType='number-pad'
                placeholderTextColor="rgba(0, 0, 0, 0.5)" 
                onChangeText={text => setCollege(text)}
                value={college}
            />
            <TextInput
                 style={styles.TextInput1}
                placeholder="Total marks / 1100"
                keyboardType='number-pad'
                placeholderTextColor="rgba(0, 0, 0, 0.5)" 
                onChangeText={text => setMark(text)}
                value={mark}
            />
            <TextInput
                 style={styles.TextInput1}
                placeholder="Courses Passed / 04"
                keyboardType='number-pad'
                placeholderTextColor="rgba(0, 0, 0, 0.5)" 
                onChangeText={text => setPassed(text)}
                value={passed}
            />
            <TouchableOpacity
                style={styles.button1}
                onPress={save_data}
            >
            <Text style={styles.buttonText1}>Sign Up</Text>
            </TouchableOpacity>
            
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
        // backgroundColor:'#07C0C6',
},
      TextInput1:{
        height: 50,
        width:300,
        borderColor: 'black',
        borderBottomWidth:2,
        borderBottomColor: '#07C0C6',
        borderTopWidth:0,
        borderLeftWidth:0,
        borderRightWidth:0,
        fontSize: 20,
        marginTop:20,
},
button1:{
    marginTop:20,
    alignItems: "center",
    justifyContent:'center',
    backgroundColor: "#004B81",
    width:200,
    height:43,
    borderRadius:50,
    marginBottom:20,
},
buttonText1:{
fontSize:17,
textTransform:'uppercase',
fontWeight:'bold',
color:'white',
},
Image:{
    width:100,
    height:100,
    marginBottom:20,
    marginTop:20,
},
})

export default StudentSignup;