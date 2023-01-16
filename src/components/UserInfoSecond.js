import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

function userInfoSecond(props) {
  const {Head, InfoIn, Main, Ends, InfoOut} = props;

  const [hideStatus, sethideStatus] = useState(true);

  return (
    <View
      style={{
        height: 30,
        width: '100%',
        backgroundColor: '',
        marginBottom: Ends ? 10 : 0,
        marginTop: Main ? 10 : 0,
      }}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View
          style={{
            minheight: 30,
            width: '48%',
            justifyContent: 'center',
            marginLeft: 10,
            backgroundColor: '',
          }}>
          <Text
            numberOfLines={1}
            style={{
              marginRight: 90,
              fontSize: 12,
              color: 'darkblue',
              fontFamily: 'Montserrat-Regular',
            }}>
            {Head}
          </Text>
        </View>

        <View
          style={{
            height: 30,
            width: '4%',
            backgroundColor: '',
            justifyContent: 'center',
          }}>
          <Entypo name="dots-two-vertical" size={17} color="black" />
        </View>

        <View
          style={{
            height: 30,
            width: '48%',
            justifyContent: 'center',
            backgroundColor: '',
          }}>
          <Text
            numberOfLines={1}
            style={{
              marginRight: 95,
              fontSize: 12,
              color: 'black',
              fontFamily: 'Montserrat-Regular',
            }}>
            {hideStatus ? InfoOut : InfoIn}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          sethideStatus(!hideStatus);
        }}
        style={{
          height: 30,
          width: 30,
          backgroundColor: '',
          position: 'absolute',
          bottom: 0,
          top: 0,
          left: '92%',
          right: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Entypo
          name={hideStatus ? 'eye-with-line' : 'eye'}
          size={15}
          color={'darkblue'}
        />
      </TouchableOpacity>
    </View>
  );
}
export default userInfoSecond;
