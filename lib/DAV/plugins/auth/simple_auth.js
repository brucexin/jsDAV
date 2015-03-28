/*
 * @package jsDAV
 * @subpackage DAV
 * @author Bruce.Xin
 */
"use strict";

var jsDAV_Auth_Backend_AbstractBasic = require("./abstractBasic");

var Exc = require("./../../../shared/exceptions");

/**
 * This is an authentication backend that uses a file to manage passwords.
 *
 * The backend file must conform to Apache's htdigest format
 */
var jsDAV_Auth_Backend_Simple = module.exports = jsDAV_Auth_Backend_AbstractBasic.extend({
    initialize: function(username, password) {
      this.username = username;
      this.password = password;
    },

    validateUserPass: function(username, password, cbvalidpass) {
      cbvalidpass(this.username == username && this.password == password);
    },
});
