import React from 'react';
import {
  Text,
  View,
  Image, 
  SectionList,
} from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

import { styles } from './Drawer.style';

const menuList = [
  {
    title: 'Dashboards',
    data: [
      { "name": "Dashboard", "enabled": false, "screen": "Home" },
      { "name": "Blogs", "enabled": false, "screen": "Blogs" }
    ],
  }

];

const Drawer = (props: any) => {

  const navigation = useNavigation();

  return (

    <DrawerContentScrollView {...props} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={{ height: 100, backgroundColor: '#FFFFFF', }}>
          <Image
            source={require('../images/qdb.png')}
            style={styles.bannerImage}
          />
        </View>
        <View style={styles.profileContainer}>
          <Image
            source={require('../images/profile.jpg')}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Good Morning</Text>
          <Text style={styles.profileName}>{props.user ? props.user.name : 'NA'}</Text>
        </View>
        <View style={styles.sectionList}>
          <SectionList
            sections={menuList}
            keyExtractor={(item, index) => item.name + index}
            renderItem={({ item, index }) => (
              <DrawerItem
                key={index}
                label={() => (
                  <View >
                    <Text
                      style={item.enabled ? styles.drawerItemLabel : styles.drawerItemLabelDisabled}>
                      {item.name}
                    </Text>
                  </View>
                )}
                icon={() => (<Icon name={item.icon} size={30} color={item.enabled ? "#1e90ff" : "grey"} />)}
                onPress={() => {
                  item.enabled
                  && navigation.navigate(item.screen, { "userId": props.user.id ? props.user.id : 1 })
                }}
              />
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.header}>{title}</Text>
            )}
            scrollEnabled={false}
          />
        </View>
      </View>

    </DrawerContentScrollView>
  );
};

export default Drawer;