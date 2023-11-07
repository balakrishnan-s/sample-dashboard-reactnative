import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { styles } from './Menu.style';

const SidebarMenu = (props: any) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: '#8200d6' }}>
        <ImageBackground
          source={require('../images/images/menu-bg.jpeg')}
          style={styles.imageBackground}>
          <Image
            source={require('../images/images/user-profile.jpg')}
            style={styles.profileImage}
          />
          <Text
            style={styles.profileTitle}>
            John Doe
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={styles.profileCoins}>
              280 Coins
            </Text>
            <FontAwesome5 name="coins" size={14} color="#fff" />
          </View>
        </ImageBackground>
        <View style={styles.drawerItemList}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.touchableContainer}>
        <TouchableOpacity onPress={() => { }} style={styles.touchable}>
          <View style={styles.iconsView}>
            <Ionicons name="share-social-outline" size={22} />
            <Text
              style={styles.iconsText}>
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { }} style={styles.touchable}>
          <View style={styles.iconsView}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={styles.iconsText}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SidebarMenu;