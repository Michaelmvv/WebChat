Template.input.events = {
	'submit form': function(event){
		event.preventDefault();
		if (Meteor.user()){
			var name = Meteor.user().emails[0].address; //Meteor.user().profile.name;
		} else {
			var name = 'Anonymous';
		}
	
		var message = document.getElementById('message');
	
		if (message.value !== '') {
			Messages.insert({
				name: name,
				message: message.value,
				time: Date.now()
		})

		document.getElementById('message').value = '';
		message.value = '';
		};
	} 
} 