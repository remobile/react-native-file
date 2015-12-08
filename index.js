/*
* (The MIT License)
* Copyright (c) 2015-2016 YunJiang.Fang <42550564@qq.com>
* @providesModule File
* @flow-weak
*/
'use strict';

var requestFileSystem = require('./libs/requestFileSystem');
var LocalFileSystem = require('./libs/LocalFileSystem');
var FileReader = require('./libs/FileReader');
var fileSystemPaths = require('./libs/fileSystemPaths');

module.exports = {
    requestFileSystem: requestFileSystem,
    LocalFileSystem: LocalFileSystem,
    FileReader: FileReader,
    fileSystemPaths: fileSystemPaths,
}
