import React from 'react';
import PropTypes from 'prop-types';
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
        initialRouteName="Início"
        animation="fade"
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
          activeTintColor: '#2b80ff',
          inactiveTintColor: 'gray',
        }}
      >
        <Screen
          name="Histórico"
          component={History}
          options={{
            tabBarIcon: ({ color, size, focused }) => {
              return (
                <Icon
                  name="history"
                  size={size}
                  color={focused ? '#2b80ff' : 'gray'}
                />
              );
            },
          }}
        />
        <Screen
          name="Início"
          component={Home}
          options={{
            tabBarIcon: ({ color, size, focused }) => {
              return (
                <Icon
                  name="home"
                  size={size}
                  color={focused ? '#2b80ff' : 'gray'}
                />
              );
            },
          }}
        />
        <Screen
          name="Ajuda"
          component={Help}
          options={{
            tabBarIcon: ({ color, size, focused }) => {
              return (
                <Icon
                  name="help"
                  size={size}
                  color={focused ? '#2b80ff' : 'gray'}
                />
              );
            },
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

Routes.propTypes = {
  color: PropTypes.any.isRequired,
  size: PropTypes.any.isRequired,
  focused: PropTypes.any.isRequired,
};

export default Routes;
