import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title'
import TodoList from '../components/TodoList';
import { hot } from 'react-hot-loader';

    class App extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                data: [
                    {
                        text: "clean room",
                        id: uuid.v4()
                    },
                    {
                        text: "wash the dishes",
                        id: uuid.v4()
                    },
                    {
                        text: "feed my cat",
                        id: uuid.v4()
                    },
                ]
            };
        }
        addTodo(val){
            const todo = {
                text: val,
                id: uuid.v4(),
            };
            const data = [...this.state.data, todo];
            this.setState({data});
        }

        removeTodo(id) {
            const remainder = this.state.data.filter(todo => todo.id !== id);
            this.setState({data: remainder});
        }
        
        render() {
            return (
                <div className={style.TodoApp}>
                    <Title 
                        title="Todo List (0)"                    
                    />
                        <TodoList 
                            list={this.state.data} 
                        />  
                </div>
            );
        }
    }

export default hot(module)(App);