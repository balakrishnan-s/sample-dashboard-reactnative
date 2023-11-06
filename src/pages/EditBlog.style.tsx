import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 16,
      padding: 8
    },
    title: {
      fontSize: 20,
      color: '#000000'
    },
    section: {
      marginBottom: 20
    },
    input: {
      borderColor: '#gray',
      borderWidth: 1,
      paddingHorizontal: 3,
      paddingVertical: 5
    },
    buttonContainer: {
      flexGrow: 1,
      justifyContent: 'flex-end',
      marginBottom: 16,
    },
    button: {
      borderWidth: 1,
      height: 40,
      borderRadius: 5,
      backgroundColor: '#140c5b',
      borderColor: '#140c5b',
      justifyContent: 'center',
      alignItems: 'center'
    },
    submitText: {
      color: '#fff',
      fontSize: 15,
      fontWeight: 'bold'
    },
  });
