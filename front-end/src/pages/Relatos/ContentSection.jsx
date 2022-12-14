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
            title="14/12 - 18h a 20h"
            items={[
              "Para que fazer relatórios? Breve histórico do relato de sustentabilidade",
               "Evolução de diretrizes, normas, padrões e frameworks para a publicação de relatórios",
               "Relatórios, reputação e gerenciamento de stakeholders: do investidor à comunidade",
               "Princípios direcionadores de relato: os modelos IFRS Foundation e GRI",
               "Como é o processo de relato? As etapas e os profissionais envolvidos",
               "O papel do redator e editor na garantia de qualidade do conteúdo",
            ]}
          />
          <ContentList
            title="16/12 - 18h a 20h"
            items={[
             " Entregáveis e etapas de conteúdo: a estrutura editorial e o planejamento de apuração",
              "Pautas e entrevistas: técnicas e orientações",
              "Reunindo informação nas versões de texto: redação e edição",
              "Inserção de indicadores e dados quanti e qualitativos",
              "Aprovação e versões derivadas do relato",
            ]}
          />
          <strong className="block font-main-semibold text-[1.78em] mt-[38px]  relative">Instrutores:</strong>
           <ContentList
            title="Janice Kiss"
            items={[
              "LinkedIn: https://www.linkedin.com/in/janice-kiss-b86a3946"
             ]}
          />
           <p className="w-[790px]">
              jornalista e pós-graduada em Sustentabilidade e Questões Globais, pela Faap.
              Trabalhou por muitos anos como repórter e editora de mídias impressa (Globo Rural e Valor
              Econômico) e online (UOL), escrevendo sobre agronegócio e sustentabilidade, além de ter
              prestado serviços para editoras e produtoras de cinema. Desde 2010, atua no grupo report,
              tendo atendido clientes como BRF, Nestlé, Eldorado Brasil, CBMM e Pacto Global, entre
              outros.
              </p>
              <ContentList
            title="Guto Lobato"
            items={[
              "LinkedIn: https://www.linkedin.com/in/janice-kiss-b86a3946"
             ]}
          />
           <p className="w-[790px]">
           jornalista (Unama), mestre (Cásper Líbero) e doutor (USP) em Comunicação,
com 11 anos de atuação no grupo report na área de Conteúdo e na rpt.edu e experiência em
redação de jornal impresso (Folha de S. Paulo, O Liberal/Amazônia), rádio, TV e assessoria de
comunicação. Já coordenou processos de relato para clientes como BRF, Samarco, CAIXA,
Minerva Foods, LATAM Airlines Group, EcoRodovias, Raia Drogasil, Simpar, São Martinho,
Heineken Brasil, Aramis, Leroy Merlin, Unilever e Nestlé. Atua também como gestor de área de
conhecimento na Ânima Educação e professor universitário na Universidade São Judas.
              </p>
              <ContentList
            title="Renata Castellini"
            items={[
              "LinkedIn: https://www.linkedin.com/in/janice-kiss-b86a3946"
             ]}
          />
           <p className="w-[790px]">
           graduada em Ciências Biológicas pela Universidade Metodista de São Paulo,
especialista em educação ambiental, sustentabilidade estratégica, coordenação e elaboração
de Relatório de Sustentabilidade (Normas GRI), com mais de 15 anos de atuação no mercado.
Na Report, tem a missão de liderar o time de consultores e gerenciar os resultados.
              </p>
         
        </div>
      </div>
      <div className="flex flex-col gap-[60px]">
        <CardSimple
          duration="4h/a"
          date={
            <p>
              <span className="font-main-light text-[1.78em] leading-[1.25em]">
                Turma de <span className="font-main-bold">dezembro</span>
              </span><br/>
              <span className="font-main-light-italic">
                dias<span className="text-[1.78em] leading-[1.25em]"> 14/12 e 16/12</span>
              </span><br/>
              <span>18h às 20h</span>
            </p>
          }
          price="R$ 150,00"
          info="Saiba mais informações sobre o curso GRI"
        />
        <div className="w-[340px] top-px-[20px]">
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