const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const mysql = require('mysql2/promise');
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());