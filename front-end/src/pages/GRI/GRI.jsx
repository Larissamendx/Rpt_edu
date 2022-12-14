import React, { useContext } from "react";
import Form from "../../components/Form";
import MainSection from "../GRI/MainSection";
import ContentSection from "./ContentSection";
import rptLogo from "../../assets/rpt-logo.svg";
import EmailSection from "../../components/EmailSection";
import FormContext from '../../context/FormContext'
import LargeButtonCard from "../../components/LargeButtonCard";
import ScrollUpButton from "../../components/ScrollUpButton";
import DialogBox from "../../components/DialogBox";

function GRI() {
  const { modal, setModal } = useContext(FormContext);

  return(
    <div className="flex flex-col relative overflow-hidden">
      <DialogBox 
        isOpen={modal.isOpen} 
        onRequestClose={() => setModal({...modal, isOpen: false})}
        closeTimeoutMS="5000"
        type={modal.type}
        title={modal.title}
        description={modal.description}
      />
      <img src={rptLogo} alt="rpt.edu logo" className="fixed left-7 top-7 z-30"/>
      <ScrollUpButton />
      <MainSection />
      <ContentSection />
      <EmailSection />
      <div className="flex w-full justify-center pt-[36px] pb-[48px] px-4 lg:px-0">
        <LargeButtonCard link="/cursos/vrf" title="Curso certificado de relato integrado da VRF" variant="primary"/>
      </div>
      <Form />
    </div>
  )
}

export default GRI;