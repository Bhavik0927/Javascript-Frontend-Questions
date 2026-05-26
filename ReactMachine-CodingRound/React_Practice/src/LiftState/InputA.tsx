

const InputA = ({text, setText}) => {
  return (
    <input value={text} onChange={(e) => setText(e.target.value)} />
  )
}

export default InputA