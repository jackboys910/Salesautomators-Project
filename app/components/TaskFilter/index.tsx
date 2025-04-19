import { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ITask } from '@interfaces/ITask';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { statusOptions } from '@constants/statusOptions';
import { styles } from './index.styles';

type DateFilter = 'oldest' | 'newest';
type StatusFilter = ITask['status'] | null;

interface ITaskFilterProps {
  isVisible: boolean;
  onClose: () => void;
  filterStatus: StatusFilter;
  sortByDate: DateFilter;
  onFilterChange: (status: StatusFilter, sort: DateFilter) => void;
}

const FILTER_HEIGHT = 160;
const FILTER_OFFSET = 110;

const TaskFilter: React.FC<ITaskFilterProps> = ({
  isVisible,
  onClose,
  filterStatus,
  sortByDate,
  onFilterChange,
}) => {
  const translateY = useSharedValue(-FILTER_HEIGHT + FILTER_OFFSET);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    opacity: withTiming(isVisible ? 1 : 0, { duration: 250 }),
  }));

  useEffect(() => {
    translateY.value = withTiming(isVisible ? 0 : -FILTER_HEIGHT, {
      duration: 250,
    });
  }, [isVisible]);

  return (
    <Animated.View style={[styles.filterContainer, animatedStyle]}>
      <Text style={styles.filterTitle}>Sort by Date:</Text>
      <View style={styles.filterRow}>
        <TouchableOpacity
          style={[styles.filterBtn, sortByDate === 'newest' && styles.filterBtnActive]}
          onPress={() => onFilterChange(filterStatus, 'newest')}
        >
          <Text
            style={[styles.filterBtnText, sortByDate === 'newest' && styles.filterBtnTextActive]}
          >
            Newest
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterBtn, sortByDate === 'oldest' && styles.filterBtnActive]}
          onPress={() => onFilterChange(filterStatus, 'oldest')}
        >
          <Text
            style={[styles.filterBtnText, sortByDate === 'oldest' && styles.filterBtnTextActive]}
          >
            Oldest
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.filterTitle}>Status:</Text>
      <View style={styles.filterRow}>
        {statusOptions.map((status) => (
          <TouchableOpacity
            key={status}
            style={[styles.filterBtn, filterStatus === status && styles.filterBtnActive]}
            onPress={() => onFilterChange(filterStatus === status ? null : status, sortByDate)}
          >
            <Text
              style={[styles.filterBtnText, filterStatus === status && styles.filterBtnTextActive]}
            >
              {status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.resetBtn} onPress={onClose}>
        <Text style={styles.resetBtnText}>Reset Filters</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default TaskFilter;
