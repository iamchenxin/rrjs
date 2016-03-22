const React = require('react');

export default function Box(props){
  return (
    <div> msg: <blockquote> {props.msg} </blockquote> </div>
  );
}
