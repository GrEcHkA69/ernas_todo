import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import React, { ChangeEvent } from "react";

interface NewTodoInputProps {
  addTodo(todo: string): void;
}

export type Action = { type: "ADD_TODO"; payload: string };

export interface TodosState {
  todos: string[];
}

const initialState = {
  todos: [],
};

export const todosReducer = (
  state: TodosState = initialState,
  action: Action
) => {
  switch (action.type) {
    case "ADD_TODO": {
      return { ...state, todos: [...state.todos, action.payload] };
    }
    default:
      return state;
  }
};

export const NewTodoInput: React.FC<NewTodoInputProps> = ({ addTodo }) => {
  const [todo, setTodo] = React.useState("");

  const updateTodo = (event: ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const onAddTodoClick = () => {
    addTodo(todo);
    setTodo("");
  };

  return (
    <div>
      <center>
        <Box
          sx={{
            margin: "2rem",
          }}
        >
          <TextField
            onChange={updateTodo}
            value={todo}
            type="text"
            name="todo"
            placeholder="todo"
          />
          <Button onClick={onAddTodoClick}>Add todo</Button>
        </Box>
      </center>
    </div>
  );
};
