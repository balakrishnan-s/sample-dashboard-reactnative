import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageBackground: { padding: 20 },
  footerContainer: {
    justifyContent: 'flex-end',
    flexGrow: 1
  },
  profileImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginBottom: 10
  },
  profileTitle: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
    marginBottom: 5,
  },
  profileCoins: {
    color: '#fff',
    fontFamily: 'Roboto-Regular',
    marginRight: 5,
  },
  drawerItemList: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10
  },
  touchableContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc'
  },
  touchable: {
    paddingVertical: 15
  },
  iconsView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconsText: {
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
    marginLeft: 5,
  },
});
