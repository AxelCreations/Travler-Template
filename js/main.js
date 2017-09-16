$('#navBar li').on('click', function(){
	$('#navBar .Active')[0].classList.remove('Active');
	$(this)[0].classList.add('Active');
});