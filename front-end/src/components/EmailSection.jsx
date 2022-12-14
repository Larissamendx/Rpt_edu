import React, { useState, useContext } from 'react';
import SubmitButton from "./SubmitButton";
import Input from "./Input";
import FormContext from '../context/FormContext'


function EmailSection(props) {
  const {
    emailNewsletter,
    setEmailNewsletter,
    handleSubmitEmail
  } = useContext(FormContext);

  return(
    <div className="py-[42px] bg-primary-100/[0.9] flex flex-col items-center text-base-100 font-main-italic relative z-20">
      <div className="w-full sm:w-auto px-4 lg:w-auto lg:px-0">
        <p className="w-[310px] mb-4">Registre-se aqui para manter-se atualizado(a) sobre nossos cursos</p>
        <form onSubmit={(e) => handleSubmitEmail(e)}>
          <div className="flex flex-col gap-5 sm:flex-row">
             <Input 
              type="email" 
              placeholder="email..." 
              value={emailNewsletter} 
              onChange={(e) => setEmailNewsletter(e.target.value)}
              required
              />
            <SubmitButton text="Registrar" />
          </div>
        </form>
      </div>
    </div>
  )
}
export default EmailSection;