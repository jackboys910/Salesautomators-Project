import { StyleSheet } from 'react-native';
import { theme } from '@constants/styles/theme';

export const styles = StyleSheet.create({
  buttonText: {
    color: theme.colors.BUTTON_TEXT,
    fontSize: theme.fontSizes.MEDIUM,
    fontWeight: '600',
  },
  container: {
    backgroundColor: theme.colors.BACKGROUND,
    flex: 1,
    padding: theme.padding.EXTRA_LARGE,
  },
  deleteButton: {
    alignItems: 'center',
    backgroundColor: theme.colors.DANGER,
    borderRadius: theme.borderRadius.SMALL,
    padding: theme.padding.LARGE,
  },
  errorInput: {
    borderColor: theme.colors.DANGER,
  },
  errorText: {
    color: theme.colors.DANGER,
    fontSize: theme.fontSizes.SMALL,
    marginBottom: theme.margin.LARGE,
    marginTop: theme.margin.SMALL,
  },
  input: {
    backgroundColor: theme.colors.CARD,
    borderColor: theme.colors.BORDER,
    borderRadius: theme.borderRadius.SMALL,
    borderWidth: theme.borderWidth.THIN,
    color: theme.colors.TEXT,
    marginBottom: theme.margin.EXTRA_LARGE,
    padding: theme.padding.NORMAL,
  },
  label: {
    color: theme.colors.TEXT,
    fontSize: theme.fontSizes.MEDIUM,
    fontWeight: '600',
    marginBottom: theme.margin.MEDIUM,
  },
  picker: {
    borderColor: theme.colors.BORDER,
    borderRadius: theme.borderRadius.SMALL,
    borderWidth: theme.borderWidth.THIN,
    marginBottom: theme.margin.EXTRA_LARGE,
  },
  saveButton: {
    alignItems: 'center',
    backgroundColor: theme.colors.PRIMARY,
    borderRadius: theme.borderRadius.SMALL,
    marginBottom: theme.margin.LARGE,
    padding: theme.padding.LARGE,
  },
  textArea: {
    backgroundColor: theme.colors.BACKGROUND,
    borderColor: theme.colors.BORDER,
    borderRadius: theme.borderRadius.SMALL,
    borderWidth: theme.borderWidth.THIN,
    height: theme.height.NORMAL,
    marginBottom: theme.margin.LARGE,
    padding: theme.padding.NORMAL,
  },
});
