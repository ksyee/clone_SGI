$(() => {
  // index.html
  // ? header scroll event
  let prevScrollH = 0;

  $(window).scroll(() => {
    let scrollH = $(window).scrollTop();

    if (scrollH > 100) {
      if (prevScrollH < scrollH) {
        // scroll down
        $('#header').addClass('off');
        // identity_guarantee_insurance.html header-on
        scrollH >= 420 ? $('#section-2.prod-content .tab').removeClass('header-on') : '';
      } else {
        // scroll up
        $('#header').removeClass('off');
        // identity_guarantee_insurance.html header-on
        scrollH >= 420 ? $('#section-2.prod-content .tab').addClass('header-on') : '';
      }
    }

    prevScrollH = scrollH;

    if (scrollH >= 130) {
      $('#section-2.prod-content .panel .inner .item .img').eq(0).addClass('on');
      $('#section-2.prod-content .panel .inner .item .text').eq(0).css('transition-delay', '0.3s').addClass('on');
    }
    if (scrollH >= 560) {
      $('#section-2.prod-content .panel .inner .item .img').eq(1).addClass('on');
      $('#section-2.prod-content .panel .inner .item .text').eq(1).css('transition-delay', '0.3s').addClass('on');
    }
    if (scrollH >= 1000) {
      $('#section-2.prod-content .panel .inner .item .img').eq(2).addClass('on');
      $('#section-2.prod-content .panel .inner .item .text').eq(2).css('transition-delay', '0.3s').addClass('on');
    }
    if (scrollH >= 1300) {
      $('#section-2.prod-content .panel .inner .item .img').eq(3).addClass('on');
      $('#section-2.prod-content .panel .inner .item .text').eq(3).css('transition-delay', '0.3s').addClass('on');
    }
    if (scrollH >= 1300) {
      $('#section-2.prod-content .panel .guide-box').addClass('on');
      $('#section-2.prod-content .panel .confirmed').css('transition-delay', '0.3s').addClass('on');
    }

    // * tab menu fixed event
    if ($(window).scrollTop() >= 540) {
      $('#section-2.prod-content .tab').addClass('fixed');
    } else if ($(window).scrollTop() <= 420) {
      $('#section-2.prod-content .tab').removeClass('fixed');
    }
  });

  // ? section1 slider
  let swiper1 = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: 'fade',
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // ? section3 btn click event
  $('#section-3 .btn').click(function () {
    $('#section-3').toggleClass('view-all');
  });

  // ? section4 slider
  let swiper2_1 = new Swiper('.mySwiper-2-p1', {
    slidesPerView: 'auto',
    slideBetween: 3,
    loop: true,
    speed: 600,
    navigation: {
      nextEl: '.swiper-button-next-p1',
      prevEl: '.swiper-button-prev-p1',
    },
  });

  let swiper2_2 = new Swiper('.mySwiper-2-p2', {
    slidesPerView: 'auto',
    slideBetween: 3,
    loop: true,
    speed: 600,
    navigation: {
      nextEl: '.swiper-button-next-p2',
      prevEl: '.swiper-button-prev-p2',
    },
  });

  $('#section-4 .prod-page li button').click(e => {
    let index = $(e.currentTarget).data('index');

    $('#section-4 .prod-page li button').removeClass('active');
    $(e.currentTarget).addClass('active');

    if (index === 0) {
      setTimeout(() => {
        $('#section-4 .panel').removeClass('on');
        $('#section-4 .panel-1').addClass('on');
      });
      $('#section-4 .panel-2').css('display', 'none');
      $('#section-4 .panel-1').css('display', 'block');
    } else if (index === 1) {
      setTimeout(() => {
        $('#section-4 .panel').removeClass('on');
        $('#section-4 .panel-2').addClass('on');
      });
      $('#section-4 .panel-1').css('display', 'none');
      $('#section-4 .panel-2').css('display', 'block');
    }
  });

  // ? section6 slider
  let swiper3 = new Swiper('.mySwiper-3', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 3000,
    },
    navigation: {
      nextEl: '.swiper-button-next-2',
      prevEl: '.swiper-button-prev-2',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // ? footer slider
  let swiper4 = new Swiper('.mySwiper-4', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },
  });

  $('#footer .btn-pause').click(e => {
    $(e.currentTarget).toggleClass('play');
    if ($(e.currentTarget).hasClass('play')) {
      swiper4.autoplay.stop();
    } else {
      swiper4.autoplay.start();
    }
  });

  //* family site
  let familySite = $('#footer .family-site .site-list');
  let familySiteH = familySite.height();

  familySite.css('height', '0px').css('display', 'none');

  $('#footer .family-site > a').click(() => {
    familySite.css('display', 'block');
    setTimeout(() => {
      familySite.addClass('on').css('height', familySiteH + 'px');
    }, 10);
  });

  $('#footer .family-site .site-list li .btn-close').click(() => {
    familySite.css('height', '0px').removeClass('on');
    setTimeout(() => {
      familySite.css('display', 'none');
    }, 400);
  });

  // login.html
  // ? login form view
  $('#section-1.tab > ul > li').on('click', e => {
    let thisIndex = $(e.currentTarget).index();

    $('#section-1.tab > ul > li > button').removeClass('active');
    $('#section-2.login-box').children().removeClass('on');

    if (thisIndex === 0) {
      $(e.currentTarget).children('button').addClass('active');
      $('#section-2.login-box .individual-login').addClass('on');
    } else {
      $(e.currentTarget).children('button').addClass('active');
      $('#section-2.login-box .corporate-login').addClass('on');
    }
  });

  // ? tab menu
  let selectTab = elem => {
    elem.find('ul > li').on('click', e => {
      let thisIndex = $(e.currentTarget).index();

      elem.find('ul > li').removeClass('active');
      elem.find('ul > li').eq(thisIndex).addClass('active');

      elem.parent().find('.panel').removeClass('on');
      elem.parent().find('.panel').eq(thisIndex).addClass('on');
    });
  };

  selectTab($('#section-2.prod-content .tab'));

  // ? prod animation
  var scrollH = $(window).scrollTop();

  if (scrollH > 130) {
    $('#section-2.prod-content .panel .inner .item .img').addClass('on');
    $('#section-2.prod-content .panel .inner .item .text').css('transition-delay', '0.3s').addClass('on');
  }
  if (scrollH > 560) {
    $('#section-2.prod-content .panel .inner .item .img').eq(1).addClass('on');
    $('#section-2.prod-content .panel .inner .item .text').eq(1).css('transition-delay', '0.3s').addClass('on');
  }
  if (scrollH > 1000) {
    $('#section-2.prod-content .panel .inner .item .img').eq(2).addClass('on');
    $('#section-2.prod-content .panel .inner .item .text').eq(2).css('transition-delay', '0.3s').addClass('on');
  }
  if (scrollH > 1300) {
    $('#section-2.prod-content .panel .guide-box').addClass('on');
    $('#section-2.prod-content .panel .confirmed').css('transition-delay', '0.3s').addClass('on');
  }

  // ? question list view
  let itemQuestionH = $('.question-box > .q-list > .item > .q');

  $('.question-box > .q-list > .item').each((i, el) => {
    $(el).css('height', itemQuestionH.eq(i).height() + 'px');
  });

  $('.question-box > .q-list > .item > .q').on('click', e => {
    $('.question-box > .q-list > .item').each((i, el) => {
      $(el).css('height', itemQuestionH.eq(i).height() + 'px');
    });

    $(e.currentTarget).parent().toggleClass('active');

    if ($(e.currentTarget).parent().hasClass('active')) {
      $('.question-box > .q-list > .item').removeClass('active');
      $(e.currentTarget).parent().addClass('active');

      $(e.currentTarget)
        .parent()
        .css('height', $(e.currentTarget).height() + $(e.currentTarget).next().outerHeight() + 'px');
    }
  });

  // question.html
  $('#section-1.content > .tab > ul > li > a').on('click', e => {
    e.preventDefault();

    $('#section-1.content > .tab > ul > li > a').removeClass('active');
    $(e.currentTarget).addClass('active');

    $('#section-1.content > .panel').removeClass('on');
    $('#section-1.content > .panel').eq($(e.currentTarget).parent().index()).addClass('on');
  });

  // contract_inquiry.html
  let resultData = $('#section-3.find-result > .result > table > tbody > tr');

  if (resultData.find('td.no-data')) {
    resultData.find('td.no-data').append('<span>조회 내역이 없습니다.</span>');
  }
});
