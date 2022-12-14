import ContentList from "../../components/ContentList";
import accountIcon from "../../assets/account-multiple.svg";
import CardSimple from "../../components/CardSimple";

function PracticeSection() {
    return(
      <section className="flex flex-col gap-10 justify-between px-4 sm:px-6 md:gap-0 lg:px-10 xl:px-[180px]
      pt-[58px] pb-[44px] md:flex-row text-primary-100 relative bg-base-200">
        <div>
          <div className="mb-[52px]">
            <span>Value Reporting Foundation</span>
            <h2 className="block font-main-semibold text-[2.37em] mb-[38px]">nível praticante</h2>
          </div>
          <strong className="block font-main-semibold text-[1.78em] mb-[38px] line-purple relative">conteúdo geral</strong>
          <div className="flex flex-col gap-[20px]">
            <ContentList
              title="conceitos fundamentais"
              items={[
                "relato integrado",
                "pensamento integrado",
                "criação de valor",
                "os capitais",
                "modelo de negócios"
              ]}
            />
            <ContentList
              title="oportunidades e estágios do pensamento integrado"
              items={[
                "o poder da integração", 
                '<IR>', 
                "Value Reporting Foundation", 
                "ISSB"
              ]}
            />
            <ContentList
              title="princípios direcionadores"
              items={[
                "foco estratégico e orientação para o futuro", 
                "conectividade das informações", 
                "relacionamento com os stakeholders", 
                "materialidade", 
                "concisão",
                "confiabilidade e completude",
                "consistência e comparabilidade"
              ]}
            />
            <ContentList
              title="processo de relato"
              items={[
                "relato: tipos, modelos e formatos", 
                "benefícios e oportunidades do <IR>",
            ]}
            />
          </div>
        </div>
        <div className="flex flex-col gap-[60px]">
          <CardSimple
            duration="12h"
            date={
              <p>
                <span className="font-main-bold text-[1.78em] leading-[1.25em]">
                  setembro
                </span><br/>
                <span className="font-main-light-italic">
                  dias<span className="text-[1.78em] leading-[1.25em]"> 1, 8, 22 e 29/11</span>
                </span><br/>
                <span>de 8h às 12h</span>
              </p>
            }
            price="R$ 3 mil"
            info="Saiba mais informações sobre o curso GRI"
          />
          <div className="w-[340px]">
            <div className="flex gap-2 mb-[2px]">
              <img src={accountIcon} />
              <span className="font-main-bold-italic">Vaga social</span>
            </div>
            <p className="font-main-italic">disponível para grupos sub representados (população preta e população trans) ou pessoas sem condições financeiras</p>
          </div>
        </div>
      </section>
    )
}

export default PracticeSection;