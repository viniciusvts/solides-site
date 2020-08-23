<?php
function custom_lps() {
	$labels = array(
		'name'                  => _x( 'Landing Pages', 'Post Type General Name', 'text_domain' ),
		'singular_name'         => _x( 'Landing Page', 'Post Type Singular Name', 'text_domain' ),
		'menu_name'             => __( 'Landing Pages', 'text_domain' ),
		'name_admin_bar'        => __( 'Landing Page', 'text_domain' ),
		'archives'              => __( 'Landing Pages Arquivadas', 'text_domain' ),
		'parent_item_colon'     => __( 'Item pai:', 'text_domain' ),
		'all_items'             => __( 'Todos as Landing Pages', 'text_domain' ),
		'add_new_item'          => __( 'Adicionar nova Landing Page', 'text_domain' ),
		'add_new'               => __( 'Adicionar nova', 'text_domain' ),
		'new_item'              => __( 'Nova Landing Page', 'text_domain' ),
		'edit_item'             => __( 'Editar Landing Page', 'text_domain' ),
		'update_item'           => __( 'Atualizar Landing Page', 'text_domain' ),
		'view_item'             => __( 'Ver Landing Page', 'text_domain' ),
		'search_items'          => __( 'Buscar Landing Page', 'text_domain' ),
		'not_found'             => __( 'Nenhum cadastrado', 'text_domain' ),
		'not_found_in_trash'    => __( 'Nenhum na lixeira', 'text_domain' ),
		'featured_image'        => __( 'Imagem destaque', 'text_domain' ),
		'set_featured_image'    => __( 'Definir imagem', 'text_domain' ),
		'remove_featured_image' => __( 'Remover imagem', 'text_domain' ),
		'use_featured_image'    => __( 'Usar imagem Landing Page', 'text_domain' ),
		'insert_into_item'      => __( 'Inserir no Landing Page', 'text_domain' ),
		'uploaded_to_this_item' => __( 'Subir para Landing Page', 'text_domain' ),
		'items_list'            => __( 'Lista de Landing Pages', 'text_domain' ),
		'items_list_navigation' => __( 'Navegar pelos Landing Pages', 'text_domain' ),
		'filter_items_list'     => __( 'Filtrar Landing Pages', 'text_domain' ),
	);
	$args = array(
		'label'                 => __( 'Landing Pages', 'text_domain' ),
		'description'           => __( 'Cadastrar LPs', 'text_domain' ),
		'labels'                => $labels,
		'supports'              => array( 'title', 'thumbnail', ),
		'taxonomies'            => array( 'categoria_Landing Pages' ),
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		"show_in_rest"			=> true,
		'menu_position'         => 5,
		'menu_icon'				=> 'dashicons-welcome-widgets-menus',		
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => true,		
		'exclude_from_search'   => true,
		'publicly_queryable'    => true,
		'capability_type'       => 'page',
	);
	register_post_type( 'lps', $args );
}
add_action( 'init', 'custom_lps', 0 );


// Register Custom Post Type Categoria
function lps_taxonomy() {
	$labels = array(
		'name'                       => _x( 'Categorias da LP', 'Taxonomy General Name', 'dna' ),
		'singular_name'              => _x( 'Categoria da LP', 'Taxonomy Singular Name', 'dna' ),
		'menu_name'                  => __( 'Categorias', 'dna' ),
		'all_items'                  => __( 'Todas as categorias', 'dna' ),
		'parent_item'                => __( 'Categoria Mãe', 'dna' ),
		'parent_item_colon'          => __( 'Categoria mãe:', 'dna' ),
		'new_item_name'              => __( 'Nova Categoria de LP', 'dna' ),
		'add_new_item'               => __( 'Adicionar Categoria de LP', 'dna' ),
		'edit_item'                  => __( 'Editar Categoria de LP', 'dna' ),
		'update_item'                => __( 'Atualizar Categoria de LP', 'dna' ),
		'view_item'                  => __( 'Ver Categoria de LP', 'dna' ),
		'separate_items_with_commas' => __( 'Separar categorias por vírgula', 'dna' ),
		'add_or_remove_items'        => __( 'Adicionar ou remover Categoria de LP', 'dna' ),
		'choose_from_most_used'      => __( 'Mostrar categorias mais usadas', 'dna' ),
		'popular_items'              => __( 'Categorias populares', 'dna' ),
		'search_items'               => __( 'Buscar Categoria de LP', 'dna' ),
		'not_found'                  => __( 'Nada encontrado', 'dna' ),
		'no_terms'                   => __( 'Nenhuma Categoria de LP', 'dna' ),
		'items_list'                 => __( 'Lista de categorias', 'dna' ),
		'items_list_navigation'      => __( 'Navegar por Categoria de LP', 'dna' ),
	);
	$rewrite = array(
		'slug'                       => 'lps',
		'with_front'                 => false,
		'hierarchical'               => true,
	);
	$args = array(
		'labels'                     => $labels,
		'hierarchical'               => true,
		'public'                     => true,
		'show_ui'                    => true,
		'show_admin_column'          => true,
		'show_in_nav_menus'          => true,
		'show_tagcloud'              => true,
		"show_in_rest"				 => true,
		'rewrite'                    => $rewrite,
	);
	register_taxonomy( 'lps-cat', array( 'lps' ), $args );
}
add_action( 'init', 'lps_taxonomy', 0 );
