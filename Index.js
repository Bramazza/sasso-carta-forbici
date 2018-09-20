import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Index extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Sasso Carta Forbici</Text>
        <Text>Sasso Carta Forbici</Text>
        <View style={styles.containerButtons}>
          <Button
            // onPress={onPressLearnMore}
            title="Sasso"
            color="blue"
            accessibilityLabel="Learn more about this purple button"
            style={styles.button}
          />
          <Button
            // onPress={onPressLearnMore}
            title="Carta"
            color="blue"
            accessibilityLabel="Learn more about this purple button"
            style={styles.button}
          />
          <Button
            // onPress={onPressLearnMore}
            title="Forbici"
            color="blue"
            accessibilityLabel="Learn more about this purple button"
            style={styles.button}
          />                    
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerButtons: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
  }
});
