Template.emailc.events({
	'click #emailButton': function(event){
		event.preventDefault();
		console.log("Sending? PLS")
		Meteor.call("sendEmail");
	}
})