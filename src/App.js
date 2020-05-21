import React, {Component, Fragment} from 'react';
import {
    TodoHeader,
    TodoInput,
    TodoList,
    Like,
} from './components'

import {getTodos} from './services'

class App extends Component {
    //方式1
    // state={
    //   title:"待办事项"
    // };

    constructor(props) {
        super(props);//必须继承父类所有内容
        this.state = {
            title: "待办事项",
            desc: "今日事，今日毕。",
            todos: [],
            isLoading:false,//默认不显示loading加载
        }
    }

    addTodos = (title) => {
        //新数据
        let obj = {
            id: Math.random(),
            title,
            completed: false,
        };
        //往state中的数组添加数据的 X 方式

        //方法1.push
        // let todos = this.state.todos;//先拷贝数组
        // let todos = this.state.todos.slice();//先拷贝数组
        // let todos=[...this.state.todos];//先拷贝数组
        // todos.push(obj)
        // this.setState({todos})

        //方法2.concat
        this.setState({
            todos:this.state.todos.concat(obj)
        })
    };

    /**
     * @param id 当前选中的item项
     */
    onCompletedChange=(id)=>{
        // console.log("completedChange:");
        this.setState((prevState)=>{
            return {
                todos:prevState.todos.map(item=>{
                    if(item.id===id){
                        item.completed=!item.completed
                    }
                    return item;
                })
            }
        })
    };

    //调用接口 并获取数据
    getData=()=>{
        this.setState({
            isLoading:true
        });
        getTodos().then(res=>{
            if(res.status===200){
                this.setState({
                    todos:res.data
                })
            }else{
                console.log("数据加载失败")
            }
        }).catch((err)=>{
            console.log(err)
        }).finally(()=>{
            this.setState({
                isLoading:false
            })
        })
    };

    /**
     *  在声明周期中进行请求
     */
    componentDidMount() {
        this.getData();
    }

    render() {
        // const _html=`<div>你好 <i>管理员</i></div>`;
        return (
            //Fragment表示空标签，如果不需要的话可以使用Fragment进行替代  如果需要添加class等信息还是需要用div
            //或空标签  <> </>  这样也不会报错
            <Fragment>
                {/*{*/}
                {/*    <div dangerouslySetInnerHTML={{__html:_html}}></div>*/}
                {/*}*/}
                {/*{*/}
                {/*    this.state.todos.map(item=>{*/}
                {/*        return <div key={item.id}>{item.title}</div>*/}
                {/*    })*/}
                {/*}*/}
                <TodoHeader desc={this.state.desc}>{this.state.title}</TodoHeader>
                <TodoInput addTodos={this.addTodos} btnText='ADD'/>
                {
                    this.state.isLoading
                        ?
                        <div>loading...</div>
                        :
                        <TodoList
                            onCompletedChange={this.onCompletedChange}
                            todos={this.state.todos}
                        />
                }

                <Like/>
            </Fragment>
        );
    }
}

export default App;
