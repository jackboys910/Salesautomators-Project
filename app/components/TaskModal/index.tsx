import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { taskValidationSchema, taskValidationType } from '@utils/validation/taskValidation';
import { ITask } from '@interfaces/ITask';
import { styles } from './index.styles';
interface ITaskModalProps {
  visible: boolean;
  onClose: () => void;
  onSaveTask: (task: ITask) => void;
}

const TaskModal: React.FC<ITaskModalProps> = ({ visible, onClose, onSaveTask }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<taskValidationType>({
    resolver: zodResolver(taskValidationSchema),
    defaultValues: {
      title: '',
      description: '',
      dateTime: '',
      location: '',
    },
  });

  const handleSave = (data: taskValidationType) => {
    const newTask: ITask = {
      id: Date.now().toString(),
      ...data,
      status: 'In Progress',
    };
    onSaveTask(newTask);
    reset();
    onClose();
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <Modal visible={visible} animationType="fade" transparent>
      <View style={styles.modal}>
        <View style={styles.content}>
          <Text style={styles.title}>Add New Task</Text>
          <Controller
            name="title"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={[styles.input, errors.title && styles.errorInput]}
                placeholder="Task Title (1-30 characters)"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          {errors.title && <Text style={styles.errorText}>{errors.title.message}</Text>}

          <Controller
            name="dateTime"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={[styles.input, errors.dateTime && styles.errorInput]}
                placeholder="Date and Time (DD.MM.YYYY HH:MM)"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          {errors.dateTime && <Text style={styles.errorText}>{errors.dateTime.message}</Text>}

          <Controller
            name="location"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={[styles.input, errors.location && styles.errorInput]}
                placeholder="Location (1-30 characters)"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          {errors.location && <Text style={styles.errorText}>{errors.location.message}</Text>}

          <Controller
            name="description"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={[styles.textArea, errors.description && styles.errorInput]}
                placeholder="Description (Optional, up to 100 characters)"
                value={value}
                onChangeText={onChange}
                multiline
              />
            )}
          />
          {errors.description && <Text style={styles.errorText}>{errors.description.message}</Text>}

          <TouchableOpacity style={styles.button} onPress={handleSubmit(handleSave)}>
            <Text style={styles.buttonText}>Save Task</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonClose} onPress={handleClose}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default TaskModal;
