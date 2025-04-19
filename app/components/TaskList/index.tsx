import { memo } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { ITask } from '@interfaces/ITask';
import { styles, getStatusStyle } from './index.styles';
interface ITaskListProps {
  tasks: ITask[];
  onTaskPress: (task: ITask) => void;
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
            <Text style={[styles.status, getStatusStyle(item.status)]}>{item.status}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default memo(TaskList);
