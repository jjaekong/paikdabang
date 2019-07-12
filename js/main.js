(function($) {

    var exchangeTopSwiper, exchangeBottomSwiper, voucherSwiper;

    $('#exchange-tab').on('shown.bs.tab', function (e) {
        if (exchangeTopSwiper) {
            exchangeTopSwiper.update()
        } else {
            exchangeTopSwiper = new Swiper ('#exchange .top-banner.swiper-container', {
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                },
            });
        }
    });

    $('#exchange-tab').on('shown.bs.tab', function (e) {
        if (exchangeBottomSwiper) {
            exchangeBottomSwiper.update()
        } else {
            exchangeBottomSwiper = new Swiper ('#exchange .bottom-banner.swiper-container', {
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                },
            });
        }
    });

    $('#voucher-tab').on('shown.bs.tab', function (e) {
        if (voucherSwiper) {
            voucherSwiper.update()
        } else {
            voucherSwiper = new Swiper ('#voucher .swiper-container', {
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                },
            });
        }
    });

    $('#exchange-tab').tab('show');

})(jQuery);