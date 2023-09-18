import React, { useState } from "react";
import CustomInput from "../CustomInput";
import SubmitBtn from "../SubmitBtn";
import { momo, moove, orm } from "../../assets";

function Mobile({checkedout}) {
  const [operator, setOperator] = useState("");
  const [phone, setPhone] = useState("");
  
  return (
    <div className="container">
    {/* <div className="money-bx">
      {
        [moove, orm, momo].map(item => <img key={item} width={40} src={item} alt={`${item} logo`} /> )
      }
    </div> */}

      <div className="mb-3">
        <label  className="form-label">
          Sélectionnez un opérateur
        </label>
        <select id="disabledSelect" className="form-select">
          {checkedout?.payment.chanel_setting.map((op, i) => <option key={op.code} name={op.code} > {op.name} </option>) }
        </select>
      </div>
      <CustomInput
       label="Numéro de téléphone" 
       value={phone}
       placeholder={checkedout?.payment.calling_code}
       onChange={(e) =>setPhone(e.target.value)}
      />
      <div>
       <SubmitBtn text="Valider" />
       {/* <SubmitBtn text="Annuler" /> */}
        <div className="d-flex gap-3">

        </div>
      </div>
    </div>
  );
}

export default Mobile;
