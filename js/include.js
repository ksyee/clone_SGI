$(function () {
  // header, footer include
  let headerPath = $('header#header-wrap').data('include');
  let footerPath = $('footer#footer').data('include');

  $('header').load(headerPath);
  $('header').removeAttr('data-include');

  $('footer').load(footerPath);
  $('footer').removeAttr('data-include');
});
