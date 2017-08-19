document.addEventListener('click', function(event){ 
	if (event.button === 1)
	{
		event.stopPropagation();
	}
}, true);