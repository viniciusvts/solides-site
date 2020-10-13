<?php

/**
 * Atende a requisição enviando um email para o adm do site
 * @author Vinicius de Santana
 */
function dnaapi_falarComEspecialista($req){
  // pega os parametros
  $nome = $req->get_param('nome');
  $email = $req->get_param('email');
  $telefone = $req->get_param('telefone');
  $cargo = $req->get_param('cargo');
  $uriOrigem = $req->get_param('uriOrigem');
  // envia email
  $to = get_option('admin_email');
  $subject = 'Sólides Market Place - contato com o parceiro';
  $message = "Nome: ".$nome
      ."<br>Email: ".$email
      ."<br>telefone: ".$telefone
      ."<br>cargo: ".$cargo
      ."<br>uriOrigem: ".$uriOrigem;
  $headers = array('Content-Type: text/html; charset=UTF-8');
  $wpmail = wp_mail( $to, $subject, $message, $headers );
  $uriOrigem = $uriOrigem;
  $url = '/obrigado/?uriOrigem='. $uriOrigem;
  wp_redirect($url);
  exit;
}

/**
 * Atende a requisição enviando um email para o adm do site
 * @author Vinicius de Santana
 */
function dnaapi_contato($req){
  // pega os parametros
  $nome = $req->get_param('nome');
  $email = $req->get_param('email');
  $telefone = $req->get_param('telefone');
  $mensagem = $req->get_param('mensagem');
  $uriOrigem = $req->get_param('uriOrigem');
  // envia email
  $to = get_option('admin_email');
  $subject = 'Sólides Market Place - contato com o parceiro';
  $message = "Nome: ".$nome
      ."<br>Email: ".$email
      ."<br>telefone: ".$telefone
      ."<br>mensagem: ".$mensagem
      ."<br>uriOrigem: ".$uriOrigem;
  $headers = array('Content-Type: text/html; charset=UTF-8');
  $wpmail = wp_mail( $to, $subject, $message, $headers );
  $uriOrigem = $uriOrigem;
  $url = '/obrigado/?uriOrigem='. $uriOrigem;
  wp_redirect($url);
  exit;
}

/**
 * Atende a requisição enviando um email para o adm do site
 * @author Vinicius de Santana
 */
function dnaapi_pedirUmaDemo($req){
  // pega os parametros
  $nome = $req->get_param('nome');
  $email = $req->get_param('email');
  $empresa = $req->get_param('empresa');
  $cargo = $req->get_param('cargo');
  $numColab = $req->get_param('numColab');
  $telefone = $req->get_param('telefone');
  $uriOrigem = $req->get_param('uriOrigem');
  // envia email
  $to = get_option('admin_email');
  $subject = 'Sólides Market Place - contato com o parceiro';
  $message = "Nome: ".$nome
      ."<br>Email: ".$email
      ."<br>empresa: ".$empresa
      ."<br>cargo: ".$cargo
      ."<br>numColab: ".$numColab
      ."<br>telefone: ".$telefone
      ."<br>uriOrigem: ".$uriOrigem;
  $headers = array('Content-Type: text/html; charset=UTF-8');
  $wpmail = wp_mail( $to, $subject, $message, $headers );
  $uriOrigem = $uriOrigem;
  $url = '/obrigado/?uriOrigem='. $uriOrigem;
  wp_redirect($url);
  exit;
}

/**
 * Atende a requisição enviando um email para o adm do site
 * @author Vinicius de Santana
 */
function dnaapi_calcRotat($req){
  // pega os parametros
  $reqData = array(
    'email' => $req->get_param('email'),
    'firstname' => $req->get_param('firstname'),
    'company' => $req->get_param('company'),
    'cargorh' => $req->get_param('cargorh'),
    'phone' => $req->get_param('phone'),
    'taxa_de_rotatividade' => $req->get_param('taxa_de_rotatividade'),
    'qtde_de_colaboradores' => $req->get_param('qtde_de_colaboradores'),
    'custo_de_rotatividade' => $req->get_param('custo_de_rotatividade')
  );
  // envia email
  $to = $reqData['email'];
  $subject = 'Sólides - Calculadora de Rotatividade';
  $message = criaMensagemSimplesCalculadora($reqData);
  $headers = array('Content-Type: text/html; charset=UTF-8');
  $wpmail = wp_mail( $to, $subject, $message, $headers );
  return array('enviado' => $wpmail);
}

