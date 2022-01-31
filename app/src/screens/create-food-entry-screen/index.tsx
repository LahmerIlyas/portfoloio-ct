import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const CreateFoodEntryScreen: React.FC = (props) => {
    return (
        <View style={styles.container}>
            <Text>CreateFoodEntryScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})