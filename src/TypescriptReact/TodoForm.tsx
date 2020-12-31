import React, { useRef } from 'react';

interface TodoFormProps {
  onAdd(title: string): void;
}

const TodoForm: React.FC<TodoFormProps> = (props) => {
  // 1. ОДин из способов работы с локальным стэйтом
  // const [title, setTitle] = useState<string>('')
  // const changeHandler =(event: React.ChangeEvent<HTMLInputElement>)=>{
  //     setTitle(event.target.value)
  // }
  ////2.
  const ref = useRef<HTMLInputElement>(null);
  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.onAdd(ref.current!.value); //! Говороит о том, что мы уверены, что всё будет хорошо
      ref.current!.value = '';
      // console.log(title);
      // setTitle('')
    }
  };

  return (
    <div className="input-field">
      <input //onChange={changeHandler}
        //value={title}
        ref={ref}
        type="text"
        id="title"
        placeholder="Введите наззвание дела"
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        Введите название дела
      </label>
    </div>
  );
};

export default TodoForm;
