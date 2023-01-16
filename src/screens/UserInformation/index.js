import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import UpDown from 'react-native-vector-icons/Entypo';
import UserInfo from '../../components/UserInfo';
import UserInfoSecond from '../../components/UserInfoSecond'

export default function index(props) {
  const [arrowStatus, setarrowStatus] = useState(true);

  return (
    <View style={{flex: 1, backgroundColor: ''}}>
      <View
        style={{
          height: 60,
          width: '100%',
          backgroundColor: 'darkblue',
          flexDirection: 'row',
          elevation: 2,
        }}>
        <TouchableOpacity
        onPress={()=>{
          props.navigation.goBack()
        }}
          activeOpacity={0.7}
          style={{
            height: 50,
            width: '17%',
            justifyContent: 'center',
            marginLeft: 12,
            marginTop:5
          }}>
          <Ionicons name={'chevron-back-outline'} size={32} color={'white'} />
        </TouchableOpacity>

        <View
          style={{
            height: 50,
            width: '83%',
            backgroundColor: '',
            justifyContent: 'center',
            marginLeft: 22,
            marginTop:5

          }}>
          <Text style={{fontSize: 18, fontFamily:'Montserrat-Meduim', color: 'white'}}>
            Beneficiary Information
          </Text>
        </View>
      </View>

      <View style={{flex: 1, backgroundColor: ''}}>
        <View
          style={{
            height: 40,
            width: '95%',
            backgroundColor: 'white',
            alignSelf: 'center',
            marginTop: 10,
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTopRightRadius: 8,
            borderTopLeftRadius: 8,
            flexDirection: 'row',
            elevation:5
          }}>
          <Text
            style={{
              fontSize: 15,
              color: 'darkblue',
              fontWeight: '500',
              marginLeft: 15,
              fontFamily:'Montserrat-Regular'
            }}>
            Personal Information
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              setarrowStatus(!arrowStatus);
            }}>
            <UpDown
              name={arrowStatus ? 'chevron-up' : 'chevron-down'}
              size={22}
              style={{marginRight: 10}}
              color="darkblue"
            />
          </TouchableOpacity>
        </View>

        {arrowStatus == true && (
        <View
          style={{
            minheight: 300,
            width: '95%',
            backgroundColor: 'white',
            alignSelf: 'center',
            marginTop: 2,
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomRightRadius: 8,
            borderBottomLeftRadius: 8,
            elevation:5

          }}>
          <UserInfo Head="First Name" Info="Shiv" Main="true" />
          <UserInfo Head="Last Name" Info="CS" />
          <UserInfoSecond
          Head="Date of Birth" InfoIn="09/09/1999" InfoOut="0*/0*/19**"
          />
          <UserInfoSecond
          Head="Work Email Id" InfoIn="shivcv@immilytics.com" InfoOut="sh****@immilytics.com"
          
          />
          <UserInfo Head="Personal Email Id" Info="shiv@immilytics.com" />
          <UserInfo Head="Phone Number" Info="404-353-5306" />
          <UserInfo Head="Address Line 1" Info="1000 Test Circle" />
          <UserInfo Head="Address Line 2" Info="Test Line 2" />
          <UserInfo Head="City" Info="Cumming" />
          <UserInfo Head="State" Info="GA" />
          <UserInfo Head="Zip" Info="30041" Ends="true" />
        </View>
        )}
      </View>
    </View>
  );
}
