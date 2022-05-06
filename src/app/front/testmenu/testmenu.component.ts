import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var $: any;
import { elementAt } from 'rxjs';
// import { NgwWowModule } from 'ngx-wow';
import { WOW } from 'wowjs/dist/wow.min';
// import {NgwWowService } from 'ngx-wow';
@Component({
  selector: 'app-testmenu',
  templateUrl: './testmenu.component.html',
  styleUrls: ['./testmenu.component.css'],
})
export class TestmenuComponent implements OnInit, AfterViewInit {
  constructor() {}
  ngAfterViewInit(): void {
    scriptready();
  }
  ngOnInit(): void {
    scriptinit();
  }
}

function scriptready() {
  // $('button').on('click', (element) => {
  //   alert($(element.target).text());
  // });
  // $('button').each((i, ele) => {
  //   alert($(ele).text());
  // });
  $('[data-background]').each((element) => {
    $(element.target).css(
      'background-image',
      'url(' + $(element.target).attr('data-background') + ')'
    );
  });
  $('.hero-slider').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    margin: -1,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    items: 1,
    navText: [
      "<i class='fas fa-arrow-left'></i>",
      "<i class='fas fa-arrow-right'></i>",
    ],
  });

  $('.hero-slider').on('change.owl.carousel', function (event) {
    new WOW({ live: false }).init();
  });
  $(document).on('ready', function () {});

  // partner-slider
  // alert($('.partner-slider').html());
  $('.partner-slider').owlCarousel({
    loop: true,
    margin: 25,
    nav: false,
    navText: [
      "<i class='icofont-long-arrow-left'></i>",
      "<i class='icofont-long-arrow-right'></i>",
    ],
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 6,
      },
    },
  });

  // testimonial-slider
  $('.testimonial-slider').owlCarousel({
    loop: true,
    nav: false,
    navText: [
      "<i class='icofont-long-arrow-left'></i>",
      "<i class='icofont-long-arrow-right'></i>",
    ],
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  });

  // room-details-slider
  $('.room-details-slider').owlCarousel({
    loop: true,
    nav: true,
    navText: [
      "<i class='fal fa-long-arrow-left'></i>",
      "<i class='fal fa-long-arrow-right'></i>",
    ],
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  var progressBar = $('.progress');
  if (progressBar.length) {
    progressBar.each((element) => {
      var Self = $(element.target);
      Self.appear(function () {
        var progressValue = Self.data('value');
        Self.find('.progress-bar').animate(
          {
            width: progressValue + '%',
          },
          1000
        );
      });
    });
  }
  // $('html').css('overflow', 'hidden');
}

function scriptinit() {
  $('html').css('overflow-x', 'initial');
  $('.dropdown-menu a.dropdown-toggle').on('click', (element) => {
    alert('test');
    let cible = element.target;
    if (!$(cible).next().hasClass('show')) {
      $(cible)
        .parents('.dropdown-menu')
        .first()
        .find('.show')
        .removeClass('show');
    }
    var $subMenu = $(cible).next('.dropdown-menu');
    $subMenu.toggleClass('show');
    $(element.target)
      .parents('li.nav-item.dropdown.show')
      .on('hidden.bs.dropdown', function (e) {
        $(e.target).removeClass('show');
      });
    return false;
  });

  new WOW({ live: false }).init();

  // nice select
  $('.select').niceSelect();

  // fun fact counter
  $('.counter').countTo();
  $('.counter-box').appear(
    function () {
      $('.counter').countTo();
    },
    {
      accY: -100,
    }
  );

  $('.popup-gallery').magnificPopup({
    delegate: '.popup-img',
    type: 'image',
    gallery: {
      enabled: true,
    },
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });

  $(window).scroll(function () {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      $('#scroll-top').fadeIn('slow');
    } else {
      $('#scroll-top').fadeOut('slow');
    }
  });

  $('#scroll-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1500);
    return false;
  });

  $(window).scroll((element) => {
    if ($(element.target).scrollTop() > 50) {
      $('.navbar').addClass('fixed-top');
      // alert('showme');
    } else {
      $('.navbar').removeClass('fixed-top');
      // alert('showme');
    }
  });

  if ($('.date-picker').length) {
    $(function () {
      $('.date-picker').datepicker();
    });
  }

  if ($('#countdown').length) {
    $('#countdown').countdown('2025/01/30', (element) => {
      $(element.target).html(
        element.strftime(
          '' +
            '<div class="row">' +
            '<div class="col countdown-single">' +
            '<h2 class="mb-0">%-D</h2>' +
            '<h5 class="mb-0">Day%!d</h5>' +
            '</div>' +
            '<div class="col countdown-single">' +
            '<h2 class="mb-0">%H</h2>' +
            '<h5 class="mb-0">Hours</h5>' +
            '</div>' +
            '<div class="col countdown-single">' +
            '<h2 class="mb-0">%M</h2>' +
            '<h5 class="mb-0">Minutes</h5>' +
            '</div>' +
            '<div class="col countdown-single">' +
            '<h2 class="mb-0">%S</h2>' +
            '<h5 class="mb-0">Seconds</h5>' +
            '</div>' +
            '</div>'
        )
      );
    });
  }

  // price range slider
  if ($('.price-range').length) {
    $('.price-range').slider({
      range: true,
      min: 0,
      max: 999,
      values: [100, 500],
      slide: function (event, ui) {
        $('#price-amount').val('$' + ui.values[0] + ' - $' + ui.values[1]);
      },
    });

    $('#price-amount').val(
      '$' +
        $('.price-range').slider('values', 0) +
        ' - $' +
        $('.price-range').slider('values', 1)
    );
  }

  //cart quantity
  $('.plus-btn').on('click', (element) => {
    var i = $(element.target).closest('.cart-qty').children('.quantity').get(0)
        .value++,
      c = $(element.target).closest('.cart-qty').children('.minus-btn');
    i > 0 && c.removeAttr('disabled');
  }),
    $('.minus-btn').on('click', (element) => {
      2 ==
        $(element.target).closest('.cart-qty').children('.quantity').get(0)
          .value-- && $(element.target).attr('disabled', 'disabled');
    });
}
