import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 8,
    marginVertical: 16
  },
  footerContainer: { 
    justifyContent: 'flex-end', 
    flexGrow: 1 
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageView: {
    paddingHorizontal: 4,
    flex: 0.3
  },
  textContainer: {
    flex: 0.7,
    paddingVertical: 8,
  },
  dummyImage: {
    height: 180,
    width: 120,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  body: {
    marginTop: 8,
    fontSize: 16
  },
});
