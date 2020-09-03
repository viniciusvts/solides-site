<?php get_header(); ?>
    <noscript>
      <strong>Nosso site não funciona sem JavaScript, ative-o por gentileza</strong>
    </noscript>
    <div id=app>
      <div class="loading-in-html">
        <img src="/wp-content/uploads/2020/09/LoadP.gif" alt="Logo da sólides animado" srcset="">
        <style>
          .loading-in-html {
            background: white;
            width: 100vw;
            height: 100vh;
            position: absolute;
            z-index: 10;
            img{
                width: $width;
                height: $width;
                position: absolute;
                top: 50%;
                margin-top: -$width / 2;
                left: 50%;
                margin-left: -$width / 2;
            }
          }
        </style>
      </div>
    </div>
<?php get_footer() ?>