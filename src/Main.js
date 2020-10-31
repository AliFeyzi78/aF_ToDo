import React, {useState} from 'react';
import {SafeAreaView,  StyleSheet,  ScrollView,  View,  Text, FlatList, KeyboardAvoidingView} from 'react-native';

import {main} from './styles';
import TodoInput from './components/TodoInput';

const Main = () => {

  const [list, setList] = useState([]);

  function addTodo (text) {
      const element = {
        id: list.length,
        todo: text,
        isDone: false,
      }
      const newArray = [element, ...list]
      // newArray.push(element)
      setList(newArray);
      console.log(newArray);
  }

  return (
    <>
      <SafeAreaView style={main.container}>
          <KeyboardAvoidingView style={main.container}>

              <View style={main.banner}>

                  
                  <Text style={main.todoText}>TODO</Text>
                  <Text style={main.todoCount}> 10</Text>
            
              </View>

              <FlatList 
                  data={list}
                  renderItem={() => null}
              />

              <TodoInput 
                  onTodoEnter={todoText=>addTodo(todoText)}  
              />

          </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};



export default Main;
