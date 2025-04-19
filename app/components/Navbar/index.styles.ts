import { StyleSheet } from 'react-native';
import { theme } from '@constants/styles/theme';

export const styles = StyleSheet.create({
  actions: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: theme.colors.PRIMARY_DARK,
    borderRadius: 5,
    marginLeft: 10,
    padding: 10,
  },
  buttonText: {
    color: theme.colors.BUTTON_TEXT,
    fontSize: 14,
  },
  navbar: {
    alignItems: 'center',
    backgroundColor: theme.colors.PRIMARY,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  title: {
    color: theme.colors.BUTTON_TEXT,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
