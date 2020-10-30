import React from 'react';
import {SafeAreaView, View, TextInput, Text} from 'react-native';

import {todo_Input} from '../styles'

const TodoInput = (props) => {
    return (
        <View style={todo_Input.container}>
            <View style = {todo_Input.inputContainer}>
                <TextInput/>
            </View>

            <Text>Todo Input</Text>
            
        </View>
    ) 
}

export default TodoInput;