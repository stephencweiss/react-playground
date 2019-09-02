import React, {useState} from 'react';

const AddToDo = (props) => {
  const [text, setText] = useState('')

  const handleSubmit = event => {
    const text = event.target.value.trim()
    if (event.which === 13) {
      props.onSave(text)
        setText('');
    }
  }

  const handleChange = event => {
    setText(event.target.value)
  }

  const handleBlur = () => { //modified
    if (!props.newToDo) {
      props.onSave(text)
      setText('')
    }
  }

  return (
    <input placeholder={'what needs to happen?'}
    type='text'
    autoFocus={true}
    value={text}
    onBlur={handleBlur}
    onChange={handleChange}
    onSubmit={handleSubmit}
    onKeyDown={handleSubmit} />
  )
}

export default AddToDo;