import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { ITask } from '@interfaces/ITask'
import { styles } from './index.styles'

interface ITaskListProps {
  tasks: ITask[]
  onTaskPress: (task: ITask) => void
}

const TaskList: React.FC<ITaskListProps> = ({ tasks, onTaskPress }) => {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onTaskPress(item)}>
          <View style={styles.task}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.dateTime}>{item.dateTime}</Text>
            <Text style={styles.status}>
              {item.status === 'In Progress' ? 'In Progress' : 'Completed'}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

export default TaskList
