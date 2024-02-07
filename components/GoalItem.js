import { StyleSheet, View, Text, Pressable } from "react-native"

export default function GoalItem(props) {



    return (
        <Pressable android_ripple={{ "color": "#ddd"}} style={({pressed}) => pressed && styles.pressed} onPress={props.onDeleteItem.bind(this, props.id)}>
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{props.text}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        padding: 8,
      },
      pressed: {
        opacity: 0.5
      },
      goalText: {
        color: '#fff'
      }
})