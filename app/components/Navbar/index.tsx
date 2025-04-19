import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './index.styles';
interface INavbarProps {
  onAddTask: () => void;
  onToggleFilter: () => void;
  isFilterVisible: boolean;
  onClose: () => void;
}

const Navbar: React.FC<INavbarProps> = ({
  onAddTask,
  onToggleFilter,
  isFilterVisible,
  onClose,
}) => {
  const handleAddTaskPress = () => {
    onAddTask();
    if (isFilterVisible) {
      onClose();
    }
  };

  const handleFiltersPress = () => {
    onToggleFilter();
    if (isFilterVisible) {
      onClose();
    }
  };

  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>Task Manager</Text>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.button} onPress={handleAddTaskPress}>
          <Text style={styles.buttonText}>Add Task</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleFiltersPress}>
          <Text style={styles.buttonText}>{isFilterVisible ? 'Hide Filters' : 'Show Filters'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Navbar;
