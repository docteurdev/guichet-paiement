import React, { useEffect, useState } from "react";
import RecupItem from "../components/RecupItem";
import Paiement from "../components/paiement/Paiement";
import axios from "axios";

function Guichet() {

  const [checkout, setCheckout] = useState({})

 async function cheackOut(){
   const res = await axios.post('http://localhost:1555/v1/secure/paywithlink/a65fc17fd0e4d2df99d27bd0');
   if(res.data){
    console.log(res.data.data);
     setCheckout(res.data.data)

   }
  }


  useEffect(() => {
    cheackOut()
    setTimeout(() => {
       
    }, 2000);
    return () => {
      
    }
  }, [])
  
  return (
    <div className="row page-content justify-content-around gap-2 p-4 ">
      <div className="col-5 px-4 info">
        <h2 className="h2 title">Récapitulatif</h2>

        <div className="content">
          {/* référence */}
          <RecupItem label="Numéro de transaction" value={checkout?.reference} />

          <RecupItem label="Description" value={checkout?.data?.payment?.description} />

          <RecupItem label="Montant" value={`${checkout?.data?.payment.amount} ${checkout?.data?.payment.currency}`} />

          <RecupItem label="Frais" value={`0 ${checkout?.data?.payment.currency}`} />

          <RecupItem label="Total général" value={`${checkout?.data?.payment.amount} ${checkout?.data?.payment.currency}`} />
        </div>
      </div>
      <div className="col-5 pay-action">
        <h2 className="h2 mb-4 title">Mode de Paiement 
         {/* <img src={checkout?.data?.merchant?.merchant_logo} className="ml-4" width="60" alt="" /> */}
        </h2>
        <div className="content">
          <Paiement checkedout={checkout?.data} />
        </div>
      </div>
    </div>
  );
}

export default Guichet;
