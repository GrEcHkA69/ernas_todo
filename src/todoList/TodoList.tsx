import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { Button, Typography } from "@mui/material";
import { Action, TodosState, NewTodoInput } from "../redux/NewNoteInput";
import { Box } from "@mui/system";

export const addTodo = (todo: string): Action => ({
  type: "ADD_TODO",
  payload: todo,
});
function TodoList() {
  const todos = useSelector<TodosState, TodosState["todos"]>(
    (state) => state.todos
  );

  const dispatch = useDispatch();

  const onAddTodo = (todo: string) => {
    dispatch(addTodo(todo));
  };

  return (
    <>
      <NewTodoInput addTodo={onAddTodo} />
      <center>
        {todos.map((todo, index) => {
          return (
            <Box>
              <Typography key={todo}>{todo}</Typography>
              <Button onClick={() => {}}>delete</Button>
            </Box>
          );
        })}
      </center>
    </>
  );
}

export default TodoList;
