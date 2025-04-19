import { StyleSheet } from 'react-native';
import { theme } from '@constants/styles/theme';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.PRIMARY,
    borderRadius: 6,
    marginTop: 10,
    padding: 12,
  },
  buttonClose: {
    backgroundColor: theme.colors.DANGER,
    borderRadius: 6,
    marginTop: 10,
    padding: 12,
  },
  buttonText: {
    color: theme.colors.BUTTON_TEXT,
    fontWeight: '600',
    textAlign: 'center',
  },
  content: {
    backgroundColor: theme.colors.CARD,
    borderRadius: 10,
    margin: 20,
    padding: 20,
  },
  input: {
    backgroundColor: theme.colors.BACKGROUND,
    borderColor: theme.colors.BORDER,
    borderRadius: 6,
    borderWidth: 1,
    color: theme.colors.TEXT,
    marginBottom: 10,
    padding: 10,
  },
  modal: {
    backgroundColor: theme.colors.MODAL_BACKGROUND,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: theme.colors.TEXT,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});
