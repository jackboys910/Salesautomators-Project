import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import { styles } from './index.styles';
import { ITask } from '@interfaces/ITask';
interface ITaskModalProps {
  visible: boolean;
  onClose: () => void;
  onSaveTask: (task: ITask) => void;
}

const TaskModal: React.FC<ITaskModalProps> = ({ visible, onClose, onSaveTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [location, setLocation] = useState('');

  const handleSave = () => {
    const newTask: ITask = {
      id: Date.now().toString(),
      title,
      description,
      dateTime,
      location,
      status: 'In Progress',
    };
    onSaveTask(newTask);
    setTitle('');
    setDescription('');
    setDateTime('');
    setLocation('');
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modal}>
        <View style={styles.content}>
          <Text style={styles.title}>Add New Task</Text>
          <TextInput
            style={styles.input}
            placeholder="Task Title"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={styles.input}
            placeholder="Task Description"
            value={description}
            onChangeText={setDescription}
          />
          <TextInput
            style={styles.input}
            placeholder="Date and Time"
            value={dateTime}
            onChangeText={setDateTime}
          />
          <TextInput
            style={styles.input}
            placeholder="Location"
            value={location}
            onChangeText={setLocation}
          />
          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Save Task</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonClose} onPress={onClose}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default TaskModal;
