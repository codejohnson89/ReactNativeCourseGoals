import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([])

  function startAddGoalHandler() {
    setModalVisible(true)
  }

  function endGoalHandler() {
    setModalVisible(false)
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
       {text: enteredGoalText, id: Math.random().toString()},
      ])

      endGoalHandler();
  }

  function deleteGoalHandler (id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id)
    })
  }
  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
        <Button 
          title='Add New Goal'
          onPress={startAddGoalHandler}
          color="#5e0acc"/>
        <GoalInput onCancel={endGoalHandler} onAddGoal={addGoalHandler} visible={modalVisible}/>
        <View  style={styles.goalsContainer}>
          <FlatList 
            data={courseGoals} 
            renderItem={(itemData) => {
              return (
                <GoalItem
                  onDeleteItem={deleteGoalHandler} 
                  id={itemData.item.id}
                  text={itemData.item.text}/>
              )
            }}/>
        </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 5
  },
});
