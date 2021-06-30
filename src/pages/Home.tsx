import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { SwitchTheme } from '../components/SwitchTheme';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [theme, setTheme] = useState('light');

  function handleAddTask(newTaskTitle: string) {
    const data = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    };
    
    return setTasks(oldState => [...oldState, data]);
  }

  function handleMarkTaskAsDone(id: number) {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex(task => task.id === id);

    newTasks[taskIndex].done = !newTasks[taskIndex].done;
  
    setTasks(newTasks);
  }

  function handleRemoveTask(id: number) {
    setTasks(oldState => oldState.filter(task => task.id !== id));
  }

  function handleTheme(themeActive: string) {
    setTheme(themeActive);
  };

  return (
    <View style={{ flex: 1,  backgroundColor: theme === 'dark' ? '#10101E' : '#FFFFFF', }}>
      <Header theme={theme} />

      <TodoInput addTask={handleAddTask} theme={theme} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask}
        theme={theme}
      />

      <SwitchTheme themeActive={handleTheme} />
    </View>
  )
}
