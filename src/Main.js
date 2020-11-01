import React, {useState} from 'react';
import {SafeAreaView,  StyleSheet,  ScrollView,  View,  Text, FlatList, KeyboardAvoidingView} from 'react-native';

import {main} from './styles';
import {TodoInput, TodoCard} from './components';

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

  const renderTodo = ({item}) => <TodoCard data={item}/>

  return (
    <>
      <SafeAreaView style={main.container}>
          <KeyboardAvoidingView style={main.container}>

              <View style={main.banner}>

                  
                  <Text style={main.todoText}>TODO</Text>
                  <Text style={main.todoCount}>{list.length}</Text>
            
              </View>

              <FlatList
                  keyExtractor = {(item, index)=> index.toString()} 
                  data={list}
                  renderItem={renderTodo}
                  ListEmptyComponent={()=> <Text style={main.emptyComponent}>Nothing to do yet!!</Text>}
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
