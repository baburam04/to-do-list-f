import React from 'react';
import { View, Text } from 'react-native';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Please login to access this page</Text>
      </View>
    );
  }

  return children;
};

export default PrivateRoute;