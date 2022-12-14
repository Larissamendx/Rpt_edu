import griLogo from "../../assets/gri-blue.svg";
import CourseCard from "../../components/CourseCard";
import clipboard from "../../assets/clipboard.svg";
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
            variant="primary" 
            title="Relato de sustentabilidade: "
            subtitle="passo-a-passo para redatores e editores"
            description="Conheça as etapas, atividades e tarefas para consultores de conteúdo no processo de
            elaboração de relatórios ESG/de sustentabilidade para organizações de diferentes setores.
            "
          />
        </div>
        <img src={griLogo} alt="GRI Logo" className="order-first w-max self-end lg:self-auto lg:order-none lg:mr-10 lg:mb-[82px]"/>
        <div className="flex flex-col gap-10 my-10 lg:my-0 w-auto sm:w-[430px]">
          <CourseTopic title="O processo de relato" subtitle="Seus passos, etapas e fundamentos" icon={clipboard} />
          <CourseTopic title="Da pesquisa à edição" subtitle="Como definir conteúdo, preparar a etapa de apuração e estudar soluções em comunicação
coerentes com as necessidades do cliente" icon={earth} />
          <CourseTopic title="Relato e frameworks" subtitle="As premissas que regem a qualidade, precisão e comparabilidade de relatórios de diferentes
setores empresariais" icon={stack} />
        </div>
      </div>
      <div className="relative flex-col px-4 sm:px-6 md:px-10 pt-10 lg:flex-row xl:px-[180px] lg:pt-[174px] pb-[76px]
       justify-center z-20 bg-primary-400 text-base-100 overflow-hidden">
        <img src={circles3} className="absolute left-[130px] top-[130px] z-20"/>
        <img src={circles4} className="absolute right-[-120px] bottom-[-130px] z-20"/>

        <div className="lg:absolute flex items-start gap-[10px] text-salmon-200 text-[1.33em] leading-[1.25em] top-[26px] right-[280px]">
          <img src={calendar} />
          <div>
            <strong className="font-main-semibold-italic">Próxima turma</strong>
            <p className="font-main-light-italic">14/12 e 16/12</p>
          </div>
        </div>

        <div className="flex flex-col justify-start w-full mt-6">
          <span className="text-[1.78em] leading-[1.25em] mb-[54px] font-main-bold">
            <strong>Benefícios</strong>
          </span>
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 justify-center md:grid-cols-3 lg:gap-[54px]">
            <div className="flex-1">
              <img src={pageNext} />
              <p>
              Conhecer os principais passos e etapas de um <span className="font-main-bold-italic">processo de relato</span>
              </p>
            </div>
            <div className="flex-1">
              <img src={archive} />
              <p>
              Compreender a função do redator, editor e consultor de conteúdo na coordenação
                editorial de um projeto de  <span className="font-main-bold-italic">relatório de sustentabilidade/ESG</span>
              </p>
            </div>
            <div className="flex-1">
              <img src={packageIcon} />
              <p>
              Atualizar-se sobre os principais instrumentos, normas e diretrizes que regem a 
                <span className="font-main-bold-italic"> qualidade e transparência</span> de relatórios
              </p>
            </div>
            <div className="flex-1">
              <img src={target} />
              <p>
              Aplicar os princípios de qualidade e relacioná-los às atividades de pesquisa,
                <span className="font-main-bold-italic"> planejamento, apuração/reportagem </span> 
                e 
                <span className="font-main-bold-italic"> tratamento da informação na redação e edição </span>
                de conteúdo
              </p>
            </div>
            <div className="flex-1">
              <img src={account} />
              <p>
              Avaliar os passos relacionados à interface com o cliente e à interação com outras áreas <span className="font-main-bold-italic">(design, consultoria GRI, gestão de projeto, negócios)</span> nos projetos
              </p>
            </div>
            <div className="flex-1">
              <img src={human} />
              <p>
              Estabelecer networking com empresas e profissionais engajados nos temas  <span className="font-main-bold-italic">ESG e de
                sustentabilidade</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
export default MainSection;