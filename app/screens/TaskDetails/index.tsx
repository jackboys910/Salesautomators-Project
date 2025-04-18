import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ITask } from '@interfaces/ITask'
import { useTaskStore } from '@store/useTaskStore'
import { styles } from './index.styles'

interface IRouteParams {
  task: ITask
}

const TaskDetails: React.FC = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const { task } = route.params as IRouteParams

  const { updateTask, deleteTask } = useTaskStore()

  const [title, setTitle] = useState(task.title)
  const [description, setDescription] = useState(task.description)
  const [dateTime, setDateTime] = useState(task.dateTime)
  const [location, setLocation] = useState(task.location)

  const handleSave = () => {
    updateTask({
      ...task,
      title,
      description,
      dateTime,
      location,
    })
    navigation.goBack()
  }

  const handleDelete = () => {
    deleteTask(task.id)
    navigation.goBack()
  }

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
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TaskDetails
