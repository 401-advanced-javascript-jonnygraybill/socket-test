'use strict';

const theword = require('./theword.js');

const io = require('socket.io-client');

const socket = io.connect('http://sockettest1-env.fq6n8qiimm.us-east-2.elasticbeanstalk.com/');

socket.on('the-bird', theword);

