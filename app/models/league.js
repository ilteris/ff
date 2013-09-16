var mongoose = require('mongoose')
, env = process.env.NODE_ENV || 'development'
, config = require('../../config/config')[env]
, Schema = mongoose.Schema;

var LeagueSchema = new Schema({
	name : {type: String},
	comissioner: {type: Schema.ObjectId, ref: 'User'}
});

LeagueSchema.statistics = {
	load: function (id, cb) {
		this.findOne({ _id : id }).populate('comissioner').exec(cb);
	}
};

mongoose.model('League', LeagueSchema);