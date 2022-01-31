import React, { Fragment } from "react";
import { View, TextInput, Text, StyleSheet } from 'react-native';

type FormTextInputProps = {

};

export const FormTextInput: React.FC<FormTextInputProps> = (props) => {
    return (
        <Fragment>
            <TextInput style={styles.textInput}/>
            <Text style={styles.error}>error</Text>
        </Fragment>
    )
} 

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: '#F4F4F4',
        borderRadius: 24,
        padding: 24,
        color: '#666666',
        fontFamily: 'Signika-Regular',
        fontSize: 16
    },
    error: {
        color: 'red'
    }
});