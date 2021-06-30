import React, { useState } from 'react';
import { View, Switch, Text, StyleSheet, } from 'react-native';

interface SwitchThemeProps {
  themeActive: (theme: string) => void
}

export function SwitchTheme({ themeActive }: SwitchThemeProps) {
  const [active, setActive] = useState(false);

  function handleTheme(value: boolean) {
    setActive(value);
    themeActive(value ? 'dark' : 'light');
  };

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#A09CB1", true: "#A09CB1" }}
        thumbColor={active ? "#565BFF" : "#f4f3f4"}
        ios_backgroundColor="#A09CB1"
        onValueChange={handleTheme}
        value={active}
      />

      <Text style={{ color: !active ?'#3D3D4D' :  '#E1E1E6' }}>Theme: {active ? 'dark' : 'light'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    alignItems: 'center',
  },
});
