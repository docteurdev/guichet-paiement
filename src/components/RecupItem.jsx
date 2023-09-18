import React from 'react'

function RecupItem({label, value}) {
  return (
    <div className="row mb-4 p-6 recupItem">
    <div className="col-6">
      <p className="h5 recupItemTitle"> {label} </p>
    </div>
    <div className="col-6">
    <p className="h6 recupItemText"> {value} </p>
    </div>
</div>
  )
}

export default RecupItem