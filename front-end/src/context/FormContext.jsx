import React, { createContext, useState } from "react";
import { useMercadopago } from "react-sdk-mercadopago/lib";
import api from '../services/api';


const FormContext = createContext(undefined);
export default FormContext;

// A "provider" is used to encapsulate only the
// components that needs the state in this context
function FormProvider({ children }) {
  const [modal, setModal] = useState({
    isOpen: false,
    type: "",
    title: "",
    description: ""
  });

  const [ emailNewsletter, setEmailNewsletter ] = useState("");

  const mercadopago = useMercadopago.v2('APP_USR-15a9c60d-a9c0-485a-b85a-ad7e9b4d6d2e', {
    locale: 'pt-BR'
  });

  const [ physicalPerson, setPhysicalPerson ] = useState({
    name: "",
    numberIdentification: ""
  })

  const [ legalPerson, setLegalPerson ] = useState({
    name: "",
    numberIdentification: ""
  })

  const [ typePerson, setTypePerson ] = useState("physical");
  const [ parceiroReport, setParceiroReport ] = useState("");
  const [ courseAvailable, setCourseAvailable ] = useState(null)

  const [ field, setField ] = useState({
    // payment_method: "credit_card",
    phone: "",
    email: "",
    description: "",
    cupom: ""
  })  

  const getDataCourse = () => {
    api.get("/curso/")
    .then((response) => {
      console.log(response)
      setCourseAvailable(response.data)
    })
    .catch((error) => console.log(error))
  }


  const verifyEmailWithCupom = (email) => {
    const nome_curso = "Value Reporting Foundation";

    return api.post("/email/add", {email, nome_curso})
    .then((response) => {
      console.log(response)
      if(response.status === 201){
        
        updatePrice(response.data.desconto)

        return {
          message: response.data.message,
          desconto: response.data.desconto,
          hasEmail: true
        }

      } else {
        return {
          message: "",
          desconto: false,
          hasEmail: false

        }

      }
    })
    .catch((error) => console.log(error))
  }

  const [ course, setCourse ] = useState({
  //  vrf_int: {
  //   title: "Value Reporting Foundation",
  //   name: "VRF",
  //   value: 3000,
  //   description: "nível introdutório2",
  //   date: "setembro 2022",
  //   isChoose: false
  //  }, 
  //  vrf_prat: {
  //   title: "Value Reporting Foundation",
  //   name: "VRF",
  //   value: 3000,
  //   description: "nível praticante",
  //   date: "novembro 2022",
  //   isChoose: false
  //  },
      ifrs_prat: {
      title: "Relato Integrado, IFRS",
      name: "Relato Integrado, IFRS",
      value: 3000,
      description: "módulo introdutório",
      date: "janeiro e fevereiro 2023",
      isChoose: false
     },
   relatos_dez: {
    title: "Relato de sustentabilidade: passo-a-passo",
    name: "Relato de sustentabilidade: passo-a-passo",
    value: 150,
    description: "",
    date: "14 e 16 de dezembro",
    isChoose: false
   },
   gri_out: {
    title: "Global Reporting Initiative",
    name: "GRI",
    value: 2500,  
    description: "",
    date: "janeiro e fevereiro 2023",
    isChoose: false
   }
  })

  const [ price, setPrice ] = useState({
    total: "",
    subtotal: ""
  })


  const CUPOM_ENTERPRISE = [
    {
      name: "ABERJE - (não associado)", 
      value: 5
    },
    {
      name: "ABERJE - (associado)", 
      value: 10
    },
    {
      name: "CBARI", 
      value: 10
    },
    {
      name: "ABRAPS", 
      value: 10
    }
  ]

  //Atualiza a informação se o curso foi selecionado
  const handleCourse = (courseChange, changeChoose) => {
    setCourse({
      ...course,
      [courseChange]: {
        ...course[courseChange],
        isChoose: changeChoose
      }, 
    })
  }

  const formatNumber = (number) => {
    let newNumber = number.substr(1).split('.')[0];
    newNumber = Number(newNumber.split(',').join(""))

    return newNumber;
  }

  //Atualiza o total do preço e o preço com desconto
  const updatePrice = (findEmail = false) => {
    let priceTemp = 0;
    let qtCourse = 0;
    let arrDesc = [];
    
    for (const property in course) {
      if(course[property].isChoose){
        priceTemp += course[property].value;

        arrDesc[qtCourse] = `${course[property].name} - ${course[property].description}. Data: ${course[property].date}`
        qtCourse++;
      }
    }  
    
    if(field.cupom == "sub representado" && qtCourse > 0){
      setPrice({
        total: 0,
        subtotal: priceTemp
      })
      
    } else if (field.cupom == "parceiros report") {
      
      CUPOM_ENTERPRISE.map((ent, index) => {
        if(ent.name == parceiroReport){
          setPrice({
            total: priceTemp - (priceTemp * ent.value / 100),
            subtotal: priceTemp
          })
        }
      })

    } else if(qtCourse == 2) {
      const discontCourse = 20;

      setPrice({
        total: priceTemp - (priceTemp * discontCourse / 100),
        subtotal: priceTemp
      })
      
    } else if(qtCourse >= 3){
      const discontCourse = 30;

      setPrice({
        total: priceTemp - (priceTemp * discontCourse / 100),
        subtotal: priceTemp
      })

    } else if(qtCourse != 0){
      setPrice({
        total: priceTemp,
        subtotal: ""
      })
    } else {
      setPrice({
        total: "",
        subtotal: ""
      })
    }

    if(findEmail){
      const discontCourse = 10;
      const total = price.total;

      setPrice({
        total: total - (total * discontCourse / 100),
        subtotal: total
      })
    }

    setField({
      ...field,
      description: arrDesc.join('; ')
    })
  }

  const updateCupomState = (name) => {
    if(name == field.cupom) {
      setField({
        ...field,
        cupom: ""
      })
    } else {
      setField({
        ...field,
        cupom: name
      })
    }
  }

  const isValid = (type, find) => {
    if(type === "physical" && physicalPerson.numberIdentification.length < 14){
        setModal({
            isOpen: true,
            type: "warning",
            title: "Ops!",
            description: "Para continuar digite um CPF válido."
        })

        return false;
    } else if(type === "legal" && legalPerson.numberIdentification.length < 18){
        setModal({
            isOpen: true,
            type: "warning",
            title: "Ops!",
            description: "Para continuar digite um CNPJ válido."
        })
        return false;
    }

    if(type === "legal" && legalPerson.name === ""){
      setModal({
          isOpen: true,
          type: "warning",
          title: "Ops!",
          description: "Para continuar digite o nome da empresa."
      })

      return false;
  }

    if(field.phone < 15){
        setModal({
            isOpen: true,
            type: "warning",
            title: "Ops!",
            description: "Para continuar digite o número do seu celular."
        })

        return false;
    }

    if((price.total == "" || price.total == 0) && field.cupom !== "sub representado") {
        setModal({
            isOpen: true,
            type: "warning",
            title: "Ops!",
            description: "Escolha um curso para continuar."
        })

        return false;
    }

    if(!find.desconto && find.hasEmail){
      setModal({
            isOpen: true,
            type: "warning",
            title: "Ops!",
            description: find.message
        })

        return false;
    }

    return true;
  }

  const handleSubmitMercadoPago = (e) => {
    e.preventDefault();
    verifyEmailWithCupom(field.email).then((find) => {
  
      if(isValid(typePerson, find)){
        const areaCode = field.phone.slice(0, 4);
        
        const numberPhone = Number(field.phone.slice(5).replace(/-/g, ""));
  
        const payload = {
          name: typePerson == "physical" ? physicalPerson.name : legalPerson.name,
          numberIdentification: typePerson == "physical" ? physicalPerson.numberIdentification : legalPerson.numberIdentification,
          typeIdentification: typePerson == "physical" ? "CPF" : "CNPJ",
          surname: "",
          description: field.description,
          unit_price: price.total,
          phone: numberPhone,
          areaCode: areaCode,
          payment_method: field.payment_method,
          email: field.email
        }
  
        const payloadEmail = {
          name: physicalPerson.name,
          CPF: physicalPerson.numberIdentification,
          email: field.email,
          phone: field.phone,
          nameEnterprise: legalPerson.name,
          CNPJ: legalPerson.numberIdentification,
          total: price.total,
          description: field.description,
          cupom: field.cupom
        }
  
        if(field.cupom === "sub representado"){
          api.post("/email/registerPayer", payloadEmail)
          .then((res) => {
              setModal({
                  isOpen: true,
                  type: "confirmation",
                  title: "Curso comprado com sucesso!",
                  description: "Aguarde o e-mail do nosso suporte mostrando os próximos passos para acessar o curso ."
              })
  
              if(findEmailCupom.desconto && findEmailCupom.hasEmail){
                setModal({
                  isOpen: true,
                  type: "confirmation",
                  title: "E-mail com cupom",
                  description: findEmailCupom.message
                })
          
              } 
              
              console.log(res);
          })
          .catch((error) => {
              setModal({
                  isOpen: true,
                  type: "warning",
                  title: "Ops!",
                  description: "Não conseguimos efetuar sua compra. Tente novamente mais tarde."
              })
  
              console.log(error)
          })
        } else {
          api.post("mercadoPago", payload)
          .then((res) => {
            console.log(res)
            if(mercadopago){
              const checkout = mercadopago.checkout({
                preference: {
                    id: res.data.global
                }
              })
              checkout.open(); 
              
            }
          })
          .catch((error) => console.log(error))
        }
    
      }
    })
       
    
  }

  const handleSubmitEmail = (e) => {
    e.preventDefault();

    api.post("email/registerSubscribe", {
      email: emailNewsletter
    })
    .then((response) => {
        setModal({
            isOpen: true,
            type: "confirmation",
            title: "Inscrição bem sucedida!",
            description: "Aguarde os nossos próximos e-mail com novidades e atualizações."
        })
        console.log(response)
    })
    .catch((error) => {
        setModal({
            isOpen: true,
            type: "warning",
            title: "Ops!",
            description: "Não conseguimos efetuar sua inscrição. Tente novamente mais tarde."
        })
        console.log(error)
    })
  }

  return (
    <FormContext.Provider value={{
        modal,
        setModal,

        emailNewsletter,
        setEmailNewsletter,

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
        setCourse,

        CUPOM_ENTERPRISE,
        updateCupomState,
        
        price, 
        setPrice,
        updatePrice,
        
        handleCourse,
        handleSubmitMercadoPago,
        handleSubmitEmail,

        getDataCourse,
        verifyEmailWithCupom
    }}>
        {children}
    </FormContext.Provider>
  );
}

export { FormProvider };