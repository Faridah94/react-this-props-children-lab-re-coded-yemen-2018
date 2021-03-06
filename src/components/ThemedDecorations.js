// Code ThemedDecoration Component Here
import React from 'react';
import ReactDOM from 'react-dom';


export default class ThemedDecorations extends React.Component {
  render(){
    const child = React.Children.map(this.props.children, child => React.cloneElement(child, {
      className: this.props.theme,
    }));

    return(
      <div>
        {child}
      </div>
     )
  }
}
