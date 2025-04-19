import { useState, useMemo } from 'react';
import { ITask } from '@interfaces/ITask';

export type DateFilter = 'oldest' | 'newest';
export type StatusFilter = ITask['status'] | null;

export const useFilter = (tasks: ITask[]) => {
  const [filterStatus, setFilterStatus] = useState<StatusFilter>(null);
  const [sortByDate, setSortByDate] = useState<DateFilter>('newest');

  const filteredTasks = useMemo(() => {
    let result = tasks;
    if (filterStatus) {
      result = result.filter((task) => task.status === filterStatus);
    }
    result = [...result].sort((a, b) =>
      sortByDate === 'newest'
        ? new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime()
        : new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime(),
    );
    return result;
  }, [tasks, filterStatus, sortByDate]);

  const resetFilters = () => {
    setFilterStatus(null);
    setSortByDate('newest');
  };

  return {
    filteredTasks,
    filterStatus,
    sortByDate,
    setFilterStatus,
    setSortByDate,
    resetFilters,
  };
};
