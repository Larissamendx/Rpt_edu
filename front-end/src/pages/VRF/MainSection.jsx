import vrfLogo from "../../assets/vrf-red.svg";
import CourseCard from "../../components/CourseCard";
import notebook from "../../assets/notebook.svg";
import earth from "../../assets/earth.svg";
import stack from "../../assets/stack.svg";
import circles1 from "../../assets/circles-3.svg";
import circles2 from "../../assets/circles-4.svg";
import circles3 from "../../assets/circles-5.svg";
import circles4 from "../../assets/circles-6.svg";
import CourseTopic from "../../components/CourseTopic";
import pageNext from "../../assets/page-next.svg";
import archive from "../../assets/archive.svg";
import packageIcon from "../../assets/package.svg";
import target from "../../assets/target.svg";
import account from "../../assets/account.svg";
import human from "../../assets/human.svg";
import calendar from "../../assets/calendar-orange.svg";

function MainSection() {
  return(
    <main>
      <img src={circles1} className="absolute left-20 top-[-16px] z-20"/>
      <img src={circles2} className="absolute right-[-80px] top-0 z-20"/>

      <div className="relative flex flex-col px-4 pt-4 pb-5 gap-4 sm:px-6 sm:pt-6 sm:pb-8 md:px-10 md:pt-10 md:pb-12
       lg:gap-0 lg:pl-[180px] lg:pt-[100px] xl:pr-[140px] lg:pb-[50px] lg:items-end text-primary-100 z-30">
        <div className=" lg:absolute lg:left-10 xl:left-[180px] lg:bottom-[-106px]">
        <CourseCard 
          variant="secondary" 
          title="Curso certificado de relato integrado da VRF" 
          subtitle="Value Reporting Foundation"
          description="Aprenda com a consultoria que já elaborou mais de mil relatórios de 
          sustentabilidade e estabeleça networking com empresas e profissionais engajados nos temas ESG"
        />
        </div>
        <img src={vrfLogo} alt="GRI Logo" className="order-first w-max self-end lg:self-auto lg:order-none lg:mr-10 lg:mb-[82px]"/>
        <div className="flex flex-col gap-10 my-10 lg:my-0 w-auto sm:w-[430px]">
          <CourseTopic title="Relato Integrado" subtitle="o pensamento, seus conceitos e processos" icon={notebook} />
          <CourseTopic title="Capitais e valor" subtitle="apropriar-se dos conceitos-chave e o processo pelo qual o valor é criado, preservado ou erodido" icon={stack} />
          <CourseTopic title="Framework internacional" subtitle="aprender os requisitos  do IR - Internacional Integrated Reporting" icon={earth} />
        </div>
      </div>
      <div className="relative flex-col px-4 sm:px-6 md:px-10 pt-10 lg:flex-row xl:px-[180px] lg:pt-[174px] pb-[76px]
       justify-center z-20 bg-primary-200 text-base-100 overflow-hidden">
        <img src={circles3} className="absolute left-[130px] top-[130px] z-20"/>
        <img src={circles4} className="absolute right-[-120px] bottom-[-130px] z-20"/>

        <div className="lg:absolute flex items-start md:gap-[40px] text-salmon-200 lg:right-4
         text-[1.33em] leading-[1.25em] top-[26px] xl:right-24 2xl:right-[280px]">
          <div className="flex flex-1 md:flex-none items-start gap-2 sm:gap-[10px]    ">
            <img src={calendar} />
            <div>
              <strong className="font-main-semibold-italic">nível introdutório</strong>
              <p className="font-main-light-italic">13 de Setembro</p>
            </div>
          </div>
          <div className="flex flex-1 md:flex-none items-start gap-2 sm:gap-[10px]">
            <img src={calendar} />
            <div>
              <strong className="font-main-semibold-italic">nível praticante</strong>
              <p className="font-main-light-italic">1º de Novembro</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-start w-full mt-6 lg:mt-0">
          <span className="text-[1.78em] leading-[1.25em] mb-[54px] font-main-bold">
            <strong>Benefícios</strong>
          </span>
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 justify-center md:grid-cols-3 lg:gap-[54px]">
            <div className="flex-1">
              <img src={pageNext} />
              <p>
                dominar o conceito de <span className="font-main-bold-italic">relato integrado e pensamento integrado</span>
              </p>
            </div>
            <div className="flex-1">
              <img src={archive} />
              <p>
                apropriar-se dos conceitos-chave
                (<span className="font-main-bold-italic">criação de valor</span>, os <span className="font-main-bold-italic"> capitais </span> 
                e o processo pelo qual o valor é criado, preservado ou erodido)
              </p>
            </div>
            <div className="flex-1">
              <img src={packageIcon} />
              <p>
                aprender os requisitos principais do frameword do <span className="font-main-bold-italic">Internacional Integrated Reporting IR</span>
              </p>
            </div>
            <div className="flex-1">
              <img src={target} />
              <p>
                entender as premissas que contribuem na implementação do relato e pensamento integrado nas organizações
              </p>
            </div>
            <div className="flex-1">
              <img src={account} />
              <p>
                estabelecer <span className="font-main-bold-italic">networking com empresas e profissionais</span> engajados nos temas ESG e de sustentabilidade
              </p>
            </div>
            <div className="flex-1">
              <img src={human} />
              <p>
                aprender com a consultoria que já elaborou mais de <span className="font-main-bold-italic">mil relatórios de sustentabilidade</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
export default MainSection;