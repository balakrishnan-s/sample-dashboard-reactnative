import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5,
    paddingTop: 5,
    backgroundColor: 'white',
  },
  buttons: {
    flex: 0.48,
    padding: 4,
  },
  buttonCancel: {
    backgroundColor: '#140c5b',
    borderColor: '#140c5b',
    borderWidth: 0,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonSubmit: {
    backgroundColor: '#140c5b',
    borderColor: '#140c5b',
    borderWidth: 0,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },

  submitText: {
    color: '#ffffff',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight:'bold'
  },

  cancelText: {
    fontSize: 12,
    color: '#ffffff',
    fontStyle: 'normal',
    fontWeight:'bold'
  },
});
