import React, {Component} from 'react';

class Like extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLiked: false,//是否喜欢，默认不喜欢
        };
    }

    render() {
        return (
            <div>
                <span onClick={this.handlLikedClick}>
                {
                    this.state.isLiked ? '取消 ❤️' : '喜欢 🖤'
                }
                </span>
            </div>
        );
    }
    handlLikedClick=()=>{
        /**
         * 使用这种方式修改数据在react哩是不允许的，数据可以进行修改，但是界面不会被重新渲染
         * this.state.isLiked=!this.state.isLiked
         */
        //修改state的第一种方式
        // this.setState方式进行修改
        // this.setState({
        //     isLiked:!this.state.isLiked
        // })
        //修改state的第二种方式

        /**
         * @param prevState 上一次修改的state 为了防止异步操作获取的数据有问题
         */
        this.setState((prevState)=>{
            return {
                isLiked:!prevState.isLiked
            }
        })
    }
}

export default Like;
