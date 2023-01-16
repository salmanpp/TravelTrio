import {View, Text} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

function userInfo(props) {
  const {Head, Info, Main, Ends} = props;
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

        <View style={{height: 30, width: '56%', justifyContent: 'center'}}>
          <Text
            style={{
              marginRight: 95,
              fontSize: 12,
              color: 'black',
              fontFamily: 'Montserrat-Regular',
            }}>
            {Info}
          </Text>
        </View>
      </View>
    </View>
  );
}
export default userInfo;
