import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

interface HeaderProps {
  theme: string
};

export function Header({ theme }: HeaderProps) {
  return (
    <View style={[
      styles.header, 
      { backgroundColor: theme === 'dark' ? '#191932' : '#273FAD', }
     ]}>
      <Text style={[
        styles.headerText, { color: theme === 'dark' ? '#E1E1E6' : '#FFF', }
      ]}>to.</Text>
      <Text style={[
        styles.headerText,
        {
          fontFamily: 'Poppins-SemiBold',
          color: theme === 'dark' ? '#E1E1E6' : '#FFF',
        }
      ]}>do</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    fontFamily: 'Poppins-Regular',
  }
});
