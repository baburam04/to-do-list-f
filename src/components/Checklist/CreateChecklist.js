import React, { useState } from 'react';
import { View } from 'react-native';
import Input from '../common/Input';
import Button from '../common/Button';
import { globalStyles } from '../../styles/globalStyles';

const CreateChecklist = ({ onCreate }) => {
  const [title, setTitle] = useState('');

  const handleCreate = () => {
    if (title.trim()) {
      onCreate(title);
      setTitle('');
    }
  };

  return (
    <View style={[globalStyles.card, { marginBottom: 16 }]}>
      <Input
        placeholder="New checklist title"
        value={title}
        onChangeText={setTitle}
      />
      <Button
        title="Create Checklist"
        onPress={handleCreate}
        disabled={!title.trim()}
      />
    </View>
  );
};

export default CreateChecklist;