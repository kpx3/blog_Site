const express = require('express');
const app = express();

app.get('/info', (req, res) => {
    res.sendFile('./info1.html', { root: __dirname });
});
app.get('/topics', (req, res) => {
    res.sendFile('./topics.html', { root: __dirname });
});
app.get('/about', (req, res) => {
    res.sendFile('./about.html', { root: __dirname });
});
app.get('/contact', (req, res) => {
    res.sendFile('./contact.html', { root: __dirname });
});
app.get('/editpost', (req, res) => {
    //res.sendFile('./contact.html', { root: __dirname });
});
app.get('/addpost', (req, res) => {
    //res.sendFile('./contact.html', { root: __dirname });
});
app.get('/delete', (req, res) => {
    //res.sendFile('./contact.html', { root: __dirname });
});