(function(){
	$('.main-content li').on('click', function() {
		toggleFolder($(this));
	});
	$('.curtain').on('click', function() {
		toggleFolder($('li.active'));
	});
})();

function toggleFolder (button) {
	$('.curtain').toggle();
	button.toggleClass('active');
	button.find('span').toggleClass('open-btn');
	button.find('span').toggleClass('close-btn');
	button.find('ul').slideToggle(200);
}