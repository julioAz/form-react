import React from 'react'
import { useState } from 'react'
import '../style.global.css'

function FormReact() {

  const [name, setName] = useState('');
  const [surName, setSurName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  const onSubmit = (e: any) => {
    console.log("name: ", name, '\n',
                "Sur name: ", surName, '\n',
                "E-mail :", email, '\n',
                "Whatsapp :", whatsapp);
    e.preventDefault();
  }

  return (
    <div className="form-control">
        <h2 className="formTitle">Faça seu cadastro</h2>
      <form id="cadastroNewsletter" onSubmit={onSubmit}>
        <div className="form-item">
          <label> Nome </label>
          <input className="form-input" type="text" required name='inputName' onChange={(e)=>setName(e.target.value)} value={name} />
        </div>
        <div className="form-item">
          <label> Sobrenome </label>
          <input className="form-input" type="text" required name='inputSurname' onChange={(e)=>setSurName(e.target.value)} value={surName}/>
        </div>
        <div className="form-item">
          <label> Email </label>
          <input className="form-input" type="text" required name='inputEmail' onChange={(e)=>setEmail(e.target.value)} value={email}/>
        </div>
        <div className="form-item">
          <label> Whatsapp </label>
          <input className="form-input" type="text" required name='inputWhatsapp' onChange={(e)=>setWhatsapp(e.target.value)} value={whatsapp}/>
        </div>

        <small className="form-text" >Não compartilharemos seus dados com ninguem.</small>

        <div className="buttonSubmit">
          <button form='cadastroNewsletter' type='submit'>Confirmar</button>
        </div>

      </form>
    </div>
  )
}

export default FormReact;