var departments = [
  'Transport',
  'Payments',
  'Food Delivery',
  'Logistics',
  'Entertainment',
  'Lifestyle Services',
]

$('#products-carousel').slick({
  arrows: true,
  dots: true,
  customPaging: function (slider, i) {
    var thumb = $(slider.$slides[i]).data()
    return '<a class="dot">' + departments[i] + '</a>'
  },
})

$('#opensource-carousel').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 5,
})

$('#products-carousel').on('beforeChange', function (
  event,
  slick,
  currentSlide,
  nextSlide
) {
  const className = departments[nextSlide].replace(/\s+/g, '-').toLowerCase()
  $('#products')
    .removeClass()
    .addClass('full-height d-flex align-items-center py-5 ' + className)
})
