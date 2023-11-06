import 'react-native-gesture-handler'
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import axios from 'axios';

import Home from './src/pages/Home';
import Blogs from './src/pages/Blogs.page';
import CustomDrawer from './src/components/CustomDrawer';
import EditBlog from './src/pages/EditBlog.page';
import { User } from './src/model/User';

type Blog = {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export type RootDrawerParamList = {
  Home: undefined;
  Blogs: { userId: number };
  EditBlog: { data: Blog };
};

export type RootStackParamList = {
  Root: RootDrawerParamList;
  EditBlog: { data: Blog };
  Blogs: { userId: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootDrawerParamList>();

function App(): JSX.Element {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const getuser = async () => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${Math.floor(Math.random() * 10)}`);
      setUser(new User(response.data.id, response.data.name))
    }
    getuser();

  }, []);

  const DrawerNavigator = () => (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} user={user} />}>
      <Drawer.Screen name='Blogs' component={Blogs} initialParams={{ 'userId': user ? user.id : 1 }} />
      <Drawer.Screen name='Home' component={Home} />
    </Drawer.Navigator>
  )

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Root' component={DrawerNavigator} options={{ headerShown: false }} />
        <Stack.Screen name='EditBlog' component={EditBlog} options={{ headerBackTitle: 'Blogs' }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;
