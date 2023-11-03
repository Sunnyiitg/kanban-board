export const sortTasksByPriority = (tasks) => {
    return tasks.slice().sort((a, b) => b.priority - a.priority);
  };
  
export const sortTasksByTitle = (tasks) => {
    return tasks.slice().sort((a, b) => a.title.localeCompare(b.title));
};
  