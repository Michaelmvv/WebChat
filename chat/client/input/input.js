Template.input.events = {
	'submit form': function(event){
		event.preventDefault();
		if (Meteor.user()){
			
			//	var name = Meteor.user().emails[0].address; //Meteor.user().profile.name;
			try {
			var name = Meteor.user().profile.name;
			} catch(err) {
			try{
			var name = Meteor.user().emails[0].address;
			}catch(err){
			console.log("Could not find profile name type.... Oh No!");
			}
			} 
		
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
		console.log("Message Sent");
		};
	} 
} 