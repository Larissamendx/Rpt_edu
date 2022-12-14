import Card from "../../components/Card";
import SubscribeButton from "../../components/SubscribeButton";
import rptlogo from "../../assets/rpt-footer-1.svg";
import griBackground from "../../assets/gri-background.svg"

function RelatoSection() {
  return(
    <section id="relatos" className="bg-base-200 px-4 pt-10 pb-5 sm:px-5 sm:pt-12 sm:pb-6 md:px-10 md:pt-12 lg:px-14 lg:pt-16 xl:px-[180px] xl:pt-[120px] xl:pb-[140px] text-primary-100 relative">
      <span className="uppercase block font-main-semibold-italic">Turmas abertas</span>
      <div className="flex flex-col justify-between xl:mt-[18px] md:flex-row md:gap-2 lg:gap-0">
        <div className="flex flex-col gap-10 pt-10 lg:gap-[32px] lg:w-[484px] lg:pt-[72px] mb-11">
          <header className="flex flex-col gap-1">
            <h2 className="line relative text-[2.37em] font-main-semibold">Curso Relato da Sustentabilidade: passo-a-passo para redatores e editores</h2>
            <h3 className="text-[1.78em] font-main-italic">Report Sustentabilidade</h3>
          </header>
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
            profissionais de Jornalismo, Relações Públicas e comunicação em geral que desejem
            aprofundar conhecimentos nas técnicas de apuração, redação e edição de relatórios
            corporativos
            </p>
          </div>
          <p className="text-[0.75em]">* vaga social disponível para grupos sub representados (população preta e população trans) ou pessoas sem condições financeiras</p>
          <SubscribeButton />
        </div>
        <Card 
          link="/cursos/relatos"
          logo={rptlogo}
          variant="primary" 
          duration={[
            <p className="text-[1.78em] leading-[1.25em]">4h</p>
          ]}
          date={[
            <p>
              <span>
                turma de <span className="font-main-bold">dezembro:</span>
              </span><br/>
              <span className="font-main-italic">
              14/12 e 16/12

              <br/>
              das 18h às 20h
              </span>
            </p>
          ]}
          value="R$ 150,00"
          info="Saiba mais informações sobre o curso"
          background={griBackground}
        />
      </div>
    </section>
  )
}

export default RelatoSection;