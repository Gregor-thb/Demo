export function countTasks(tasks) {
  return tasks.length
}

export function addTask(tasks, title) {
  const trimmedTitle = title.trim()

  if (!trimmedTitle) {
    return tasks
  }

  return [
    ...tasks,
    {
      id: Date.now(),
      title: trimmedTitle,
      done: false,
    },
  ]
}