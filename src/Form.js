import React from 'react'


const Form = (props) => {
    const sumbitHandler=(event)=>{
      event.preventDefault()
      console.log(event.target[0].value)
      console.log(event.target[1].value)
      props.sumbitHandler(event.target)
    }
  return (
    <div>
    <form  onSubmit={sumbitHandler}>{props.children}</form>
    </div>
  )
}

export default Form