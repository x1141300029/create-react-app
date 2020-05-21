import React, {Component} from 'react';

class TodoItem extends Component {
    render() {
        // console.log("TodoItem render()")
        return (
            <li>
                <span>
                    <input
                        type="checkbox"
                        checked={this.props.completed}
                        onChange={this.handleCheckboxChange}
                    />
                    {this.props.title} {this.props.completed ? "已完成" : "未完成"}
                </span>
            </li>
        );
    }

    handleCheckboxChange=()=>{
        // this.props.onCompletedChange&&this.props.onCompletedChange(this.props.id);//如果传递了参数则调用，否则不进行调用
        const {
            onCompletedChange=()=>{
                console.log("=============error start==============");
                console.log("如果没有传当前函数的情况下的默认值");
                console.log("es6解构");
                console.log("=============error end================");
            },
            id
        }=this.props;

        onCompletedChange(id);
    };


    /**
     * 是否需要更新组件
     * @param nextProps
     * @param nextState
     * @param nextContext
     * @return boolean true更新 false不更新
     */
    shouldComponentUpdate(nextProps, nextState, nextContext) {

        // console.log("-------shouldComponentUpdate-------");
        // console.log(this.props)
        // console.log(nextProps)
        // console.log("-------shouldComponentUpdate-------");


        //如果两个值不相同的情况下才进行页面渲染
        return nextProps.completed!==this.props.completed;
        // return true;
    }
}

export default TodoItem;
