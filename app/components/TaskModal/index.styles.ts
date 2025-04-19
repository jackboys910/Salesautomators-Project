import { StyleSheet } from 'react-native';
import { theme } from '@constants/styles/theme';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.PRIMARY,
    borderRadius: theme.borderRadius.SMALL,
    marginTop: theme.margin.LARGE,
    padding: theme.padding.MEDIUM,
  },
  buttonClose: {
    backgroundColor: theme.colors.DANGER,
    borderRadius: theme.borderRadius.SMALL,
    marginTop: theme.margin.LARGE,
    padding: theme.padding.MEDIUM,
  },
  buttonText: {
    color: theme.colors.BUTTON_TEXT,
    fontWeight: '600',
    textAlign: 'center',
  },
  content: {
    backgroundColor: theme.colors.CARD,
    borderRadius: theme.borderRadius.LARGE,
    margin: theme.margin.BIG,
    padding: theme.padding.EXTRA_LARGE,
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
    backgroundColor: theme.colors.BACKGROUND,
    borderColor: theme.colors.BORDER,
    borderRadius: theme.borderRadius.SMALL,
    borderWidth: theme.borderWidth.THIN,
    color: theme.colors.TEXT,
    height: theme.height.SMALL,
    marginBottom: theme.margin.LARGE,
    padding: theme.padding.NORMAL,
  },
  modal: {
    backgroundColor: theme.colors.MODAL_BACKGROUND,
    flex: 1,
    justifyContent: 'center',
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
  title: {
    color: theme.colors.TEXT,
    fontSize: theme.fontSizes.LARGE,
    fontWeight: 'bold',
    marginBottom: theme.margin.EXTRA_LARGE,
  },
});
