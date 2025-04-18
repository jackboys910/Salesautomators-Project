import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      content: {
        margin: 20,
        padding: 20,
        backgroundColor: '#FFF',
        borderRadius: 10,
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
      },
      input: {
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
      },
      button: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
      },
      buttonClose: {
        backgroundColor: '#FF3B3B',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
      },
      buttonText: {
        color: '#FFF',
        textAlign: 'center',
      },
})