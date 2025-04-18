import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#007BFF',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#0056b3',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 14,
  },
});