const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
const multer = require('multer');
const path = require('path');
const mkdirp = require('mkdirp');
//const fs = require('file-system');
const fs = require('fs-extra');
const nodemailer = require('nodemailer');


const modelo = require('./modelo/modelo.js');

const api = express();