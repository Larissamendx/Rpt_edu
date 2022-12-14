import React, { useContext } from "react";
import MainSection from "../Home/MainSection"
import GRISection from "./GRISection";
// import VRFSection from "./VRFSection";
import IFRSSection from "./IFRSSection";
import Form from "../../components/Form";
import FormContext from '../../context/FormContext'
import rptLogo from "../../assets/rpt-logo.svg";
import ScrollUpButton from "../../components/ScrollUpButton";
import DialogBox from "../../components/DialogBox";
import RelatoSection from "./RelatoSection";

function Home() {
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
      <img src={rptLogo} alt="rpt.edu logo" className="fixed left-4 top-4 sm:left-7 sm:top-7 z-30"/>
      <MainSection />
      <GRISection />
      <IFRSSection />
      <RelatoSection />
      <ScrollUpButton />
      <Form />
    </div>
  )
}

export default Home;