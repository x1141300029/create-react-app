import React, {Component,createRef} from 'react';
import PropTypes from 'prop-types'

class TodoInput extends Component {

    static propTypes = {
        btnText: PropTypes.string
    };

    //默认值
    static defaultProps = {
        btnText: "添加"
    };

    //构造函数
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
        this.inputDom=createRef();
    }


    render() {
        return (
            <div>
                <input
                    onChange={this.handleInputChange}
                    onKeyUp={this.handleKeyUp}
                    value={this.state.inputValue}
                    type="text"
                    ref={this.inputDom}
                />
                <button onClick={this.handleAddClick}>{this.props.btnText}</button>
            </div>
        );
    }

    handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            this.handleAddClick();
        }
    };
    //点击添加事件
    handleAddClick = () => {
        //调用父组件的addTodos函数，并把当前输入框内容传递过去
        this.props.addTodos(this.state.inputValue);
        this.setState({
            inputValue:''
        },()=>{
            this.inputDom.current.focus();//获取dom焦点
        })
    };

    handleInputChange = (e) => {
        this.setState({
            inputValue: e.currentTarget.value
        })
    }
}

export default TodoInput;
