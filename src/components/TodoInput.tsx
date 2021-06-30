import React, { useState } from 'react';
import { 
  Image, 
  Platform, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  View,
  Alert,
} from 'react-native';

import checkIcon from '../assets/icons/Check.png';

interface TodoInputProps {
  addTask: (task: string) => void;
  theme: string;
}

export function TodoInput({ addTask, theme }: TodoInputProps) {
  const [task, setTask] = useState('');

  function handleAddNewTask() {
    if (task === '') {
      return Alert.alert('Atenção', 'Digite o nome da task')
    }

    addTask(task);

    return setTask('');
  }

  return (
    <View style={
      [
        styles.inputContainer,
        {
          backgroundColor: theme === 'dark' ? '#212136' : '#F5F4F8' 
        },
        Platform.OS === 'ios' ? styles.inputIOSShadow : styles.inputAndroidShadow
      ]
    }>
      <TextInput 
        style={
          [
            styles.input,
            { 
              backgroundColor: theme === 'dark' ? '#212136' : '#F5F4F8',
              color: theme === 'dark' ? '#E1E1E6' : '#3D3D4D',
            }
          ]
        } 
        value={task}
        onChangeText={setTask}
        placeholder="Adicionar novo todo..."
        placeholderTextColor={theme === 'dark' ? '#E1E1E6' : '#A09CB1'}
        returnKeyType="send"
        onSubmitEditing={handleAddNewTask}
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={
          [
            styles.addButton,
            {
              backgroundColor: theme === 'dark' ? '#565BFF' : '#3FAD27',
            }
          ]
        }
        onPress={handleAddNewTask}
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputIOSShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  inputAndroidShadow: {
    elevation: 5
  },
  addButton: {
    backgroundColor: '#3FAD27',
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});