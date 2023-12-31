import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import axios from 'axios';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootDrawerParamList } from '../../App'
import { Blog } from '../model/Blog';

import Card from '../components/CardItems';
import Footer from '../components/Footer';

import { styles } from './Blogs.style';

type NavigationProps = NativeStackScreenProps<RootDrawerParamList, 'Blogs'>;
import { serverURL } from '../const/confg';

const Blogs = ({ route, navigation }: NavigationProps) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const { userId } = route.params;

  useEffect(() => {
    const getBlogs = async () => {
      const response = await axios.get(
        serverURL+`/users/${userId ? userId : 1}/posts`,
      );
      const blogs: Blog[] = [];
      for (const obj of response.data) {
        const blog = new Blog(obj.id, obj.userId, obj.title, obj.body);
        blogs.push(blog);
      }
      setBlogs(blogs);
    };
    getBlogs();
  }, [userId]);

  const onDelete = () => { };

  const onSubmit = (itemIndex: number) => {
    navigation.navigate('EditBlog', { data: blogs[itemIndex] })
  };

  type ItemProps = { title: string, body: string, index: number };

  const Item = ({ title, body, index }: ItemProps) => (
    <Card>
      <View style={styles.cardContainer}>
        <View style={styles.imageView}>
          <Image
            source={require('../images/thumbnail.png')}
            style={styles.dummyImage}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.body}>{body}</Text>
        </View>
      </View>
      <View style={styles.footerContainer}>
        <Footer submitTitle='Edit' cancelTitle='Delete' onCancel={onDelete} onSubmit={() => onSubmit(index)} />
      </View>
    </Card>
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={blogs}
        renderItem={({ item, index }) => <Item title={item.title} body={item.body} index={index} />}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Blogs;
