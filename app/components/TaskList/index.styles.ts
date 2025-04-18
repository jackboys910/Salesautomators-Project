import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  task: {
    backgroundColor: '#FFF',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  dateTime: {
    fontSize: 14,
    color: '#666',
  },
  status: {
    fontSize: 14,
    color: '#007BFF',
    marginTop: 5,
  },
});