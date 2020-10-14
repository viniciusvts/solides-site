/**
 * Comunicação com o servidor DNA
 * @author Vinicius de Santana
*/
const apiRest = {
/**
   * define a url base do app
 * @author Vinicius de Santana
 */
  baseURL: process.env.NODE_ENV === 'production' ? '/' : 'https://www.solides.com.br/',
  /**
   * Resgata lista de posts informando ou não qual página
   * @param {[]} args - args do endpoint do wordpress
   * @author Vinicius de Santana
   */
  getPosts(args) {
    let urlArgs = "";
    if (typeof args != 'undefined'){
      if (!Array.isArray(args))  throw new TypeError("O parametro precisa ser array");
      for (const key in args) {
        urlArgs += key + "=" + args[key] + "&";
      }
      //remove p último &
      urlArgs = urlArgs.substr(0, urlArgs.length-1);
    }
    let url = this.baseURL + 'wp-json/wp/v2/posts/';
    if (urlArgs.length > 0){
      url += "?" + urlArgs;
    }
    return fetch(url);
  },

  /**
   * Resgata uma página pelo seu id
   * @param {number} id - Id da página
   * @author Vinicius de Santana
   */
  getLPsById(id) {
    if (!Number.isInteger(id))  throw new TypeError("O parametro precisa ser um número inteiro");
    let url = this.baseURL + 'wp-json/wp/v2/lps/' + id;
    return fetch(url);
  },

  /**
   * Resgata uma página pelo seu id
   * @param {number} id - Id da página
   * @author Vinicius de Santana
   */
  getPageById(id) {
    if (!Number.isInteger(id))  throw new TypeError("O parametro precisa ser um número inteiro");
    let url = this.baseURL + 'wp-json/wp/v2/pages/' + id;
    return fetch(url);
  },
  /**
   * Resgata um produto pelo seu id
   * @param {number} id - Id da página
   * @author Vinicius de Santana
   */
  getProdutosById(id) {
    if (!Number.isInteger(id))  throw new TypeError("O parametro precisa ser um número inteiro");
    let url = this.baseURL + 'wp-json/wp/v2/produtos/' + id;
    return fetch(url);
  },
  /**
   * Resgata um ferramenta pelo seu id
   * @param {number} id - Id da página
   * @author Rafael Neves
   */
  getFerramentasById(id) {
    if (!Number.isInteger(id))  throw new TypeError("O parametro precisa ser um número inteiro");
    let url = this.baseURL + 'wp-json/wp/v2/ferramentas/' + id;
    return fetch(url);
  },

  /**
   * Resgata um menu baseado no location registrado pelo tema
   * @param {String} locationName - nome da posição registrada no tema
   * @param {Boolean} acf - define se quer o conteúdo do custom post
   * @author Vinicius de Santana
   */
  getMenuByLocationName(locationName, acf) {
    let url = this.baseURL + 'wp-json/dna_theme/v1/menu?menu_name=' + locationName;
    if (acf) url += '&acf=true'
    return fetch(url);
  },

  /**
   * Envia formulário para o wordpress
   * @param {String} url - Id do form que receberá a transação
   * @param {{}} data - objeto a ser enviado para o form
   * @author Vinicius de Santana
   */
  sendFormToWP(url, data) {
    if (typeof url == 'undefined') throw new TypeError("O parametro é obrigatório");
    if (typeof data == 'undefined') throw new TypeError("O parametro é obrigatório");
    //formar conteúdo
    let formData = new FormData;
    for (const key in data) {
      formData.append(key, data[key]);
    }
    return fetch(url, {
      method: "POST",
      body: formData
    });
  },

  /**
   * Envia a informação para o hubspot
   * @param {{
    firstname:String,
      email:String
      company: String,
      cargorh: String,
      tamanho_de_empresa: String,
      phone: String,
    }} data - nome da posição registrada no tema
   * @author Vinicius de Santana
   */
  sendToHS(data) {
    if (typeof data == 'undefined') throw new TypeError("O parametro é obrigatório");
    const url = "https://api.hsforms.com/submissions/v3/integration/submit/6009739/30d1dad9-c9dc-4d98-bf18-ec30d2c19da2"
    // monta os campos
    let dataForm = {
      fields: [
        {
          name: "email",
          value: data.email,
        },
        {
          name: "firstname",
          value: data.firstname,
        },
        {
          name: "company",
          value: data.company,
        },
        {
          name: "cargorh",
          value: data.cargorh,
        },
        {
          name: "jobtitle",
          value: data.jobtitle,
        },
        {
          name: "tamanho_de_empresa",
          value: data.tamanho_de_empresa,
        },
        {
          name: "phone",
          value: data.phone,
        },
      ],
      ///
      context: {
        hutk: this.getCookie("hubspotutk"),
        pageUri: window.location.href,
        pageName: "Site Sólides Trial Modal",
      },
      legalConsentOptions: {
        consent: {
          consentToProcess: true,
          text:
            "I agree to allow Example Company to store and process my personal data.",
          communications: [
            {
              value: true,
              subscriptionTypeId: 999,
              text:
                "I agree to receive marketing communications from Example Company.",
            },
          ],
        },
      },
    };
    // header
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(dataForm),
      headers: myHeaders
    });
  },

  /**
   * Envia a informação para o hubspot
   * @param {String} id - Id do formulário do hubspot
   * @param {{}} data - nome da posição registrada no tema
   * @author Vinicius de Santana
   */
  sendToHSWithId(id, data) {
    if (typeof data == 'undefined') throw new TypeError("O parametro é obrigatório");
    var url = "https://api.hsforms.com/submissions/v3/integration/submit/6009739/"
    url += id
    // monta os campos
    let dataForm = {
      fields: [
        {
          name: "email",
          value: data.email
        },
        {
          name: "firstname",
          value: data.firstname
        },
        {
          name: "company",
          value: data.company
        },
        {
          name: "cargorh",
          value: data.cargorh
        },
        {
          name: "jobtitle",
          value: data.jobtitle,
        },
        {
          name: "phone",
          value: data.phone
        },
        {
          name: "taxa_de_rotatividade",
          value: data.taxa_de_rotatividade
        },
        {
          name: "qtde_de_colaboradores",
          value: data.qtde_de_colaboradores
        },
        {
          name: "custo_de_rotatividade",
          value: data.custo_de_rotatividade
        }
      ],
      context: {
        pageUri: window.location.href,
        pageName: "Site Sólides Calculadora de Rotatividade"
      },
      legalConsentOptions: {
        consent: {
          consentToProcess: true,
          text: "I agree to allow Example Company to store and process my personal data.",
          communications: [
            {
              value: true,
              subscriptionTypeId: 999,
              text: "I agree to receive marketing communications from Example Company."
            }
          ]
        }
      }
    };
    // header
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(dataForm),
      headers: myHeaders
    });
  },

  /**
   * Envia a informação para ativar um novo trial
   * @param {Object} data - nome da posição registrada no tema
   * @author Vinicius de Santana
   */
  sendToTrial(data) {
    if (typeof data == 'undefined') throw new TypeError("O parametro é obrigatório");
    const url = "https://cit.solides.adm.br/trial";
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: myHeaders
    });
  },
  
  /** https://www.w3schools.com/js/js_cookies.asp */
  getCookie(cname) {
    let name = `${cname}=`;
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  },
};
export default apiRest;
