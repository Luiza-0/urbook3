import { createNativeStackNavigator } from "@react-navigation/stack";
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";

const AppRoute = () => {
const Stack = createNativeStackNavigator();

<NavigationContainer>
        <Stack.Navigator initialRouteName="Initial">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Initial" component={Initial} />
          <Stack.Screen name="DetalhesLivro" component={DetalhesLivro} />   
        </Stack.Navigator>
</NavigationContainer>

}

export default AppRoute;