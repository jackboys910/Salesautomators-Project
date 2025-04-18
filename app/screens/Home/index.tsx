import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { ITask } from '@interfaces/ITask'
import Navbar from '@components/Navbar'
import TaskList from '@components/TaskList'
import TaskModal from '@components/TaskModal'
import { useTaskStore } from '@store/useTaskStore'
import { styles } from './index.styles'

interface IRootStackParamList {
  Home: undefined
  TaskDetails: { task: ITask }
}

const Home: React.FC = () => {
  const navigation = useNavigation<NavigationProp<IRootStackParamList>>()
  const { tasks, loadTasks, addTask } = useTaskStore()
  const [isModalVisible, setModalVisible] = useState(false)
  const [sortBy, setSortBy] = useState<'date' | 'status'>('date')

  useEffect(() => {
    loadTasks()
  }, [])

  const sortedTasks = [...tasks].sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime()
    }
    return a.status.localeCompare(b.status)
  })

  const handleTaskPress = (task: ITask) => {
    navigation.navigate('TaskDetails', { task })
  }

  const handleSaveTaskPress = (task: ITask) => {
    addTask(task)
    setModalVisible(false)
  }

  return (
    <View style={styles.container}>
      <Navbar
        onAddTask={() => setModalVisible(true)}
        onSortChange={(sortOption) => setSortBy(sortOption)}
      />
      {tasks.length === 0 ? (
        <Text style={styles.noTasksText}>No tasks available</Text>
      ) : (
        <TaskList tasks={sortedTasks} onTaskPress={handleTaskPress} />
      )}
      <TaskModal
        visible={isModalVisible}
        onClose={() => setModalVisible(false)}
        onSaveTask={handleSaveTaskPress}
      />
    </View>
  )
}

export default Home
