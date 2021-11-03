

window.addEvent('domready', function() { 

	var accordion = new Accordion('h3.atStart', 'div.atStart', {
		opacity: false,
		onActive: function(toggler, element){
			toggler.setStyle('background-color', '#041b99');
		},
		onBackground: function(toggler, element){
			toggler.setStyle('background-color', '#74a4da');
		}
	}, $('accordion'));

});

