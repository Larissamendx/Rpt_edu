import React, { useContext } from "react";
import Form from "../../components/Form";
import MainSection from "./MainSection";
import IntroductorySection from "./IntroductorySection";
import rptLogo from "../../assets/rpt-logo.svg";
import EmailSection from "../../components/EmailSection";
import LargeButtonCard from "../../components/LargeButtonCard";
import FormContext from '../../context/FormContext';
import PracticeSection from "./PracticeSection";
import ScrollUpButton from "../../components/ScrollUpButton";
import DialogBox from "../../components/DialogBox";

function IFRS() {
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
      <MainSection />
      <ScrollUpButton />
      {/* <IntroductorySection /> */}
      <PracticeSection />
      <EmailSection />
      <div className="flex justify-center pt-[36px] pb-[48px]">
        <LargeButtonCard link="/cursos/gri" title="Curso certificado da GRI " variant="secondary"/>
      </div>
      <Form />
    </div>
  )
}

export default IFRS;