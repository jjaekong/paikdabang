(function($) {

    var exchangeSwiper, exchangeSwiperIndex = 0;
    var voucherSwiper, voucherSwiperIndex = 0;

    $('#exchange-tab').on('shown.bs.tab', function (e) {
        if (!exchangeSwiper || exchangeSwiper.destroyed) {
            if ($('#exchange .swiper-container .swiper-slide').length > 1) {
                exchangeSwiper = new Swiper ('#exchange .top-banner.swiper-container', {
                    loop: true,
                    initialSlide: exchangeSwiperIndex,
                    autoplay: {
                        delay: 3000,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    on: {
                        slideChange: function() {
                            exchangeSwiperIndex = this.realIndex
                        }
                    }
                });
            }
        }
    });

    $('#exchange-tab').on('hidden.bs.tab', function (e) {
        if (exchangeSwiper) {
            exchangeSwiper.destroy(true, false);
        }
    });

    $('#voucher-tab').on('shown.bs.tab', function (e) {
        if (!voucherSwiper || voucherSwiper.destroyed) {
            if ($('#voucher .swiper-container .swiper-slide').length > 1) {
                voucherSwiper = new Swiper ('#voucher .swiper-container', {
                    // loop: true,
                    initialSlide: voucherSwiperIndex,
                    autoplay: {
                        delay: 3000,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    on: {
                        slideChange: function() {
                            voucherSwiperIndex = this.realIndex
                        }
                    }
                });
            }
        }
    });

    $('#voucher-tab').on('hidden.bs.tab', function (e) {
        if (voucherSwiper) {
            voucherSwiper.destroy(true, false);
        }
    });

})(jQuery);

