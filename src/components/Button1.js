import React from 'react'
import { Button } from 'react-bootstrap'

function Button1(props) {
    let {style,children} = props;
  return (
    <>
    <div>
     <Button style={style}>{children}</Button>        
    </div>
    </>
  )
}

export default Button1