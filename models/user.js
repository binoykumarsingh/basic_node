const User = require('../schema/user');

const userModel = {};

userModel.getUsers = async function(){
	try{
		const user = await User.find();
		return user;
	}catch(e){
		console.error("error", e);
	}
};

userModel.addUser = async function(data){
	let userData = new User({
		name : data.name,
		department : data.department,
		isMarried : data.isMarried
	});

	try{
		const savedData = await userData.save();
		return savedData;
	}catch(e){
		console.error(e);
		throw e;
	}
};
module.exports = userModel;
