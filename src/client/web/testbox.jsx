/**
 * @flow
 * @typechecks
 */
const React = require('react');
import Box from './box.jsx';

export function TestBox(props) {
  var style = {
    color: 'gray',
    fontSize: 25
  };
  return (
    <div style={style}>
    <p> Hello ass you!{props.msg} </p>
    <Box msg={'how aaa you'} />
    <Box msg = {style.color} />
    </div>
  );
}
