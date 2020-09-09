import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from './pages/Home';
import History from './pages/History';
import Help from './pages/Help';

const Routes = () => {
  const { Navigator, Screen } = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Home"
        tabBarOptions={{
          style: {
            elevation: 0,
            shadowOpacity: 0,
            height: 64,
          },
          tabStyle: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          },
          iconStyle: {
            flex: 0,
            width: 20,
            height: 20,
          },
          labelStyle: {
            // fontFamily: 'Archivo_700Bold',
            fontSize: 13,
            marginTop: 5,
          },
          activeTintColor: '#1DA1F2',
          inactiveTintColor: 'gray',
        }}
      >
        <Screen
          name="History"
          component={History}
          options={{
            tabBarIcon: ({ color, size, focused }) => {
              return (
                <Icon
                  name="history"
                  size={size}
                  color={focused ? '#1DA1F2' : 'gray'}
                />
              );
            },
          }}
        />
        <Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size, focused }) => {
              return (
                <Icon
                  name="home"
                  size={size}
                  color={focused ? '#1DA1F2' : 'gray'}
                />
              );
            },
          }}
        />
        <Screen
          name="Help"
          component={Help}
          options={{
            tabBarIcon: ({ color, size, focused }) => {
              return (
                <Icon
                  name="help"
                  size={size}
                  color={focused ? '#1DA1F2' : 'gray'}
                />
              );
            },
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
