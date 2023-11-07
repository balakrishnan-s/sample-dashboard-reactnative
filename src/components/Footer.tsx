import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import { styles } from './Footer.style';

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

export default Footer;
