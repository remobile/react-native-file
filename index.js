/*
* (The MIT License)
* Copyright (c) 2015-2016 YunJiang.Fang <42550564@qq.com>
* @providesModule File
* @flow-weak
*/
'use strict';

const requestFileSystem = require('./libs/requestFileSystem');
const LocalFileSystem = require('./libs/LocalFileSystem');
const FileReader = require('./libs/FileReader');
const fileSystemPaths = require('./libs/fileSystemPaths');

module.exports = {
    requestFileSystem: requestFileSystem,
    LocalFileSystem: LocalFileSystem,
    FileReader: FileReader,
    fileSystemPaths: fileSystemPaths,
};
