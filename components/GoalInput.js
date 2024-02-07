import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native"
import { useState } from 'react';

export default function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('')

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText)
      }

      function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('')
      }
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput 
                    style={styles.textInput} 
                    placeholder='Your goal!' 
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            onPress={addGoalHandler} 
                            color="#b180f0"
                            title='Add Goal'/>
                    </View>
                    <View style={styles.button}>
                        <Button
                            onPress={props.onCancel}
                            color="#f31282"
                            title='Cancel'/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#311b6b',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        borderRadius: 6,
        backgroundColor: "#e4d0ff",
        color: "#120438",
        width: '100%',
        padding: 16
      },
      image: {
        width: 100,
        height: 100,
        margin: 20
      },
      buttonContainer : {
        flexDirection: 'row',
        marginTop: 16,
        justifyContent: 'center'
      },
      button: {
        width: 100,
        marginHorizontal: 8,
      }

})