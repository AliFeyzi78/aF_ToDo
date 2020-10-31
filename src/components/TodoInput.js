import React, {useState} from 'react';
import {SafeAreaView, View, TextInput, Text, TouchableOpacity} from 'react-native';

import {todo_Input} from '../styles';


const TodoInput = (props) => {
    const [text, setText] = useState("");

    return (
        <View style={todo_Input.container}>
            <View style = {todo_Input.inputContainer}>
                <TextInput
                    placeholder="what do you want TO DO today❓"
                    onChangeText={value=> setText(value)}
                />
            </View>
            <TouchableOpacity 
                style={todo_Input.buttonContainer}
                onPress={()=> props.onTodoEnter(text)}
            >
                <Text style={todo_Input.buttonText}> ADD TODO</Text>
            </TouchableOpacity>
            
        </View>
    ) 
}

export default TodoInput;