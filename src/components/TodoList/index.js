import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class TodoList extends Component {

    static propTypes = {
        /**
         * 1.todos必须是一个数组 PropTypes.arrayOf()
         * 2.对数组中的数据进行校验 PropTypes.shape({})
         */
        todos:PropTypes.arrayOf(PropTypes.shape({
            id:PropTypes.number.isRequired, // id 必填 数字类型
            title:PropTypes.string.isRequired,// title 必填 字符串类型
            completed:PropTypes.bool.isRequired, // completed 必填 布尔类型
        })).isRequired,
        onCompletedChange:PropTypes.func
    };

    render() {
        // console.log(this.props)
        return (
            <ul>
                {
                    this.props.todos.map(item => {
                        {/*<TodoItem*/
                        }
                        {/*    key={item.id}*/
                        }
                        {/*    id={item.id}*/
                        }
                        {/*    title={item.title}*/
                        }
                        {/*    completed={item.completed}*/
                        }
                        {/*/>*/
                        }
                        return (
                            <TodoItem
                                onCompletedChange={this.props.onCompletedChange}
                                key={item.id}
                                {...item}
                            />
                        )
                    })
                }
                {/*<TodoItem/>*/}
            </ul>
        );
    }
}

export default TodoList;
