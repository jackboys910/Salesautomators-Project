import { StyleSheet } from 'react-native';
import { theme } from '@constants/styles/theme';

export const styles = StyleSheet.create({
  filterBtn: {
    alignItems: 'center',
    backgroundColor: theme.colors.BACKGROUND,
    borderColor: theme.colors.PRIMARY,
    borderRadius: 6,
    borderWidth: 1.5,
    flex: 1,
    marginRight: 8,
    minWidth: 80,
    paddingVertical: 8,
  },
  filterBtnActive: {
    backgroundColor: theme.colors.PRIMARY,
    borderColor: theme.colors.PRIMARY,
  },
  filterBtnText: {
    color: theme.colors.PRIMARY,
    fontSize: 15,
    fontWeight: 'bold',
  },
  filterBtnTextActive: {
    color: theme.colors.BUTTON_TEXT,
  },
  filterContainer: {
    backgroundColor: theme.colors.CARD,
    borderRadius: 5,
    elevation: 2,
    margin: 10,
    overflow: 'hidden',
    padding: 12,
    shadowColor: theme.colors.SHADOW,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
  },
  filterRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  filterTitle: {
    color: theme.colors.TEXT,
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 3,
  },
  resetBtn: {
    backgroundColor: theme.colors.DANGER,
    borderRadius: 5,
    marginTop: 10,
    padding: 10,
  },
  resetBtnText: {
    color: theme.colors.BUTTON_TEXT,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
