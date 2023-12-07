import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Set, Add, Update, Delete, Toggle} from '../redux/TodosSlice'
const Screen02 = ({route}) => {

  const [task, setTask] = useState(''); 

  const dispatch = useDispatch(); 
  const API = 'https://655c3451ab37729791aa1107.mockapi.io/todos'; 
  useEffect(() => { 
    axios(API+'?userName='+route.params.name)
      .then(res => {
        if(res.data[0])
          dispatch(Set(res.data[0]))
        else {
          axios.post(API, {
            "userName": route.params.name,
            "todos": []
          })
          .then(res => {
            dispatch(Set(res.data))
          })
        }
      })
  }, [])
  const todos = useSelector(state => state.todos); 
  const Item = ({item}) => { 
    const [job, setJob] = useState(''); 
    return <View> 
      <View style={{flexDirection: 'row'}}>
        <Text  style={{width: '100%'}}> {item.name}</Text> 
        <Button title='Delete' onPress={() => dispatch(Delete(item.id))}/>
      </View>
      <Button title='Update'  onPress={() => { 
        dispatch(Update({
          name: job, 
          id: item.id
        })); 
      }}/>


      <TextInput
                value={job}
                onChangeText={setJob}
                placeholder="Update here"
                style={{
                    padding: 16,
                    borderWidth: 1,
                    borderColor: "#000",
                    borderRadius: 4,
                    marginBottom: 10,
                }}
            />
    </View>
  }
  return (
    <View style={{
      width: "100%",
      height: "100%",
      justifyContent: "flex-start",
      padding: 20,
    }}>
      <Text style={{paddingBottom: 20}}> User: {route.params.name} </Text>
      <ScrollView>
        {
          todos.map((item) => <Item item={item} key={item.id}/>)
        }
      </ScrollView>

      <TextInput
                value={task}
                onChangeText={setTask}
                placeholder="add here"
                style={{
                    padding: 16,
                    borderWidth: 1,
                    borderColor: "#000",
                    borderRadius: 4,
                    marginBottom: 10,
                }}
            />
      <Button title='ADD'  onPress={() => { 
        dispatch(Add(task)); 
      }}/>
    </View>
  )
}

export default Screen02

const styles = StyleSheet.create({})