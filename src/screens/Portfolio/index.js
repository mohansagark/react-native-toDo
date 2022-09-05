import {ScrollView, View} from 'react-native';
import React from 'react';
import styles from './styles';

import {useGitHubInfo} from './api';
import {
  Avatar,
  Education,
  Experience,
  Info,
  Projects,
  Skills,
  SocialMedia,
} from '../../components/Portfolio';

const Portfolio = () => {
  const data = useGitHubInfo();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.firstRow}>
        <View style={styles.flex1}>
          <Info data={data} />
        </View>
        <View style={styles.flex1}>
          <Avatar image={data?.avatar_url} />
        </View>
      </View>

      <Education />
      <Experience />
      <Projects />
      <Skills />
      <SocialMedia />
    </ScrollView>
  );
};

export default Portfolio;
