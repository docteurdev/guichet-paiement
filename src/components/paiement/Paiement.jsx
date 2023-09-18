import React, { useState } from 'react'
import { UilMobileAndroidAlt, UilWallet, UilCreditCard } from '@iconscout/react-unicons'
import { FaCcVisa } from "react-icons/fa";
import Mobile from './Mobile'
import Wave from './Wave'
import { mobile, wave } from '../../assets';

function Menu ({icon, action,img, ismobile, }){


    return(
        <div>
            <div onClick={() =>{
              action()}}  className={`m-3 paiementMenu ${ismobile?'active-menu' : null}`}>
               <img className='paiementMenu ' src={img} width={70} alt="" />
            </div>
        </div>
    )
}


function Paiement({checkedout}) {

  const [isMobile, seIsMobile] = useState(true)
  
  return (
    <div>
        <p className='h5 text-center paiement-title'>Payer avec</p>

        <div className="d-flex justify-content-center">
                <Menu ismobile={isMobile} action={() =>seIsMobile(true)}  img={mobile} />
                <Menu ismobile={!isMobile} action={() =>seIsMobile(false)} img={wave} />
        </div>
        <div className='mt-4'>
         {isMobile? <Mobile checkedout={checkedout} /> : <Wave checkedout={checkedout} /> }
        </div>
    </div>
  )
}

export default Paiement