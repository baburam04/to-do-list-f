import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/common/Navbar';
import ChecklistList from '../components/Checklist/ChecklistList';
import { getChecklists, createChecklist, deleteChecklist, searchChecklists } from '../services/checklistService';

const HomeScreen = ({ navigation }) => {
  const { currentUser, logout } = useAuth();
  const [checklists, setChecklists] = useState([]);

  useEffect(() => {
    const fetchChecklists = async () => {
      try {
        const data = await getChecklists();
        setChecklists(data);
      } catch (error) {
        console.error('Error fetching checklists:', error);
      }
    };

    if (currentUser) {
      fetchChecklists();
    }
  }, [currentUser]);

  const handleCreateChecklist = async (title) => {
    try {
      const newChecklist = await createChecklist(title);
      setChecklists([...checklists, newChecklist]);
    } catch (error) {
      console.error('Error creating checklist:', error);
    }
  };

  const handleDeleteChecklist = async (id) => {
    try {
      await deleteChecklist(id);
      setChecklists(checklists.filter(checklist => checklist._id !== id));
    } catch (error) {
      console.error('Error deleting checklist:', error);
    }
  };

  const handleSearch = async (query) => {
    try {
      const results = await searchChecklists(query);
      setChecklists(results);
    } catch (error) {
      console.error('Error searching checklists:', error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Navbar title="My Checklists" onLogout={logout} />
      <ChecklistList
        checklists={checklists}
        onSelect={(id) => navigation.navigate('ChecklistDetail', { checklistId: id })}
        onDelete={handleDeleteChecklist}
        onCreate={handleCreateChecklist}
        onSearch={handleSearch}
      />
    </View>
  );
};

export default HomeScreen;