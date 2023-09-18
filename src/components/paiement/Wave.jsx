import React, { useState } from 'react'
import CustomInput from '../CustomInput'
import SubmitBtn from '../SubmitBtn'

function Wave({checkedout}) {

  const [phone, setPhone] = useState('')

  return (
    <div>
        <CustomInput 
        label="Numéro de téléphone" 
        value={phone}
        placeholder={checkedout?.payment.calling_code}
        onChange={(e) =>setPhone(e.target.value)}
 
        />
        <SubmitBtn text="Valider" />
    </div>
  )
}

export default Wave