const userModel = require('../models/user');

const user = {};

user.getUsers = async function (req, res){
	try{
		let data = await userModel.getUsers();
		res.json(data);
	}catch(e){
		console.error(e);
	}
};

user.addUser = async function (req, res){
	let data = req.body;	
	try{
		const user = await userModel.addUser(data);
		res.json(user);
	}catch(e){
		console.error(e);
		res.status(500).send(e);
	}
};
module.exports = user;
