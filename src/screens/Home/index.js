import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/AntDesign';
import Iconuser from 'react-native-vector-icons/FontAwesome';

export default function index(props) {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          height: 60,
          width: '100%',
          backgroundColor: 'white',
          flexDirection: 'row',
          elevation: 2,
        }}>
        <TouchableOpacity
        onPress={()=>{
          props.navigation.openDrawer();
        }}
          activeOpacity={0.7}
          style={{
            height: 50,
            width: '15%',
            backgroundColor: '',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop:9
          }}>
          <Icon name={'menuunfold'} size={28} color={'darkblue'} />
        </TouchableOpacity>

        <View
          style={{
            height: 50,
            width: '70%',
            backgroundColor: '',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop:9

          }}>
          <Text style={{fontSize: 20, fontFamily:'Montserrat-Medium', color: 'darkblue'}}>
            Travel Trio
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            height: 50,
            width: '15%',
            backgroundColor: '',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop:9

          }}>
          {/* <Iconuser name={'user-circle'} size={28} color={'darkblue'} /> */}
          <Image
            source={require('../../assets/images/pro.jpeg')}
            style={{height: 30, width: 30, borderRadius: 15}}
          />
        </TouchableOpacity>
      </View>

      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:18,fontFamily:'Montserrat-BlackItalic'}}>Home Screen</Text>
      </View>
    </View>
  );
}
