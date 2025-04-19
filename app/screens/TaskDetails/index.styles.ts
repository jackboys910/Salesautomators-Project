import { StyleSheet } from 'react-native';
import { theme } from '@constants/styles/theme';

export const styles = StyleSheet.create({
  buttonText: {
    color: theme.colors.BUTTON_TEXT,
    fontSize: 16,
    fontWeight: '600',
  },
  container: {
    backgroundColor: theme.colors.BACKGROUND,
    flex: 1,
    padding: 20,
  },
  deleteButton: {
    alignItems: 'center',
    backgroundColor: theme.colors.DANGER,
    borderRadius: 6,
    padding: 15,
  },
  errorInput: {
    borderColor: theme.colors.DANGER,
  },
  errorText: {
    color: theme.colors.DANGER,
    fontSize: 14,
    marginBottom: 10,
    marginTop: -10,
  },
  input: {
    backgroundColor: theme.colors.CARD,
    borderColor: theme.colors.BORDER,
    borderRadius: 6,
    borderWidth: 1,
    color: theme.colors.TEXT,
    marginBottom: 15,
    padding: 10,
  },
  label: {
    color: theme.colors.TEXT,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  picker: {
    borderColor: theme.colors.BORDER,
    borderRadius: 6,
    borderWidth: 1,
    marginBottom: 15,
  },
  saveButton: {
    alignItems: 'center',
    backgroundColor: theme.colors.PRIMARY,
    borderRadius: 6,
    marginBottom: 10,
    padding: 15,
  },
  textArea: {
    backgroundColor: theme.colors.BACKGROUND,
    borderColor: theme.colors.BORDER,
    borderRadius: 6,
    borderWidth: 1,
    height: 80,
    marginBottom: 10,
    padding: 10,
  },
});
