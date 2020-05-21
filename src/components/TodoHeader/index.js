import React, {Component} from 'react';
import PropTypes from 'prop-types'

export default function TodoHeader(props){
    //接收参数
    // console.log(props);
    return (
        <>
            <h1>{props.children}</h1>
            <h3>{props.desc}</h3>
        </>

    )
};
/**
 * 检查props中的数据类型
 */
TodoHeader.propTypes={
    desc:PropTypes.string.isRequired
};
/**
 * 默认值
 */
TodoHeader.defaultProps={
    desc:"默认"
};
