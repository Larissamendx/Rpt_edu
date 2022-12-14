import React, { useEffect, useContext, useState, useLayoutEffect } from 'react';
import rptFooter from "../assets/rpt-footer-1.svg";
import rptSus from "../assets/rpt-footer-2.svg";
import rptEst from "../assets/rpt-footer-3.svg";
import rptCom from "../assets/rpt-footer-4.svg";
import grupoReport from "../assets/rpt-footer-5.svg";
import FormCard from "./FormCard";
import Input from "./Input";
import rightArrow from "../assets/arrow-right-small.svg"
import FormButton from "./FormButton";
import FormContext from '../context/FormContext.jsx'
import InputWithMask from './InputWithMask';
import LGPD from './LGPD';

function Form() {
  const [lgpdOpen, setLgpdOpen] = useState(false);
  const {
    physicalPerson,
    setPhysicalPerson,

    legalPerson, 
    setLegalPerson,

    typePerson, 
    setTypePerson,

    parceiroReport, 
    setParceiroReport,

    field, 
    setField,

    course, 

    CUPOM_ENTERPRISE,
    updateCupomState,
    
    price, 

    updatePrice,
    
    handleCourse,
    handleSubmitMercadoPago,

    getDataCourse
  
  } = useContext(FormContext);

  useEffect(() => {
    updatePrice()
  }, [course, field.cupom, parceiroReport])

  useLayoutEffect(() => {
    getDataCourse()
  }, [])
  
  return(
    <section id="formulario-de-inscricao" className="bg-form bg-cover text-primary-100 relative">

    <LGPD isOpen={lgpdOpen} onRequestClose={() => setLgpdOpen(false)}/>
      <div className="px-4 pt-4 pb-5 sm:px-5 sm:pt-5 sm:pb-6 md:px-10 md:pt-10 md:pb-12 lg:px-14 lg:pt-12 lg:pb-14 xl:px-[180px] xl:pt-[120px] xl:pb-[100px]">
        <div className="lg:h-[825px] bg-base-100 rounded-[20px] relative">
          <form onSubmit={(e) => handleSubmitMercadoPago(e)}>
          <div className="flex flex-col gap-2 px-6 pt-10 sm:gap-4 2xl:px-[100px] xl:py-7 xl:gap-7">
            <strong className="font-main-semibold-italic text-[1.78em] leading-[1.25em]">Formulário de Inscrição</strong>
              <div className="flex flex-col justify-between md:gap-4 md:flex-row">
                <div className="flex md:flex-1 flex-col gap-[18px]">
                  <Input 
                    title="nome*" 
                    type="text" 
                    placeholder="Seu nome..." 
                    name="name" 
                    value={physicalPerson.name} 
                    onChange={(e) => setPhysicalPerson({
                      ...physicalPerson,
                      name: e.target.value
                    })}
                    required
                  />
                  <InputWithMask 
                    title="cpf*" 
                    type="text" 
                    name="numberIdentification"
                    placeholder="000.000.000-00"
                    value={physicalPerson.numberIdentification} 
                    mask={"999.999.999-99"}
                    maskChar={null}
                    onChange={(e) => setPhysicalPerson({
                      ...physicalPerson,
                      numberIdentification: e.target.value
                    })}
                    required
                  />
                  <Input 
                    title="e-mail*" 
                    type="email" 
                    placeholder="email..."
                    name="email"
                    value={field.email}
                    onChange={(e) => setField({
                      ...field,
                      email: e.target.value
                    })}
                    // onBlur={() => {}}
                    required
                  />
                  <InputWithMask 
                    title="telefone*" 
                    type="text" 
                    placeholder="(00) 00000-0000"
                    name="phone"
                    value={field.phone}
                    mask={"(99) 99999-9999"}
                    maskChar={null}
                    onChange={(e) => setField({
                      ...field,
                      phone: e.target.value
                    })}
                    required
                  />
                </div>
                <div className="flex md:flex-1 lg:flex-none flex-col gap-[28px]">
                  <div className="flex flex-col gap-3">
                    <span className="font-main-semibold mt-6 md:mt-0">Forma de inscrição</span>
                    <div className="flex md:gap-[46px]">
                      <Input 
                        title="Pessoa Física" 
                        type="radio" 
                        name="typePerson"
                        value="physical"
                        onChange={() => {
                          setTypePerson("physical")
                        }}
                        checked={typePerson == "physical"} 
                      />
                      <Input
                        title="Pessoa Jurídica" 
                        type="radio"  
                        name="typePerson"
                        value="legal"
                        onChange={() => {
                          setTypePerson("legal")
                        }}
                        checked={typePerson == "legal"} 
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[18px]">
                    <Input 
                      placeholder="Empresa..."
                      title="Nome da empresa" 
                      type="text" 
                      name="name" 
                      value={legalPerson.name} 
                      onChange={(e) => setLegalPerson({
                        ...legalPerson,
                        name: e.target.value
                      })}
                      disabled={typePerson != "legal"}
                    />

                    <InputWithMask 
                      title="CNPJ" 
                      type="text"
                      value={legalPerson.numberIdentification} 
                      mask={"99.999.999/9999-99"}
                      placeholder="00.000.000/0000-00"
                      maskChar={null}
                      onChange={(e) => setLegalPerson({
                        ...legalPerson,
                        numberIdentification: e.target.value
                      })}
                      disabled={typePerson != "legal"}
                    />
                  </div>
                  <div className="flex flex-col lg:flex-none gap-3">
                    <span className="font-main-semibold">Desconto especial</span>
                    <div className="flex justify-between">
                      <Input 
                        title="Sub representado" 
                        type="checkbox" 
                        onClick={() => updateCupomState("sub representado")}
                        checked={field.cupom == "sub representado"}
                        />
                      <Input 
                        title="Parceiros report" 
                        type="checkbox"
                        onClick={() => updateCupomState("parceiros report")}
                        checked={field.cupom == "parceiros report"}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-3 flex flex-col-reverse gap-4 justify-between md:flex-row md:gap-0 md:flex">
                  <strong className="font-main-semibold-italic text-[1.33em] leading-[1.25em]">
                    Marque a opção de curso/turma
                  </strong>

                  {
                    field.cupom == "parceiros report" ?
                    <label className="flex flex-col">
                        <select 
                            className="w-[380px] h-[40px] px-5 border border-violet-200 rounded-[10px] outline-primary-100 font-main-italic text-primary-100
                            placeholder:text-primary-100 placeholder:opacity-30 hover:border-primary-100 box-border"   
                            onChange={(e) => setParceiroReport(e.target.value)} 
                            value={parceiroReport}
                            defaultValue=""
                        >
                          <option value="" disabled>Escolha o parceiro</option>
                          {CUPOM_ENTERPRISE.map((value, index) => {
                              return <option value={value.name} key={index}>{value.name}</option>
                          })}
                        </select>
                    </label>  
                    : null
                  }
                  
                </div>
                <div className="grid w-full grid-cols-2 gap-5 mt-[18px] sm:w-max mb-[28px] lg:flex">
                  {/* <FormCard 
                    title={course.vrf_int.name} 
                    subtitle={course.vrf_int.description}
                    date={course.vrf_int.date} 
                    price={`R$ ${course.vrf_int.value},00`} 
                    onClick={() => handleCourse("vrf_int", !course.vrf_int.isChoose)}
                    selected={course.vrf_int.isChoose}
                  /> */}
                  {/* <FormCard 
                    title={course.vrf_prat.name} 
                    subtitle={course.vrf_prat.description}
                    date={course.vrf_prat.date} 
                    price={`R$ ${course.vrf_prat.value},00`} 
                    onClick={() => handleCourse("vrf_prat", !course.vrf_prat.isChoose)}
                    selected={course.vrf_prat.isChoose}
                  /> */}
                  <FormCard 
                    title={course.ifrs_prat.name}  
                    subtitle={course.ifrs_prat.description}
                    date={course.ifrs_prat.date} 
                    price={`R$ ${course.ifrs_prat.value},00`} 
                    onClick={() => handleCourse("ifrs_prat", !course.ifrs_prat.isChoose)}
                    selected={course.ifrs_prat.isChoose}
                  />
                   <FormCard 
                    title={course.relatos_dez.name}  
                    subtitle={course.relatos_dez.description}
                    date={course.relatos_dez.date} 
                    price={`R$ ${course.relatos_dez.value},00`} 
                    onClick={() => handleCourse("relatos_dez", !course.relatos_dez.isChoose)}
                    selected={course.relatos_dez.isChoose}
                  />
                  {/* <FormCard 
                    title={course.gri_ago.name} 
                    date={course.gri_ago.date} 
                    price={`R$ ${course.gri_ago.value},00`}  
                    onClick={() => handleCourse("gri_ago", !course.gri_ago.isChoose)}
                    selected={course.gri_ago.isChoose}
                  /> */}
                  <FormCard 
                    title={course.gri_out.name} 
                    date={course.gri_out.date} 
                    price={`R$ ${course.gri_out.value},00`}  
                    onClick={() => handleCourse("gri_out", !course.gri_out.isChoose)}
                    selected={course.gri_out.isChoose}
                  />
                </div>
                <div className="flex flex-col gap-7 mb-16 lg:flex-row 2xl:mb-0">
                    <strong className="font-main-semibold">Forma de Pagamento</strong>
                    <div className="flex gap-[24px]">
                      {/* <Input 
                        title="Boleto bancário" 
                        type="radio" 
                        name="payment_method"
                        value="bolbradesco"
                        onChange={() => {
                          setField({
                            ...field,
                            payment_method: "bolbradesco"
                          })
                        }}
                        checked={field.payment_method == "bolbradesco"} 
                      /> */}
                      <Input 
                        title="Outra forma" 
                        type="radio"
                        name="payment_method"
                        value="credit_card"
                        onChange={() => {
                          setField({
                            ...field,
                            payment_method: ""
                          })
                        }}
                        checked={field.payment_method == ""} 
                      />
                      
                    </div>
                  </div>
                </div>
              </div>
          <div className="flex flex-col sm:px-5 sm:pt-5 lg:items-center gap-4 lg:gap-0 bg-primary-300 pt-28 pb-4 lg:pb-0 lg:pt-0 lg:h-[130px] lg:flex-row w-full rounded-b-[20px] text-base-100 px-4 2xl:pl-[100px] relative"> 
            <div className="w-[180px]">
              <strong>
                <span className="font-main-semibold">Total <span>{price.subtotal}</span></span>
                <p className="text-[1.78em] leading-[1.25em] font-main-light">R$ {price.total}</p>
              </strong>
            </div>
            <div className="flex gap-2 flex-col opacity-20 lg:ml-[68px]">
              <div className="flex items-center">
                <img src={rightArrow} />
                <p className="self-baseline"> 2 cursos -  desconto 20%</p>
              </div>
              <div className="flex items-center">
                <img src={rightArrow} />
                <p> 3 cursos -  desconto 30%</p>
              </div>
            </div>
            <div className="flex flex-col absolute top-[-50px] left-4 right-4 sm:left-auto sm:right-[20px] sm:left- gap-[16px]">
              <FormButton 
                text="Enviar inscrição"
              />
              <p className="text-salmon-200 w-[280px] font-main-light text-[0.75em]">
                Ao enviar a inscrição declaro estar de acordo com nosso <span><button type="button" onClick={() => setLgpdOpen(true)} className="underline hover:text-base-100">termo de serviço</button></span>
              </p>
            </div>
          </div>
        </form>
        </div>
      </div>
      <div className="flex flex-col gap-6 items-center xl:gap-0 lg:py-8 2xl:py-0 lg:flex-row 
      lg:items-start lg:justify-between pb-6 lg:pl-[30px] lg:pr-[180px]">
        <div>
          <img src={rptFooter} />
        </div>
        
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-6 xl:gap-[82px]">
          <img src={rptSus} className="h-5"/>
          <img src={rptEst} className="h-5"/>
          <img src={rptCom} className="h-5"/>
          <img src={grupoReport} className="h-5"/>
        </div>
      </div>
    </section>
  )
}

export default Form;