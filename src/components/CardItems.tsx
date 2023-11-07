import React from 'react';
import { View } from 'react-native';

import { styles } from './CardItem.style';

const Card = (props: any) => {
  return <View style={{ ...styles.card, ...props.style }}>{props.children}</View>;
};

export default Card;