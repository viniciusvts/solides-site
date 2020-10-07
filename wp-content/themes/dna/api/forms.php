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
  $email = $req->get_param('email');
  $firstname = $req->get_param('firstname');
  $company = $req->get_param('company');
  $cargorh = $req->get_param('cargorh');
  $phone = $req->get_param('phone');
  $taxa_de_rotatividade = $req->get_param('taxa_de_rotatividade');
  $qtde_de_colaboradores = $req->get_param('qtde_de_colaboradores');
  $custo_de_rotatividade = $req->get_param('custo_de_rotatividade');
  // envia email
  $to = get_option('admin_email');
  $subject = 'Sólides Market Place - contato com o parceiro';
  $message = "Nome: ".$firstname
      ."<br>Email: ".$email
      ."<br>empresa: ".$company
      ."<br>cargo: ".$cargorh
      ."<br>telefone: ".$phone
      ."<br>Taxa de rotatividade: ".$taxa_de_rotatividade
      ."<br>Qtd de colaboradores: ".$qtde_de_colaboradores
      ."<br>Custo de rotatividade: ".$custo_de_rotatividade;
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