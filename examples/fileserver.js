/*
 * @package jsDAV
 * @subpackage DAV
 * @copyright Copyright(c) 2011 Ajax.org B.V. <info AT ajax.org>
 * @author Mike de Boer <info AT mikedeboer DOT nl>
 * @license http://github.com/mikedeboer/jsDAV/blob/master/LICENSE MIT License
 */
"use strict";

var jsDAV = require("./../lib/jsdav");
jsDAV.debugMode = true;
var jsDAV_Locks_Backend_FS = require("./../lib/DAV/plugins/locks/fs");
var jsDAV_FS_Directory = require("./../lib/DAV/backends/fs/directory");

function make_desktop() {
  var desktop = jsDAV_FS_Directory.new("c:/Users/qixin");
  desktop.setDisplayName("DESKTOP");
  return desktop;
}

jsDAV.createServer({
    //node: __dirname + "/../test/assets",
    //locksBackend: jsDAV_Locks_Backend_FS.new(__dirname + "/../test/assets")
    node: [jsDAV_FS_Directory.new("c:/"), make_desktop()],
    locksBackend: jsDAV_Locks_Backend_FS.new("c:/")
}, 8000, "10.211.55.3");
