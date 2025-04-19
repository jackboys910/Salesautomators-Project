import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { ITask } from '@interfaces/ITask';
import { useTaskStore } from '@store/useTaskStore';
import { statusOptions } from '@constants/statusOptions';
import { styles } from './index.styles';
interface IRouteParams {
  task: ITask;
}

const TaskDetails: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { task } = route.params as IRouteParams;

  const { updateTask, deleteTask } = useTaskStore();

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [dateTime, setDateTime] = useState(task.dateTime);
  const [location, setLocation] = useState(task.location);
  const [status, setStatus] = useState(task.status);

  const handleSave = () => {
    updateTask({
      ...task,
      title,
      description,
      dateTime,
      location,
      status,
    });
    navigation.goBack();
  };

  const handleDelete = () => {
    deleteTask(task.id);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Task Name</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Enter task name"
      />
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Enter task description"
      />
      <Text style={styles.label}>Due Date</Text>
      <TextInput
        style={styles.input}
        value={dateTime}
        onChangeText={setDateTime}
        placeholder="Enter due date"
      />
      <Text style={styles.label}>Location</Text>
      <TextInput
        style={styles.input}
        value={location}
        onChangeText={setLocation}
        placeholder="Enter location"
      />
      <Text style={styles.label}>Status</Text>
      <View style={styles.picker}>
        <Picker selectedValue={status} onValueChange={setStatus}>
          {statusOptions.map((option) => (
            <Picker.Item key={option} label={option} value={option} />
          ))}
        </Picker>
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskDetails;
