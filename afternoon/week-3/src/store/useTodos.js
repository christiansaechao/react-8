import { create } from "zustand";

export const useTodos = create((set) => ({
  booleanState: false,
  invertValue: () => set((state) => ({ booleanState: !state.booleanState })),
  todos: [
    { todo: "Eat breakfast", isComplete: false },
    { todo: "Brush Teeth", isComplete: false },
  ],
  addTodo: (newTodo) =>
    set((state) => ({
      todos: [...todos, { todo: newTodo, iscompleted: false }],
    })),
}));
