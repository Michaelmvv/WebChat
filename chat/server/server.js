Meteor.methods({
	sendEmail: function(){
		Email.send({to:"mikey.t___.()()()@gmail.com",from:"Mvv-Sending-system@bob.com",subject:"HI",text:"YOLO"});
	}
});