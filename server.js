#!/usr/bin/env node

var slackin = require('./node');

var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var hostname = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
var program = {
  token: process.env.SLACK_API_TOKEN,
  org: process.env.SLACK_SUBDOMAIN,
  css: '',
  channels: '',
};

slackin(program).listen(port, hostname, function(err){
  if (err) throw err;
  if (!program.silent) console.log('%s – listening on %s:%d', new Date, hostname, port);
});
