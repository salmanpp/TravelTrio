import React from 'react';

import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';

import {TextInput} from 'react-native-paper';

import Snackbar from 'react-native-snackbar';

const envelop = require('../../assets/images/envelope.png');
const eyehide = require('../../assets/images/eyehide.png');
const unhideeye = require('../../assets/images/unhideeye.png');

export default function index(props) {
  const [emails, setemails] = React.useState();
  const [password, setpassword] = React.useState();
  const [securepassword, setsecurepassword] = React.useState(true);
  return (
    <KeyboardAvoidingView
      enabled
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flex: 1}}>
          <Text
            style={{
              fontSize: 27,
              marginTop: '20%',
              marginLeft: 40,
              color: 'black',
              fontFamily:'Montserrat-Bold'
            }}>
            Welcome Back!
          </Text>

          <Text
            style={{
              fontSize: 13,
              marginTop: 15,
              marginLeft: 40,
              color: 'black',
              fontFamily:'Montserrat-Regular'
            }}>
            Stay signed in with your account to make easier
          </Text>

          <View
            style={{
              height: 220,
              width: '100%',
              backgroundColor: '',
              marginTop: 20,
              alignSelf: 'center',
            }}>
            <Image
              source={require('../../assets/images/iconnobg.png')}
              style={{
                height: 220,
                width: '100%',
                resizeMode: 'cover',
                alignSelf: 'center',
                marginTop: 10,
              }}
            />
          </View>
        </View>
        <View
          style={{
            height: 50,
            width: '80%',
            alignSelf: 'center',
            marginTop: 30,
            backgroundColor: '',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TextInput
            mode="outlined"
            label={'Email / Username'}
            outlineColor={'lightgray'}
            activeOutlineColor={'#00ccff'}
            placeholderTextColor={'lightgray'}
            returnKeyType="next"
            style={{
              width: '100%',
              alignSelf: 'center',
              fontSize: 14,
              height: 50,
              color: 'white',
              backgroundColor: 'white',
              fontFamily:'Montserrat-Medium'
            }}
            value={emails}
            onChangeText={text => setemails(text)}
          />
          <Image
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              position: 'absolute',
              end: 0,
              alignSelf: 'center',
              marginRight: 10,
              overflow: 'hidden',
              resizeMode: 'contain',
            }}
            source={envelop}
          />
        </View>

        <View
          style={{
            height: 50,
            width: '80%',
            alignSelf: 'center',
            marginTop: 40,
            backgroundColor: '',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TextInput
            mode="outlined"
            label={'Password'}
            outlineColor={'lightgray'}
            activeOutlineColor={'#00ccff'}
            placeholderTextColor={'lightgray'}
            secureTextEntry={securepassword ? true : false}
            style={{
              width: '100%',
              alignSelf: 'center',
              fontSize: 14,
              height: 50,
              color: 'white',
              backgroundColor: 'white',
              fontFamily:'Montserrat-Medium'

            }}
            value={password}
            onChangeText={text => setpassword(text)}
          />
          <Pressable
            style={{
              position: 'absolute',
              end: 0,
              width: 20,
              height: 20,
              alignSelf: 'center',
              marginRight: 10,
            }}
            onPress={() => {
              setsecurepassword(!securepassword);
              console.log('status is', securepassword);
            }}>
            <Image
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                overflow: 'hidden',
                resizeMode: 'contain',
                tintColor: 'gray',
              }}
              source={securepassword == true ? eyehide : unhideeye}
            />
          </Pressable>
        </View>

        <View style={{height:50, backgroundColor: '',marginTop:50,justifyContent:'center',alignItems:'center'}}>
          <TouchableOpacity 
          onPress={()=>{
            if(emails==null&&password==null){
              Snackbar.show({
                text: 'Please enter all fields',
                duration: Snackbar.LENGTH_INDEFINITE,
                action: {
                  text: 'Ok',
                  textColor: 'red',
                  onPress: () => { /* Do something. */ },
                },
              })
            }
            else {
              console.log("Done");
              props.navigation.navigate("Home")
            }
           
          }}
          style={{height:50,width:"80%",backgroundColor:'#00ccff',borderRadius:5,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:18,color:"white",fontFamily:'Montserrat-Bold'}}>Login</Text>
          </TouchableOpacity>

        </View>
        <TouchableOpacity 
        activeOpacity={0.7}
        style={{height:30,width:"100%",backgroundColor:'',marginTop:20,justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontFamily:'Montserrat-Medium'}}>Don't Have an account? <Text style={{fontFamily:'Montserrat-Bold',color:'darkblue'}}>SignUp</Text></Text>
        </TouchableOpacity>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}
