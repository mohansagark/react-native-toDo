import {View, Text, Linking} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/dist/EvilIcons';
Icon.loadFont();

const Info = ({data}) => {
  return (
    <View>
      <Text>Name: {data?.name}</Text>
      <Text>Email: contact@mohansagar.me</Text>
      <Text>Website: mohansagar.me</Text>
      <Text>
        GitHub:{' '}
        <Text
          style={styles.hyperText}
          onPress={() => Linking.openURL(data?.html_url)}>
          {data?.login}
          <Icon name="external-link" size={16} color={'blue'} />
        </Text>
      </Text>
    </View>
  );
};

export default Info;
