var express = require('express');
var router = express.Router();
var Pusher = require('pusher');
var users = require('../users');

var pusher = new Pusher({
    appId: '1061747',
    key: '91137c32cc89fe3f12ce',
    secret: '3236eb736ee29caa370c',
    cluster: 'us2'
});

/* GET home page. */
router.post('/auth', function(req, res, next) {
    var socketId = req.body.socket_id;
    var channel = req.body.channel_name;
    var user = users.getUser(socketId);
    var presenceData = {
        user_id: socketId,
        user_info: {
            name: user.name,
            race: user.race,
            class: user.class
        }
      };

    var auth = pusher.authenticate(socketId, channel, presenceData);
    res.send(auth);
});

module.exports = router;
