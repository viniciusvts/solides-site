/**
 * Este objeto contém as regras da calculadora de rotatividade
 * @author Vinicius de Santana
 */
const calcRotat = {
  data () {
    return {
      /** essas informações vem do servidor */
      calcVars: {
        med_sal: 0,
        tempo_de_casa: 0,
        salario_hora_rh: 0,
        salario_hora_gestor: 0,
        media_taxa_rotatividade: 0
      },
      /** numero de funcionarios (digitato pelo user) */
      numFunc: 0,
      /** Taxa de demissões por comportamento: 0.9 */
      txDemissComport: 0.9,
      /*##################### custo RH #####################*/
      /** Anúncio e publicação de vagas	20 minutos por vaga */
      anunPubVaga: 20,
      /** Média mínima de currículos recebidos por vaga	300 */
      medCurrRecebVaga: 300,
      /** Análise de currículo (hard skills e requisitos obrigatórios)	3 minutos */
      analiCurri: 3,
      /** Dinâmica de Grupo	120 minutos/vaga */
      dinamGrupo: 120,
      /** Telefonar e selecionar candidatos	300 minutos */
      telefSelecionar: 300,
      /** Tempo de entrevista	180	minutos	3 candidatos chegam nesta fase */
      tempEntrev: 180,
      /*##################### custo Gestor #####################*/
      /**Entrevistas do Gestor aos candidatos	3	candidatos por vaga */
      candidatParaGestor: 3,
      /**Tempo de entrevista por candidato	60	minutos*/
      tempoGestorcomCandidat: 60,
      /**Deliberações com o RH para cada candidato	20	minutos */
      tempoGestorComRH: 20,
      /*##################### Salário e demais custos #####################*/
      /**Média do custo total (incluindo encargos) de um colaborador| 
       * fator 4.017,60 / 2000 (caso mudem o salário o fator continua)	 */
      fatorCustoColaborador: 2.0088,
      /*##################### Tempo Gestor e treinador Total #####################*/
      /**Custo-hora do treinamento	R$ 30,00	por hora	período de experiência do novo colaborador */
      custoHoraTreinador: 30,
      /**Horas de treinamento média	30	horas totais */
      horasTreinadorTotal: 30,
      /*Custo-hora do Gestor	R$ 50,00	por hora| calcVars.salario_hora_gestor */
      /**Horas de orientação do gestor	8	horas totais */
      horasOrientaGestor: 8,
      /**Custo-hora do colaborador 	R$ 20,00	por hora */
      custoHoraColabTreinamento: 20,
      /**Total de horas de acompanhamento	20	horas totais */
      horasOrientaColab: 20,
      /*##################### Rescisão #####################*/
      /** 8% */
      fgts: .08,
      /** 40% */
      fgtsMulta: .4
    }
  },
  methods: {
    /**
     * Média de contatações anual
     * Nº colabs * taxa de Rotatividade * taxa de demissões por comportamento
     * @author Vinicius de Santana
    */
    calcularMediaContratacaoAnual () {
      return (this.numFunc * (this.calcVars.media_taxa_rotatividade / 100) * this.txDemissComport).toFixed(0)
    },
    /**Nº colabs * taxa de Rotatividade * taxa de demissões por comportamento
     * Taxa de demissões por comportamento: 0.9
     * @author Vinicius de Santana
    */
    calcularSubstituicaoPorErroRecrutamento () {
      return (this.calcularMediaContratacaoAnual() * this.txDemissComport).toFixed(0)
    },
    /*###################################################################
    ################################# custo RH #####################*/
    /**horas rh por vaga
     * @author Vinicius de Santana
    */
    calcularHoraRhPorVaga (formated) {
      var horas = (
        this.anunPubVaga + 
        (this.medCurrRecebVaga * this.analiCurri) + 
        this.dinamGrupo + 
        this.telefSelecionar + 
        this.tempEntrev
      ) / 60
      if (formated){
        var fracaoDaHora = (horas % 1) * 60
        return horas.toFixed(0) + 'h e ' + fracaoDaHora.toFixed(0) + ' min'
      } else return horas
    },
    /**hora rh total para todos os candidatos
     * @author Vinicius de Santana
    */
    calcularHoraRhTotal (formated) {
      var horas = (this.calcularHoraRhPorVaga() * this.calcularMediaContratacaoAnual())
      if (formated){
        var fracaoDaHora = (horas % 1) * 60
        return horas.toFixed(0) + 'h e ' + fracaoDaHora.toFixed(0) + ' min'
      } else return horas
    },
    /**custo do rh por vaga
     * @author Vinicius de Santana
    */
    calcularCustoRhPorVaga (formated) {
      var custo = (this.calcularHoraRhPorVaga() * this.calcVars.salario_hora_rh)
      if (formated) return custo.toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })
      else return custo
    },
    /**custo total do rh para todos os candidatos
     * @author Vinicius de Santana
    */
    calcularCustoRhTotal (formated) {
      var custo = (this.calcularCustoRhPorVaga() * this.calcularMediaContratacaoAnual())
      if (formated) return custo.toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })
      else return custo
    },
    /*###################################################################
    ################################# custo Gestor #####################*/
    /**horas Gestor por vaga
     * @author Vinicius de Santana
    */
    calcularHoraGestorPorVaga (formated) {
      var horas = (
          (this.tempoGestorcomCandidat + this.tempoGestorComRH) * this.candidatParaGestor
      ) / 60
      if (formated){
        var fracaoDaHora = (horas % 1) * 60
        return horas.toFixed(0) + 'h e ' + fracaoDaHora.toFixed(0) + ' min'
      } else return horas
    },
    /**custo Gestor por vaga
     * @author Vinicius de Santana
    */
    calcularCustoGestorPorVaga (formated) {
      var custo = (this.calcVars.salario_hora_gestor * this.calcularHoraGestorPorVaga())
      if (formated) return custo.toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })
      else return custo
    },
    /**custo Total Gestor para todos os candidatos
     * @author Vinicius de Santana
    */
    calcularCustoGestorTotal (formated) {
      var custo = (this.calcularCustoGestorPorVaga() * this.calcularMediaContratacaoAnual())
      if (formated) return custo.toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })
      else return custo
    },
    /*###################################################################
    ##################### Salário e demais custos #####################*/
    /**
     * Multiplica o salário por um fator
     * Isso retorna o custo total de um colaborador na empresa
     * @author Vinicius de Santana
    */
    calcularSalarioColaboradorMes (formated) {
      var custo = (this.calcVars.med_sal * this.fatorCustoColaborador)
      if (formated) return custo.toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })
      else return custo
    },
    /**
     * retorna o custo do colaborador/mês multiplicado pelo tempo médio de casa
     * @author Vinicius de Santana
    */
    calcularSalarioColaboradorTempoMedio (formated) {
      var custo = (this.calcularSalarioColaboradorMes() * this.calcVars.tempo_de_casa)
      if (formated) return custo.toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })
      else return custo
    },
    /**
     * calcula o custo de todos os colaboradores durante o tempo médio
     * @author Vinicius de Santana
    */
    calcularSalarioColaboradorTotal (formated) {
      var custo = (this.calcularSalarioColaboradorTempoMedio() * this.calcularMediaContratacaoAnual())
      if (formated) return custo.toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })
      else return custo
    },
    /*###################################################################
    ################ Tempo Gestor e treinador Total #####################*/
    /**
     * Custo total do Gestor como treinador, por novo colaborador
     * @author Vinicius de Santana
    */
    calcularCustoTotalTreinamentoGestor (formated) {
      var custo = (this.calcVars.salario_hora_gestor * this.horasOrientaGestor)
      if (formated) return custo.toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })
      else return custo
    },
    /**
     * Custo total do acompanhamento, por novo colaborador
     * @author Vinicius de Santana
    */
    calcularCustoTotalTreinamentoTreinador (formated) {
      var custo = (this.custoHoraTreinador * this.horasTreinadorTotal)
      if (formated) return custo.toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })
      else return custo
    },
    /**
     * Custo total do treinamento, por novo colaborador
     * @author Vinicius de Santana
    */
    calcularCustoTreinamentoContratado (formated) {
      var custo = (this.custoHoraColabTreinamento * this.horasOrientaColab)
      if (formated) return custo.toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })
      else return custo
    },
    /**
     * Custo total do agregado, por novo colaborador
     * @author Vinicius de Santana
    */
    calcularCustoTotalTreinamentoPorColaborador (formated) {
      var custo = (
        this.calcularCustoTotalTreinamentoGestor() + 
        this.calcularCustoTotalTreinamentoTreinador() +
        this.calcularCustoTreinamentoContratado()
      )
      if (formated) return custo.toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })
      else return custo
    },
    /**
     * Custo total com treinamento dos novos colaboradores contratados
     * @author Vinicius de Santana
    */
    calcularCustoTotalTreinamento (formated) {
      var custo = (this.calcularCustoTotalTreinamentoPorColaborador() * this.calcularMediaContratacaoAnual())
      if (formated) return custo.toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })
      else return custo
    },
    /*###################################################################
    ################ Perda Produtividade #####################*/
    /**
     * Custo total da rescisão do colaborador contratado
     * @author Vinicius de Santana
    */
    calcularCustoRescisao (formated) {
      var fgts = this.calcVars.med_sal * this.calcVars.tempo_de_casa * this.fgts
      var multaFgts = fgts * this.fgtsMulta
      var decimoTerc = (this.calcVars.med_sal * this.calcVars.tempo_de_casa) / 12
      var multaDecimoTerc = decimoTerc * this.fgts
      var ferias = (this.calcVars.med_sal * this.calcVars.tempo_de_casa) / 12
      var tercoFerias = ferias / 3
      var custo = (fgts + multaFgts + decimoTerc + multaDecimoTerc + ferias + tercoFerias)
      if (formated) return custo.toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })
      else return custo
    },
    /**
     * Custo total da rescisão com novos colaboradores contratados
     * @author Vinicius de Santana
    */
    calcularCustoRescisaoTotal (formated) {
      var custo = (this.calcularCustoRescisao() * this.numFunc * this.calcVars.media_taxa_rotatividade) /100
      if (formated) return custo.toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })
      else return custo
    },
    /*###################################################################
    ################################# custo Total #####################*/
    /**
     * Soma de todos os custos
     * @author Vinicius de Santana
    */
    calcularCustoTotal (formated) {
      var custo = (
        this.calcularCustoRhTotal() + 
        this.calcularCustoGestorTotal() + 
        this.calcularSalarioColaboradorTotal() +
        this.calcularCustoTotalTreinamento() +
        this.calcularCustoRescisaoTotal()
      )
      if (formated) return custo.toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })
      else return custo
    },
    /**
     * Os custos por erros de contratação
     * @author Vinicius de Santana
    */
    calcularCustoErroContratacao (formated) {
      var custo = (this.calcularCustoTotal() * .8)
      if (formated) return custo.toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })
      else return custo
    },
    /*###################################################################
    ################ Outras Informações #####################*/
    /**
     * Quantidade de relatórios Que serão emitidos
     * @author Vinicius de Santana
    */
    calcularQtdDeRelatorios () {
      var qtdRelatorios = (this.calcularMediaContratacaoAnual() * (this.calcularMediaContratacaoAnual()-1))
      return qtdRelatorios
    },
  }
};
export default calcRotat