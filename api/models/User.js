var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var q = require('q'); 

var User = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	faveCoops: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Coop' }],
	owner: { type: Boolean, default:false },
	phone: { type: String }

});

User.pre('save', function(next) {
    var user = this;
    if (!user.isModified('password')) {
        return next();
    }
    bcrypt.genSalt(10, function(err, salt) {
        if (err) {
            return next(err);
        }
        bcrypt.hash(user.password, salt, function(err, hash) {
            user.password = hash;
            return next();
        });
    });
});

// User.methods.generateHash = function(password) {
// 	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

User.methods.comparePassword = function(pass) {
    var deferred = q.defer();
    bcrypt.compare(pass, this.password, function(err, isMatch) {
        if (err) {
            deferred.reject(err);
        }
        else {
            deferred.resolve(isMatch);
        }
    });
    return deferred.promise;
};

// User.methods.validPassword = function(password) {
// 	return bcrypt.compareSync(password, this.local.password);
// };

module.exports = mongoose.model('User', User);