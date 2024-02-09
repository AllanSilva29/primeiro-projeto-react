function Button(props: any) {
  return <button onClick={props.event}>{props.text}</button>;
}

export default Button;
