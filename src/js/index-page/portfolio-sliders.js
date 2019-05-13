export default () => {
  const fullScreenClassName = 'slider-wrap-full-screen';
  const $buttonResizeSlider = $('.button-resize-slider');
  const $portfolioItemSlider = $('.slider-slick-portfolio-item');

  // const $sliderVKApp = $('.slider-vk-app');
  // const $wrapSliderVKApp = $('#sliderVKApp');
  // const $buttonResizeSliderVKApp = $('#sliderVKApp .fi-arrows-out');

  // const $sliderZernoport = $('.slider-zernoport');
  // const $wrapSliderZernoport = $('#sliderZernoport');
  // const $buttonResizeSliderZernoport = $('#sliderZernoport .fi-arrows-out');

  const slickConfig = {
    infinite: false,
    dots: true,
  };

  function toggleResize($button, $wrapSlider) {
    $button.find('i').toggleClass('fi-arrows-in');
    $button.find('i').toggleClass('fi-arrows-out');
    $wrapSlider.toggleClass(fullScreenClassName);
  }

  // $buttonResizeSliderVKApp.click(() => {
  //   toggleResize($buttonResizeSliderVKApp, $wrapSliderVKApp);
  // });
  //
  // $buttonResizeSliderZernoport.click(() => {
  //   toggleResize($buttonResizeSliderZernoport, $wrapSliderZernoport);
  // });

  $buttonResizeSlider.click(function() {
    toggleResize($(this), $(this).parent());
  });

  $portfolioItemSlider.slick(slickConfig);
  // $sliderVKApp.slick(slickConfig);
  // $sliderZernoport.slick(slickConfig);
};
