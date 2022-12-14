import Card from "../../components/Card";
import SubscribeButton from "../../components/SubscribeButton";
import vrfBackground from "../../assets/vrf-background.svg"
import vrfLogo from "../../assets/vrf-logo.svg";

function VRFSection() {
  return(
    <section id="vrf" className="bg-base-100 px-4 pt-10 pb-5 sm:px-5 sm:pt-12 sm:pb-6 md:px-10 md:pt-12 lg:px-14 lg:pt-16 xl:px-[180px] xl:pt-[120px] xl:pb-[140px] text-primary-100 relative">
      <div className="w-screen h-[1px] border border-violet-200/[0.25] absolute top-[300px]" />
      <span className="uppercase block font-main-semibold-italic">Turmas abertas</span>
      <div className="flex flex-col justify-between xl:mt-[118px] md:flex-row md:gap-2 lg:gap-0">
        <div className="flex flex-col gap-10 pt-10 md:gap-[32px] md:w-[484px] md:pt-[72px] mb-11">
          <header className="flex flex-col gap-1">
            <h2 className="text-[2.37em] font-main-semibold">Curso certificado de relato integrado da VRF</h2>
            <h3 className="text-[1.78em] font-main-italic">Value Reporting Foundation</h3>
          </header>
          <div className="flex flex-col gap-[6px]">
            <span className="text-[1.33em] block font-main-semibold-italic">Certificação</span>
            <p>
              oficial da The Value Reporting Foundation
            </p>
          </div>
          <div className="flex flex-col gap-[6px]">
            <span className="text-[1.33em] block font-main-semibold-italic">Diferencial Report</span>
            <p>
              atuamos na elaboração de relatórios de sustentabilidade desde 2002; já publicamos mais de
              <strong className="font-normal font-main-semibold-italic"> 1.200 relatórios </strong> 
              para cerca de<strong className="font-normal font-main-semibold-italic"> 300 das maiores empresas do Brasil</strong>
            </p>
          </div>
          <div className="flex flex-col gap-[6px]">
            <span className="text-[1.33em] block font-main-semibold-italic">Público-alvo</span>
            <p>
              profissionais das áreas de estratégia, sustentabilidade, RI, comunicação, finanças; consultores; 
              profissionais interessados nos temas de sustentabilidade e ESG
            </p>
          </div>
          <p className="text-[0.75em]">* vaga social disponível para grupos sub representados (população preta e população trans) ou pessoas sem condições financeiras</p>
          <SubscribeButton />
        </div>
        <Card 
          link="/cursos/vrf"
          logo={vrfLogo} 
          duration={[
            <p>
              <span className="text-[1.78em] leading-[1.25em]">12h </span>
              nível
              <strong className="font-main-bold"> introdutório</strong>
            </p>,
            <p>
            <span className="text-[1.78em] leading-[1.25em]">12h </span>
            nível
            <strong className="font-main-bold"> praticante</strong>
          </p>
          ]}
          date={[
            <p>
              <span>
                nível <span className="font-main-bold"> introdutório em setembro: </span>
              </span><br/>
              <span className="font-main-italic">
                13, 20 e 27/9 e 04/10 | de 8h às 11h
              </span>
            </p>,
            <p>
              <span>
                nível <span className="font-main-bold"> praticante em novembro: </span>
              </span><br/>
              <span className="font-main-italic">
                1, 8, 22 e 29/11 | de 8h às 11h
              </span>
            </p>
          ]}
          value="R$ 3 mil"
          info="Saiba mais informações sobre o curso VRF"
          background={vrfBackground}
        />
      </div>
    </section>
  )
}

export default VRFSection;