import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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