import { StyleSheet } from 'react-native';
import { theme } from '@constants/styles/theme';
import { ITask } from '@interfaces/ITask';

export const getStatusStyle = (status: ITask['status']) => {
  switch (status) {
    case 'Completed':
      return { color: theme.colors.ACCENT };
    case 'Cancelled':
      return { color: theme.colors.DANGER };
    case 'In Progress':
      return { color: theme.colors.PROGRESS_TEXT };
    default:
      /*eslint no-case-declarations: 0*/
      const _check: never = status;
      return _check;
  }
};

export const styles = StyleSheet.create({
  dateTime: {
    color: theme.colors.TEXT_SECONDARY,
    fontSize: 14,
  },
  status: {
    color: theme.colors.ACCENT,
    fontSize: 14,
    fontWeight: '600',
    marginTop: 5,
  },
  task: {
    backgroundColor: theme.colors.CARD,
    borderColor: theme.colors.BORDER,
    borderRadius: 8,
    borderWidth: 1,
    elevation: 1,
    marginBottom: 10,
    padding: 15,
    shadowColor: theme.colors.SHADOW,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  title: {
    color: theme.colors.TEXT,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
