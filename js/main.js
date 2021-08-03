'use strict';

jQuery( ".drawer-icon" ).click(function () {
    jQuery(this).toggleClass('active');
    jQuery("html").toggleClass('fixed');
    jQuery(".drawer").toggleClass('panelactive');
});

jQuery( ".drawer a" ).click(function () {
    jQuery("html").removeClass('fixed');
    jQuery(".drawer-icon").removeClass('active');
    jQuery(".drawer").removeClass('panelactive');
});

// #から始まるURLがクリックされた時
jQuery('a[href^="#"]').on('click', function() {
    // 移動速度を指定（ミリ秒）
    let speed = 500;
    // hrefで指定されたidを取得
    let id = jQuery(this).attr("href");
    // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
    let target = jQuery("#" == id ? "html" : id);
    // ページのトップを基準にターゲットの位置を取得
    let position = jQuery(target).offset().top;
    // ターゲットの位置までspeedの速度で移動
    if (id === "#") {
        jQuery("html, body").animate(
            {
                scrollTop: position
            },
            speed
        );
    } else if (jQuery(window).width() < 768) {
        jQuery("html, body").delay(400).animate(
            {
                scrollTop: position
            },
            speed
        );
    } else {
        jQuery("html, body").animate(
            {
                scrollTop: position
            },
            speed
        );
    }
    return false;
});