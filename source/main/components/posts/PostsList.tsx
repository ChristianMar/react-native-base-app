import React from 'react';
import { View, Text } from 'react-native';

import { LoggedContext } from '../../context/LoggedContext';

export const PostsList = () => {
  return (
    <LoggedContext>
      <View>
        <Text>Posts</Text>
      </View>
    </LoggedContext>
  );
};
