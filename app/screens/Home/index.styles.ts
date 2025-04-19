import { StyleSheet } from 'react-native';
import { theme } from '@constants/styles/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.BACKGROUND,
    flex: 1,
  },
  noTasksText: {
    color: theme.colors.MUTED,
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
  },
});
