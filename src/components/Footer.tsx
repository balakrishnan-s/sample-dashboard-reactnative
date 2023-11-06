import React from 'react';
import {View, StyleSheet, Button, TouchableOpacity, Text} from 'react-native';

/**
 * Footer with 'Submit' and 'Cancel' Button.
 * @param {*} props
 */

interface FooterProps {
  cancelTitle: string;
  submitTitle: string;
  onCancel: () => void;
  onSubmit: () => void;
}
const Footer: React.FC<FooterProps> = (props)=> {

  const { cancelTitle, submitTitle } = props
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.buttonCancel}
          onPress={() => props.onCancel()}>
          <Text style={styles.cancelText}>
            {cancelTitle ? cancelTitle : 'Cancel'}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.buttonSubmit}
          onPress={() => props.onSubmit()}>
          <Text style={styles.submitText}>{submitTitle ? submitTitle : 'Submit'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Footer;
