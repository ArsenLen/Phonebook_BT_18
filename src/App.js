import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import { useState } from "react";

function App() {
  //   const course = [
  //   {
  //     id: 1,
  //     name: "IT-RUN React Web Dev",
  //     tasks : [
  //       {
  //         part: "Вводный курс по React",
  //         task: 7
  //       },
  //       {
  //         part: "Состояние компонента",
  //         task: 15
  //       },
  //       {
  //         part: "Декомпозиция компонентов",
  //         task: 10
  //       },
  //     ]
  //   },
  //   {
  //     id: 2,
  //     name: "IT-RUN Python Web Dev",
  //     tasks : [
  //       {
  //         part: "Вводный курс по Python",
  //         task: 5
  //       },
  //       {
  //         part: "Переменные циклы Python",
  //         task: 12
  //       },
  //       {
  //         part: "Фреймворк Django",
  //         task: 17
  //       },
  //     ]
  //   }
  // ]
  const [persons, setPersons] = useState([{ name: "Arsen Iusupov" }]);

  const [newName, setNewName] = useState("");
  return (
    <div>
      <h1>Пользователи</h1>
      <form>
        <input type="text" placeholder="person" />
        <input type="submit" value="Добавить пользователя" />
      </form>
      <div>
        {/* Тут отобразить всех пользователей в тегах p */}
      </div>

      {/* <Course /> */}
      {/* <Header course={course} />
      <Content tasks={tasks} />
      <p>Общее количество заданий {task1 + task2 + task3}</p> */}
    </div>
  );
}

export default App;

/*
  1. Отобразить пользователей в div. Каждый пользователь в теге p
  2. При отправке формы, добавлять нового пользователя в состояние persons.
      2.1 Невозможно добавить пользователя с одинаковым именем и фамилией (arsen iusupov === Arsen Iusupov).
        Отображать alert, если такой пользователь уже существует
*/

/*
    Создать компонент Course, который должен отображать Header, Content, Total каждого курса
    из массива course.
    <Course course={course} />

      const Course = () => {
        return (
          <>
            <Header>
            <Content />
            <Total>
          </>
        )
      }
 */
