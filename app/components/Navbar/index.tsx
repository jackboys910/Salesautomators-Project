import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './index.styles'

interface INavbarProps {
  onAddTask: () => void
  onSortChange: (sortOption: 'date' | 'status') => void
}

const Navbar: React.FC<INavbarProps> = ({ onAddTask, onSortChange }) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>Task Manager</Text>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.button} onPress={onAddTask}>
          <Text style={styles.buttonText}>Add Task</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onSortChange('date')}
        >
          <Text style={styles.buttonText}>Sort by Date</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onSortChange('status')}
        >
          <Text style={styles.buttonText}>Sort by Status</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Navbar
