import React from 'react'

function CustomInput({label, ...props}) {
  return (
    <div>
        <div className="custom-input">
            <label >{label}</label>
            <input {...props} type="text"  />
        </div>
    </div>
  )
}

export default CustomInput