/**
 * define a url base do app
 * @author Vinicius de Santana
*/
const baseURL = process.env.NODE_ENV === 'production' ? '/' : 'http://solides.localhost/';
/**
 * Comunicação com o servidor DNA
 * @author Vinicius de Santana
 */
const apiRest = {

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
    let url = baseURL + 'api/wp-json/wp/v2/posts/';
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
    let url = baseURL + 'api/wp-json/wp/v2/lps/' + id;
    return fetch(url);
  },

  /**
   * Resgata uma página pelo seu id
   * @param {number} id - Id da página
   * @author Vinicius de Santana
   */
  getPageById(id) {
    if (!Number.isInteger(id))  throw new TypeError("O parametro precisa ser um número inteiro");
    let url = baseURL + 'api/wp-json/wp/v2/pages/' + id;
    return fetch(url);
  },
};
export default apiRest;
