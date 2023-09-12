import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { routes } from '../generated/routes';

const Stack = createNativeStackNavigator();

export interface ICuriousRouterProps {
  initialRoute?: string;
}

export const CuriousRouter: React.FC<ICuriousRouterProps> = ({ initialRoute }) => {
  if (routes.length <= 0) return <></>;
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
        {routes.map((route, index) => (
          <Stack.Screen key={index} name={route.name} component={route.component} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
