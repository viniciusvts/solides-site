<?php
// create custom function to return nav menu
function custom_wp_menu($req) {
  $theme_location = $req->get_param('menu_name');
  $acf = $req->get_param('acf');
  /** um array com o nome dos menus como chave e seus ids */
  $theme_locations = get_nav_menu_locations();
  $menu_obj = get_term( $theme_locations[ $theme_location ], 'nav_menu' );
  if ( $menu_obj ){
    if ($acf) return get_fields($menu_obj);
    else return wp_get_nav_menu_items( $menu_obj->term_id);
  } else return $menu_obj;
}

// create new endpoint route
add_action( 'rest_api_init', function () {
    register_rest_route( 'dna_theme/v1', 'menu', array(
        'methods' => 'GET',
        'callback' => 'custom_wp_menu',
        'description' => 'recupera a lista de clientes no portifólio',
        'args' => array(
          'menu_name' => array(
            'required' => false,
            'description' => 'Valor irá indicar quantos itens por página será entregue',
            'default' => 'main-menu'
          )
        ),
        'permission_callback' => '__return_true'
    ));
});