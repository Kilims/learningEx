import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import arrow from './arrow.png';

const Selectsection = styled.div`
  position:relative;
  background:linear-gradient(#F8F8F8, #FDFDFD 30%, #E8E8E8);
  width:300px;
  height:30px;
  float:left;
  border:1px solid #ececec;
  border-radius:4px;
  margin:15px 0 0 15px;

  > select {
    width:300px;
    height:30px;
    padding-left: 15px;
    position:absolute;
    font: 14px Arial;
    z-index:2;
    opacity:0;
  }

  > span {
    width:300px;
    height:30px;
    position:absolute;
    text-align: left;
    font: 14px Arial;
    cursor: pointer;
    z-index:1;
    text-indent:20px;
    padding-top:6px;
  }

  > div {
    background:url(${arrow}) 0 0 no-repeat;
    width:24px;
    height:24px;
    position:absolute;
    top:6px;
    right:15px;
  }
`

class Selection extends Component {
    constructor(props){
        super(props)
        this.state = {
            showValue: this.props.words
        }
    }

    onSelect(e){
        this.setState({showValue: e.target.value});
        console.log(e.target.value)
    }
    render() {
        const { width, height } = this.props

        const style = {
            width: width,
            height: height            
        }

        const suitableHeight = (parseInt(height.substring(0, height.length-2)) - 30) / 2 + 6;
        
        const spanStyle = {
            width: width,
            height: height,
            paddingTop:suitableHeight
        }

        const arrowStyle = {
            top:suitableHeight
        }

        return (
            <Selectsection style={style}>
                <select onChange={this.onSelect.bind(this)} value={this.state.showValue} style={style}>
                    <option>{this.props.words}</option>
                    <option>...</option>
                    <option>...</option>
                </select>
                <span style={spanStyle}>{this.state.showValue}</span>
                <div style={arrowStyle}></div>
            </Selectsection>
        );
    }
}

Selection.propTypes = {
    height: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    words: PropTypes.string
}

Selection.defaultProps = {
    height: '30px',
    width: '300px',
    words: 'Please select one option...'
}

export default Selection;