/**
 * Função registra os endpoints
 * @author Vinicius de Santana
 */
function dnaapi_register_ccp(){
  //falar com especialista
  register_rest_route('dna_theme/v1',
    '/falar-com-especialista',
    array(
      'methods' => 'POST',
      'callback' => 'dnaapi_falarComEspecialista',
      'description' => 'recebe as informações do form e envia um email notificando o adm do site',
      'args' => array(
        'nome' => array(
          'required' => true,
        ),
        'email' => array(
          'required' => true,
        ),
        'telefone' => array(
          'required' => true,
        ),
        'cargo' => array(
          'required' => true,
        ),
      ),
      'permission_callback' => '__return_true'
    )
  );
  //contato
  register_rest_route('dna_theme/v1',
    '/contato',
    array(
      'methods' => 'POST',
      'callback' => 'dnaapi_contato',
      'description' => 'recebe as informações do form e envia um email notificando o adm do site',
      'args' => array(
        'nome' => array(
          'required' => true,
        ),
        'email' => array(
          'required' => true,
        ),
        'telefone' => array(
          'required' => true,
        ),
        'mensagem' => array(
          'required' => true,
        ),
      ),
      'permission_callback' => '__return_true'
    )
  );
  //pedir uma demo
  register_rest_route('dna_theme/v1',
    '/pedir-uma-demo',
    array(
      'methods' => 'POST',
      'callback' => 'dnaapi_pedirUmaDemo',
      'description' => 'recebe as informações do form e envia um email notificando o adm do site',
      'args' => array(
        'nome' => array(
          'required' => true,
        ),
        'email' => array(
          'required' => true,
        ),
        'empresa' => array(
          'required' => true,
        ),
        'cargo' => array(
          'required' => true,
        ),
        'numColab' => array(
          'required' => true,
        ),
        'telefone' => array(
          'required' => true,
        ),
      ),
      'permission_callback' => '__return_true'
    )
  );
  //calculadora de rotatividade
  register_rest_route('dna_theme/v1',
    '/calculadora-de-rotatividade',
    array(
      'methods' => 'POST',
      'callback' => 'dnaapi_calcRotat',
      'description' => 'recebe as informações do form e envia um email notificando o adm do site',
      'args' => array(
        'firstname' => array(
          'required' => true,
        ),
        'email' => array(
          'required' => true,
        ),
        'company' => array(
          'required' => true,
        ),
        'cargorh' => array(
          'required' => true,
        ),
        'phone' => array(
          'required' => true,
        ),
        'taxa_de_rotatividade' => array(
          'required' => true,
        ),
        'qtde_de_colaboradores' => array(
          'required' => true,
        ),
        'custo_de_rotatividade' => array(
          'required' => true,
        ),
      ),
      'permission_callback' => '__return_true'
    )
  );
}

add_action('rest_api_init', 'dnaapi_register_ccp');


