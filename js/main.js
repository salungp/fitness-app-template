$(document).on('scroll', function() {
	let scroll = $(document).scrollTop();
	let navbar = $('.navbar');

	if (scroll > 500) {
		navbar.addClass('fixed-top');
	} else if(scroll < 500) {
		navbar.removeClass('fixed-top');
	}
});

const $grid = $('.filter-item').isotope({
	layoutMode: 'fitRows'
});

$('.filter-link').on('click', 'button', function() {
	let value = $(this).attr('data-filter');

	$grid.isotope({filter: value});
});

const map = new ol.Map({
	target: 'map',
	layers: [
		new ol.layer.Tile({
			source: new ol.source.OSM()
		})
	],
	view: new ol.View({
		center: ol.proj.fromLonLat([37.41, 8.82]),
		zoom: 4
	})
})

$('.filter-item').magnificPopup({
	delegate: 'a',
	type: 'image',
	tLoading: 'Loading image...',
	mainClass: 'mfp-img-mobile',
	gallery: {
		enabled: true,
		navigateByImgClick: true,
		prereload: [0, 1]
	},
	image: {
		tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
	}
})