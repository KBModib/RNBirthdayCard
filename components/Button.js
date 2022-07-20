import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function Button({}) {
    const onPress = () => navigator.press();
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
            <Text style={styles.text}>
                Click me
            </Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#D773A2',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        borderWidth: 0,
    },
    text: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        fontStyle: 'italic',
    }
})