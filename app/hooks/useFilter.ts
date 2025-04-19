import { useState, useMemo } from 'react';
import { ITask } from '@interfaces/ITask';
import { parseDate } from '@utils/parseDate';

export type DateFilter = 'oldest' | 'newest' | null;
export type StatusFilter = ITask['status'] | null;

export const useFilter = (tasks: ITask[]) => {
  const [filterStatus, setFilterStatus] = useState<StatusFilter>(null);
  const [sortByDate, setSortByDate] = useState<DateFilter>(null);

  const filteredTasks = useMemo(() => {
    let result = tasks;
    if (filterStatus) {
      result = result.filter((task) => task.status === filterStatus);
    }

    if (sortByDate) {
      result = [...result].sort((a, b) =>
        sortByDate === 'newest'
          ? parseDate(b.dateTime) - parseDate(a.dateTime)
          : parseDate(a.dateTime) - parseDate(b.dateTime),
      );
    } else {
      result = [...result];
    }
    return result;
  }, [tasks, filterStatus, sortByDate]);

  const resetFilters = () => {
    setFilterStatus(null);
    setSortByDate(null);
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