// funções auxiliares da api
/**
 * Cria a mensagem dá página contato com os parametros passados
 * 
 * @param array $data - informações do formulário
 * @return string  - o html para enviar o email
 * @author Vinicius de Santana
*/
function criaMensagemTabelaCalculadora($data){
  // inicio mensagem
  $message = '<div style="font-family: Arial, sans-serif;margin: 40px auto;width: 550px;">';
  $message .=   '<table>';
  $message .=     '<tbody><tr>';
  $message .=     '<td><img src="https://solides.com.br/wp-content/uploads/2020/09/solides-logo-64.png" width="100" height="100"></td>';
  $message .=     '<td><h1 style="margin-left: 30px;font-weight: 800;margin-bottom: 0;line-height: 35px;">Calculadora de rotatividade</h1>';
  $message .=     '<h3 style="font-weight: 100;margin-left: 30px;margin-top: 0;">';
  $message .=       'Acesse seu relatório completo na ';
  $message .=       '<a href="https://solides.com.br/rotatividade-resultado/?numFunc=';
  $message .=       $data['qtde_de_colaboradores'];
  $message .=       '&taxaRot=';
  $message .=       $data['taxa_de_rotatividade'];
  $message .=       '">Sólides</a>';
  $message .=     '</h3></td>';
  $message .=     '</tr></tbody>';
  $message .=   '</table>';
  $message .=   '<table style="font-family: Arial, sans-serif;background-color: #eee;margin: 20px 40px 50px 40px;border-radius: 6px;min-width: 450px;">';
  $message .=     '<tbody>';
  if (isset($data['company'])){
    $message .=     '<tr>';
    $message .=       '<td style="padding: 10px 20px;">Empresa:</td>';
    $message .=       '<td style="padding: 10px 20px; font-size: 18px;">';
    $message .=         $data['company'];
    $message .=       '</td>';
    $message .=     '</tr>';
  }
  if (isset($data['taxa_de_rotatividade'])){
    $message .=     '<tr>';
    $message .=       '<td style="padding: 10px 20px;">Taxa de rotatividade:</td>';
    $message .=       '<td style="padding: 10px 20px; font-size: 18px;">';
    $message .=         $data['taxa_de_rotatividade'];
    $message .=       '</td>';
    $message .=     '</tr>';
  }
  if (isset($data['qtde_de_colaboradores'])){
    $message .=     '<tr>';
    $message .=       '<td style="padding: 10px 20px;">Quantidade de colaboradores:</td>';
    $message .=       '<td style="padding: 10px 20px; font-size: 18px;">';
    $message .=         $data['qtde_de_colaboradores'];
    $message .=       '</td>';
    $message .=     '</tr>';
  }
  if (isset($data['custo_de_rotatividade'])){
    $message .=     '<tr>';
    $message .=       '<td style="padding: 10px 20px;">custo total da rotatividade</td>';
    $message .=       '<td style="padding: 10px 20px; font-size: 18px;">';
    $message .=         'R$ ' . $data['custo_de_rotatividade'];
    $message .=       '</td>';
    $message .=     '</tr>';
  }
  $message .=     '</tbody>';
  $message .=   '</table>';
  $message .=   '<p style="font-family: Arial, sans-serif;font-weight: 100;font-style: italic;">Enviado pelo site Sólides.</p>';
  $message .= '</div>';
  return $message;
  // fim mensagem
}
/**
 * Cria um email simples com os parametros passados
 * 
 * @param array $data - informações do formulário
 * @return string  - o html para enviar o email
 * @author Vinicius de Santana
*/
function criaMensagemSimplesCalculadora($data){
  // inicio mensagem
 $mensagem = '<p style="text-align: left;"><span style="font-weight: 400;">Oi '.$data['firstname'].', tudo bem? </span></p>';
 $mensagem .= '<p style="text-align: left;"><span style="font-weight: 400;">Aqui está o relatório completo com as informações sobre a rotatividade da sua empresa. Por meio dele, você saberá os resultados e prejuízos reais com contratações erradas. </span></p>';
 $mensagem .= '<p style="text-align: left;"></p>';
 $mensagem .= '<a href="https://solides.com.br/ferramentas/rotatividade-resultado/?numFunc='.$data['qtde_de_colaboradores'].'&taxaRot='.$data['taxa_de_rotatividade'].'">';
 $mensagem .= '<p style="text-align: left;"><span style="font-weight: 400;">ACESSAR RELATÓRIO COMPLETO</span></p>';
 $mensagem .= '</a>';
 $mensagem .= '<p style="text-align: left;"><span style="font-weight: 400;">';
 $mensagem .= '</span><b>Reduza seus custos de rotatividade com a Sólides</b><span style="font-weight: 400;"><br>';
 $mensagem .= '</span><span style="font-weight: 400;"> Pare de perder dinheiro! Clientes Sólides têm diminuído até 37% da rotatividade com nossa solução gerando impactos financeiros positivos. Agende uma demonstração gratuita com um especialista em rotatividade e saiba como podemos te ajudar!</span><span style="font-weight: 400;">';
 $mensagem .= '</span><span style="font-weight: 400;"> </span></p>';
 $mensagem .= '<p style="text-align: left;"><a href="https://solides.com.br/pedir-uma-demo/"><span style="font-weight: 400;">Agendar Demonstração Gratuita </span></a></p>';
  return $mensagem;
  // fim mensagem
}