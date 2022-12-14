import ContentList from "../../components/ContentList";
import accountIcon from "../../assets/account-multiple.svg";
import griIcon from "../../assets/gri-training.jpeg";
import CardSimple from "../../components/CardSimple";

function ContentSection() {
  return(
    <section className="flex flex-col gap-10 justify-between px-4 sm:px-6 md:gap-0 lg:px-10 xl:px-[180px]
     pt-[58px] pb-[44px] md:flex-row text-primary-100 relative">
      <div>
        <strong className="block font-main-semibold text-[1.78em] mb-[38px] line-purple relative">conteúdo geral</strong>
        <div className="flex flex-col gap-[20px]">
          <ContentList
            title="introdução"
            items={[
              "sustentabilidade",
              "a GRI",
              "os standards GRI",
              "o curso"
            ]}
          />
          <ContentList
            title="visão geral da norma GRI"
            items={[
              "alinhamento da terminologia",
              "relato de sustentabilidade",
              "introdução aos standards GRI",
              "estrutura dos standards GRI",
              "como usar os standards GRI"
            ]}
          />
          <ContentList
            title="norma GRI"
            items={[
              "GRI 1: fundamentos 2021",
              "GRI 2: divulgações gerais 2021",
              "GRI 3: tópicos materiais 2021",
              "GRI: standards setoriais",
              "GRI: tópicos específicos"
            ]}
          />
          <ContentList
            title="processo de relato GRI"
            items={[
              "os requisitos “de acordo”",
              "os princípios do relato",
              "os tópicos materiais",
              "divulgações gerais",
              "tópicos relevantes",
              "as informações relatadas"
            ]}
          />
          <ContentList
            title="recursos adicionais"
            items={[
              "estudos de caso",
              "próximos passos"
            ]}
          />
        </div>
      </div>
      <div className="flex flex-col gap-[60px]">
        <CardSimple
          duration="16h"
          date={
            <p>
              <span className="font-main-light text-[1.78em] leading-[1.25em]">
                Turma de <span className="font-main-bold">janeiro e fevereiro</span>
              </span><br/>
              <span className="font-main-light-italic">
                dias<span className="text-[1.78em] leading-[1.25em]"> 17/01, 24/01, 31/01 e 07/02</span>(terça-feira)
              </span><br/>
              <span>8h às 12h</span>
            </p>
          }
          price="R$ 2,5 mil"
          info="Saiba mais informações sobre o curso GRI"
        />
        <div className="w-[340px]">
          <div className="flex gap-2 mb-[2px]">
            <img src={accountIcon} />
            <span className="font-main-bold-italic">Vaga social</span>
          </div>
          <p className="font-main-italic">disponível para grupos sub representados (população preta e população trans) ou pessoas sem condições financeiras</p>
          <img src={griIcon} width="100%" style={{marginTop: 2 + "rem"}}/>
        </div>
      </div>
    </section>
  )
}

export default ContentSection;