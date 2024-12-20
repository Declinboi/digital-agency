import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "../redux/todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todo);
  useEffect(() => {
    dispatch(fetchTodo());
  }, []);

  console.log(data);
  return (
    <div>
      {data.isLoading ? (
        <h1>Loading....</h1>
      ) : (
        data.data.map(todo => {
          return <p>{todo.title}</p>;
        })
      )}
    </div>
  );
};

export default TodoList;
