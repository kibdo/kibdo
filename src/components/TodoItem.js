import React from 'react'

export default function TodoItem(props) {
  return (
    <React.Fragment>
        <div>{props.name}</div> <button onClick={props.deleteItem}>delete</button>
    </React.Fragment>
  )
}
