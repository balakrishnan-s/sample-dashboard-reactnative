import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  SectionList,
} from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const menuList = [
  {
    title: 'Dashboards',
    data: [
      { "name": "Dashboard", "enabled": false, "screen": "Home" },
      { "name": "Blogs", "enabled": false, "screen": "Blogs" }
    ],
  }
  
];

const CustomDrawer = (props) => {

  const navigation = useNavigation();

  return (

    <DrawerContentScrollView {...props} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        {/* 1A2155 */}
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
                onPress={() => { item.enabled && navigation.navigate(item.screen, { "userId": props.user.id ? props.user.id : 1 }) }}
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

const styles = StyleSheet.create({
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#140c5b',
  },
  container: {
    flex: 1,
  },
  bannerImage: {
    flex: 1,
    objectFit: 'contain',
    alignSelf: 'flex-start'
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 16,

  },
  liveMetrics: {
    width: '80%',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#6AC5FE',
    marginTop: 10,
    alignItems: 'center',
  },
  drawerItemLabel: {
    fontWeight: 'bold',
    padding: 0,
    marginLeft: -20,
    color: '#140c5b',
  },
  drawerItemLabelDisabled: {
    fontWeight: 'bold',
    padding: 0,
    color: 'grey',
    marginLeft: -20
  },
  item: {
    backgroundColor: '#f9c2ff',
    paddingHorizontal: 16,
    paddingVertical: 0,
    marginVertical: 4,
  },
  header: {
    color: '#FFFFFF',
    fontSize: 16,
    backgroundColor: '#140c5b',
    paddingHorizontal: 8,
    paddingVertical: 4
  },
  title: {
    fontSize: 18,
  },

  sectionList: {
    marginHorizontal: 8,
    marginTop: 16,
    marginBottom: 8
  },
  profileImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
});

export default CustomDrawer;
