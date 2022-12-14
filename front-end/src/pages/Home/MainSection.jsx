import React, { useContext } from 'react'
import SubmitButton from "../../components/SubmitButton";
import Input from "../../components/Input";
import ButtonCard from "../../components/ButtonCard";
import circles1 from "../../assets/circles-1.svg"
import circles2 from "../../assets/circles-2.svg"
import griBackground from "../../assets/gri-background.svg"
import vrfBackground from "../../assets/vrf-background.svg"
import FormContext from '../../context/FormContext'

function MainSection() {
  const {
    emailNewsletter,
    setEmailNewsletter,
    handleSubmitEmail
  } = useContext(FormContext);

  return(
    <main className="px-4 pt-4 pb-5 relative sm:px-6 sm:pt-6 sm:pb-8 md:px-10 md:pt-8 md:pb-10 lg:px-14
     lg:pt-14 lg:pb-14 xl:px-[80px] xl:pt-[80px] xl:pb-[100px] overflow-hidden">
      <img src={circles1} className="absolute left-20 top-[-164px] z-20"/>
      <img src={circles2} className="absolute right-[-180px] top-4 lg:right-[-77px] md:top-[80px] z-20"/>
      <div className="flex flex-col xl:px-[100px] text-primary-100 xl:pb-6">
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="mt-20 xl:mt-[148px]">
            <h1 className="text-[3.16em] font-main-semibold-italic mb-4 lg:mb-[42px]">
              rpt.edu
            </h1>
            <h2 className="text-[1.33em] leading-[1.15em] font-main-light-italic w-[400px]">
              preparamos as lideranças e os talentos para colocar a sustentabilidade no coração dos negócios.
            </h2>
          </div>

          <div className="mt-10 lg:mt-20 xl:mt-[176px]">
            <span className="text-[1.78em] leading-[1.15em] text-salmon-200 tracking-[0.02em] font-main-italic block mb-[26px]">
              <strong className="font-medium">Turmas abertas:</strong>
            </span>
            <div className="flex flex-col gap-[14px]">
              <ButtonCard 
                title={<div className="font-medium leading-[1.15em]">Curso certificado da <span className="font-main-bold">GRI</span></div>}
                description="Global Reporting Initiative"
                background={griBackground}
                link="#gri"
              />
              <ButtonCard
                title={<div className="font-medium leading-[1.15em]">Curso certificado de Relato Integrado da <span className="font-main-bold">IFRS</span></div>}
                description=""
                background={vrfBackground}
                link="#ifrs"
              />
              <ButtonCard
                title={<div className="font-medium leading-[1.15em]">Curso Relato de sustentabilidade: <span className="font-main-bold">passo-a-passo</span></div>}
                description=""
                background={vrfBackground}
                link="#relatos"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[20px] mt-16 lg:mt-0">
          <span className="font-main-italic w-[340px] block">
            Registre-se aqui para manter-se atualizado(a) sobre nossos cursos
          </span>
          <form className="flex flex-col gap-4 sm:gap-10 sm:flex-row" onSubmit={(e) => handleSubmitEmail(e)}>
            <Input 
              type="email" 
              placeholder="email..." 
              value={emailNewsletter} 
              onChange={(e) => setEmailNewsletter(e.target.value)}
              required
            />
            <div className="drop-shadow-register relative z-20">
            <SubmitButton text="Registrar" />
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

export default MainSection;