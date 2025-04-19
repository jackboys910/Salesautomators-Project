import { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DateFilter, StatusFilter } from '@hooks/useFilter';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { statusOptions } from '@constants/statusOptions';
import { styles } from './index.styles';
interface ITaskFilterProps {
  isVisible: boolean;
  onClose: () => void;
  filterStatus: StatusFilter;
  sortByDate: DateFilter;
  onFilterChange: (status: StatusFilter, sort: DateFilter) => void;
}

const TaskFilter: React.FC<ITaskFilterProps> = ({
  isVisible,
  onClose,
  filterStatus,
  sortByDate,
  onFilterChange,
}) => {
  const translateY = useSharedValue(-50);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    opacity: withTiming(isVisible ? 1 : 0, { duration: 250 }),
  }));

  useEffect(() => {
    translateY.value = withTiming(isVisible ? 0 : -160, {
      duration: 250,
    });
  }, [isVisible]);

  const handleSortDateChange = (sortDate: DateFilter) => {
    onFilterChange(filterStatus, sortDate);
  };

  const handleStatusChange = (status: StatusFilter) => {
    onFilterChange(filterStatus === status ? null : status, sortByDate);
  };

  return (
    <Animated.View style={[styles.filterContainer, animatedStyle]}>
      <Text style={styles.filterTitle}>Sort by Date:</Text>
      <View style={styles.filterRow}>
        <TouchableOpacity
          style={[styles.filterBtn, sortByDate === 'newest' && styles.filterBtnActive]}
          onPress={() => handleSortDateChange('newest')}
        >
          <Text
            style={[styles.filterBtnText, sortByDate === 'newest' && styles.filterBtnTextActive]}
          >
            Newest
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterBtn, sortByDate === 'oldest' && styles.filterBtnActive]}
          onPress={() => handleSortDateChange('oldest')}
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
            onPress={() => handleStatusChange(status)}
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
