var express = require('express');
var passport = require('passport');

var BearerStrategy = require('passport-azure-ad').BearerStrategy;

var tenantID = '';
var clientID = '';
var audience = ''; // https://<tenant_name>.onmicrosoft.com/<api_path>

var options = {
    identityMetadata: 'https://login.microsoftonline.com/' + tenantID + '/v2.0/.well-known/openid-configuration',
    clientID: clientID,
    issuer: 'https://sts.windows.net/' + tenantID + '/',
    audience: audience,
    loggingLevel: 'info',
    passReqToCallback: false,
};

var bearerStrategy = new BearerStrategy(options, function (token, done) {
    done(null, {}, token);
});

var app = express();
app.use(require('morgan')('combined'));
app.use(passport.initialize());
passport.use(bearerStrategy);

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Authorization, Origin, X-Requested-With, Content-Type, Accept',
    );
    next();
});

app.all(
    '/admin',
    passport.authenticate('oauth-bearer', { session: false }),
    function (req, res) {
        var claims = req.authInfo;
        console.log('User info: ', req.user);
        console.log('Validated claim: ', claims);
        res.status(200).json({ name: claims['name'] });
    },
);

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log('Listening on port ' + port);
});
