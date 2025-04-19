import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { taskDetailsSchema, taskDetailsType } from '@utils/validation/taskValidation';
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

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<taskDetailsType>({
    resolver: zodResolver(taskDetailsSchema),
    defaultValues: {
      title: task.title,
      description: task.description,
      dateTime: task.dateTime,
      location: task.location,
      status: task.status,
    },
  });

  const handleSave = (data: taskDetailsType) => {
    updateTask({
      ...task,
      ...data,
    });
    navigation.goBack();
  };

  const handleDelete = () => {
    deleteTask(task.id);
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Task Name</Text>
      <Controller
        name="title"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={[styles.input, errors.title && styles.errorInput]}
            placeholder="Enter task name (1-30 characters)"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.title && <Text style={styles.errorText}>{errors.title.message}</Text>}

      <Text style={styles.label}>Due Date</Text>
      <Controller
        name="dateTime"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={[styles.input, errors.dateTime && styles.errorInput]}
            placeholder="Enter due date (DD.MM.YYYY HH:MM)"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.dateTime && <Text style={styles.errorText}>{errors.dateTime.message}</Text>}

      <Text style={styles.label}>Location</Text>
      <Controller
        name="location"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={[styles.input, errors.location && styles.errorInput]}
            placeholder="Enter location (1-30 characters)"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.location && <Text style={styles.errorText}>{errors.location.message}</Text>}

      <Text style={styles.label}>Description</Text>
      <Controller
        name="description"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={[styles.textArea, errors.description && styles.errorInput]}
            placeholder="Enter task description (Optional, up to 100 characters)"
            value={value}
            onChangeText={onChange}
            multiline
          />
        )}
      />
      {errors.description && <Text style={styles.errorText}>{errors.description.message}</Text>}

      <Text style={styles.label}>Status</Text>
      <Controller
        name="status"
        control={control}
        render={({ field: { onChange, value } }) => (
          <View style={styles.picker}>
            <Picker selectedValue={value} onValueChange={onChange}>
              {statusOptions.map((option) => (
                <Picker.Item key={option} label={option} value={option} />
              ))}
            </Picker>
          </View>
        )}
      />
      {errors.status && <Text style={styles.errorText}>{errors.status.message}</Text>}

      <TouchableOpacity style={styles.saveButton} onPress={handleSubmit(handleSave)}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default TaskDetails;
