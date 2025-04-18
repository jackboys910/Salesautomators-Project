export interface ITask {
    id: string;
    title: string;
    description: string;
    dateTime: string;
    location: string;
    status: 'In Progress' | 'Completed' | 'Cancelled';
}