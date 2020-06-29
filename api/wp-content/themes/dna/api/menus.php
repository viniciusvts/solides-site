<?php
// create custom function to return nav menu
function custom_wp_menu($req) {
    // Replace your menu name, slug or ID carefully
    return wp_get_nav_menu_items($req->get_param('menu_name'));
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
        )
    ));
});