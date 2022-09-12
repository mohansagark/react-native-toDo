import {View, Text, Linking} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/dist/EvilIcons';
Icon.loadFont();

const Info = ({data}) => {
  return (
    <View style={styles.container}>
      <Text>
        <Text style={styles.label}>Name: </Text>
        {data?.name}
      </Text>
      <Text>
        <Text style={styles.label}>Website: </Text>
        <Text
          style={styles.hyperText}
          onPress={() => Linking.openURL('https://www.mohansagar.me')}>
          mohansagar.me
          <Icon name="external-link" size={16} color={'blue'} />
        </Text>
      </Text>
      <Text>
        <Text style={styles.label}>Github: </Text>
        <Text
          style={styles.hyperText}
          onPress={() => Linking.openURL(data?.html_url)}>
          {data?.login}
          <Icon name="external-link" size={16} color={'blue'} />
        </Text>
      </Text>
      <Text>
        <Text style={styles.label}>Email: </Text>
        <Text
          style={styles.hyperText}
          onPress={() =>
            Linking.openURL(
              'mailto:contact@mohansagar.me?subject=Service%20request',
            )
          }>
          contact@mohansagar.me
          <Icon name="external-link" size={16} color={'blue'} />
        </Text>
      </Text>
    </View>
  );
};

export default Info;
