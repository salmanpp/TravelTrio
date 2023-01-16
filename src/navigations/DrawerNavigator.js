import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import HomeBody from '../screens/Home/index';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Immigration = require('../assets/images/immigration.png');
const Beneficiary = require('../assets/images/userinfo.jpeg');
const PassTravel = require('../assets/images/passvisa.png');
const Resident = require('../assets/images/resident.png');
const OpenCase = require('../assets/images/case.png');
const ImmigrationContact = require('../assets/images/contact.png');
const QuikLink = require('../assets/images/link.jpg');
const Logout = require('../assets/images/logout.png');

const Drawer = createDrawerNavigator();

function DrawerContent(props) {
  return (
    <View style={{flex: 1, backgroundColor: ''}}>
      <View style={{height: 180, width: '100%', backgroundColor: 'darkblue'}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View
            style={{
              height: 60,
              width: 60,
              borderRadius: 30,
              backgroundColor: '',
              marginLeft: 18,
            }}>
            <Image
              source={require('../assets/images/pro.jpeg')}
              style={{
                height: 60,
                width: 60,
                borderRadius: 30,
                borderWidth: 1,
                borderColor: 'white',
              }}
            />
          </View>
          <View
            style={{
              height: 30,
              width: 30,
              borderRadius: 15,
              position: 'absolute',
              top: 33,
              bottom: 0,
              left: '85%',
              right: 0,
            }}>
            <Ionicons name="settings" size={30} color="#dcdee0" />
          </View>
          <Text
            style={{
              fontSize: 15,
              marginTop: 15,
              marginLeft: 25,
              color: 'white',
              fontFamily: 'Montserrat-Medium',
            }}>
            Shiv C
          </Text>
          <Text
            style={{
              fontSize: 12,
              marginTop: 7,
              marginLeft: 25,
              color: 'white',
              fontFamily: 'Montserrat-Medium',
            }}>
            Shiv@immilityics.com
          </Text>
        </View>
      </View>

      <View style={{flex: 1, backgroundColor: 'white'}}>
        {/* "Immigartion Status" */}
        <TouchableOpacity
          onPress={() => {
            props.navigation.closeDrawer();
          }}
          activeOpacity={0.7}
          style={{
            height: 50,
            width: '95%',
            backgroundColor: 'white',
            marginTop: 20,
            borderBottomWidth: 1,
            borderColor: 'darkblue',
            alignSelf: 'center',
          }}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View
              style={{
                flex: 0.2,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={Immigration} style={{height: 27, width: 27}} />
            </View>
            <View
              style={{
                flex: 0.8,
                backgroundColor: '',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: 'black',
                  fontFamily: 'Montserrat-Regular',
                }}>
                Immigration Status
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* "Beneficiary" */}
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('ProfileInfo');
            props.navigation.closeDrawer();
          }}
          activeOpacity={0.7}
          style={{
            height: 50,
            width: '95%',
            backgroundColor: 'white',
            marginTop: 10,
            borderBottomWidth: 1,
            borderColor: 'darkblue',
            alignSelf: 'center',
          }}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View
              style={{
                flex: 0.2,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={Beneficiary} style={{height: 27, width: 27}} />
            </View>
            <View
              style={{
                flex: 0.8,
                backgroundColor: '',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: 'black',
                  fontFamily: 'Montserrat-Regular',
                }}>
                Beneficiary Information
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* "Passtravelk" */}
        <TouchableOpacity
          onPress={() => {
            props.navigation.closeDrawer();
          }}
          activeOpacity={0.7}
          style={{
            height: 50,
            width: '95%',
            backgroundColor: 'white',
            marginTop: 10,
            borderBottomWidth: 1,
            borderColor: 'darkblue',
            alignSelf: 'center',
          }}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View
              style={{
                flex: 0.2,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={PassTravel} style={{height: 27, width: 27}} />
            </View>
            <View
              style={{
                flex: 0.8,
                backgroundColor: '',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: 'black',
                  fontFamily: 'Montserrat-Regular',
                }}>
                Passport / Visa / Travel
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* "Resident" */}
        <TouchableOpacity
          onPress={() => {
            props.navigation.closeDrawer();
          }}
          activeOpacity={0.7}
          style={{
            height: 50,
            width: '95%',
            backgroundColor: 'white',
            marginTop: 10,
            borderBottomWidth: 1,
            borderColor: 'darkblue',
            alignSelf: 'center',
          }}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View
              style={{
                flex: 0.2,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={Resident} style={{height: 27, width: 27}} />
            </View>
            <View
              style={{
                flex: 0.8,
                backgroundColor: '',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: 'black',
                  fontFamily: 'Montserrat-Regular',
                }}>
                Permanent Resident Status
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* "OPen case" */}
        <TouchableOpacity
          onPress={() => {
            props.navigation.closeDrawer();
          }}
          activeOpacity={0.7}
          style={{
            height: 50,
            width: '95%',
            backgroundColor: 'white',
            marginTop: 10,
            borderBottomWidth: 1,
            borderColor: 'darkblue',
            alignSelf: 'center',
          }}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View
              style={{
                flex: 0.2,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={OpenCase} style={{height: 27, width: 27}} />
            </View>
            <View
              style={{
                flex: 0.8,
                backgroundColor: '',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: 'black',
                  fontFamily: 'Montserrat-Regular',
                }}>
                Open Cases
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* "Contact" */}
        <TouchableOpacity
          onPress={() => {
            props.navigation.closeDrawer();
          }}
          activeOpacity={0.7}
          style={{
            height: 50,
            width: '95%',
            backgroundColor: 'white',
            marginTop: 10,
            borderBottomWidth: 1,
            borderColor: 'darkblue',
            alignSelf: 'center',
          }}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View
              style={{
                flex: 0.2,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={ImmigrationContact}
                style={{height: 27, width: 27}}
              />
            </View>
            <View
              style={{
                flex: 0.8,
                backgroundColor: '',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: 'black',
                  fontFamily: 'Montserrat-Regular',
                }}>
                Immigaration Contact
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* "QUik Link" */}
        <TouchableOpacity
          onPress={() => {
            props.navigation.closeDrawer();
          }}
          activeOpacity={0.7}
          style={{
            height: 50,
            width: '95%',
            backgroundColor: 'white',
            marginTop: 10,
            borderBottomWidth: 1,
            borderColor: 'darkblue',
            alignSelf: 'center',
          }}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View
              style={{
                flex: 0.2,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={QuikLink} style={{height: 27, width: 27}} />
            </View>
            <View
              style={{
                flex: 0.8,
                backgroundColor: '',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: 'black',
                  fontFamily: 'Montserrat-Regular',
                }}>
                Quik Links
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* "Logout" */}
        <TouchableOpacity
          onPress={() => {
            props.navigation.closeDrawer();
            props.navigation.navigate('Login');
          }}
          activeOpacity={0.7}
          style={{
            height: 50,
            width: '95%',
            backgroundColor: 'white',
            marginTop: 10,
            borderBottomWidth: 1,
            borderColor: 'darkblue',
            alignSelf: 'center',
          }}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View
              style={{
                flex: 0.2,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={Logout} style={{height: 27, width: 27}} />
            </View>
            <View
              style={{
                flex: 0.8,
                backgroundColor: '',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: 'black',
                  fontFamily: 'Montserrat-Regular',
                }}>
                Logout
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerType={'slide'}
      drawerPosition="left"
      drawerStyle={{
        backgroundColor: 'white',
        width: windowWidth - 75,
      }}
      initialRouteName={'HomeBody'}
      sceneContainerStyle={{backgroundColor: 'white', margin: 0}}
      screenOptions={{headerShown: false}}
      drawerContent={props => {
        return <DrawerContent {...props} />;
      }}>
      <Drawer.Screen
        name="HomeBody"
        component={HomeBody}
        onClose={() => props.navigation.closeDrawer()}
      />
    </Drawer.Navigator>
  );
}
