import { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add" onPress={addGoalHandler} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#1e085e",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e0d0ff",
    backgroundColor: "#e0d0ff",
    color: "#120438",
    width: "90%",
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
