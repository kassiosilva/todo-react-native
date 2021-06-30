import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native';

interface FlatListHeaderComponentProps {
  theme: string;
}

function FlatListHeaderComponent({ theme }: FlatListHeaderComponentProps) {
  return (
    <View>
      <Text style={
        [
          styles.header,
          {
            color: theme === 'dark' ? '#565BFF' : '#3D3D4D'
          }
        ]
      }>
        Minhas tasks
      </Text>
    </View>
  )
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
  theme: string;
}

export function MyTasksList({ tasks, onLongPress, onPress, theme }: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            style={item.done ? 
              [
                styles.taskButtonDone,
                {
                  backgroundColor: theme === 'dark' ? 'rgba(33, 33, 54, 0.3)' : 'rgba(25, 61, 223, 0.1)',
                }
              ] : styles.taskButton}
            activeOpacity={0.7}
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
          >
            <View 
              testID={`marker-${index}`}
              style={item.done ? 
                [
                  styles.taskMarkerDone,
                  { 
                    backgroundColor: theme === 'dark' ? '#565BFF' : '#273FAD',
                  }
                ] : [
                  styles.taskMarker,
                  {
                    borderColor: theme === 'dark' ? '#565BFF' : '#3D3D4D'
                  }
                ]
              }
            />
            <Text 
              style={item.done ? 
                [
                  styles.taskTextDone,
                  {
                    color: theme === 'dark' ? 'rgba(225, 225, 230, 0.6)' : '#A09CB1'
                  }
                ] : {
                  color: theme === 'dark' ? '#E1E1E6' : '#3D3D4D'
                }
              }
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent theme={theme} />}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32
      }}
    />
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginRight: 10
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    marginRight: 10
  },
  taskTextDone: {
    textDecorationLine: 'line-through'
  }
})