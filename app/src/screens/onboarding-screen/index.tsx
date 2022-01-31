import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const OnBoardingScreen: React.FC = (props) => {
    return (
        <View style={styles.container}>
            <Text>OnBoardingScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})