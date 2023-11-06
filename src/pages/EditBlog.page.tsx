import axios from 'axios';
import React, { useState} from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import LoadingIndicator from '../components/LoadingIndicator';
import { RootStackParamList } from '../../App';

import { styles } from './EditBlog.style'

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'EditBlog'>;

const EditBlog = ({ route, navigation }: NavigationProps) => {

  const { data } = route.params;
  const [title, setTitle] = useState(data.title);
  const [body, setBody] = useState(data.body);
  const [isLoading, setIsLoading] = useState(false);

  
  console.log(data);
  

  const titleChangeHandler = (text: string )=> {
      setTitle(text);
  }

  const bodyChangeHandler = (text: string ) => {
    setBody(text);
  }

  const onSave = async () => {
    setIsLoading(true);
    const payload = {
      'id': data.id,
      'userId': data.userId,
      'title': title ? title : data.title,
      'body': body ? body : data.body
    };
    
    const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${data.userId}`, 
          JSON.stringify(payload),
          { headers: {'Content-Type': 'application/json'} });
      
          setIsLoading(false);
      if (response.status == 200) {
          Alert.alert('Alert Message', 'Post updated successfully', [
              {
                  text: 'OK',
                  onPress: () => {
                      navigation.navigate('Blogs', {"userId": data.userId});
                  },
              },
          ])
      }  
  }
    
  return (
    <View style={styles.container}>
      <LoadingIndicator loading={isLoading}/>
        <View style={styles.section}>
            <Text style={styles.title}>Title</Text>
            <TextInput 
                style={styles.input} 
                multiline={true}
                value={title}
                onChangeText={(text) => titleChangeHandler(text)}
            /> 
        </View>
        <View>
            <Text style={styles.title}>Body</Text>
            <TextInput 
                style={styles.input} 
                multiline={true}
                value={body}
                onChangeText={(text) => bodyChangeHandler(text)}
            /> 
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => onSave()}>
                <Text style={styles.submitText}>Save</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default EditBlog;
