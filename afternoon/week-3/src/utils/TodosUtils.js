export function handleSubmit(todos, inputValue) {
  return [...todos, inputValue];
}

export function deleteTodo(index, todos) {
  const items = todos.filter((todo) => todo !== todos[index]);
  return items;
}
