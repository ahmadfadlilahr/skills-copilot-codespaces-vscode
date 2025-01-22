// Create web server
app.get('/comments', function(req, res) {
    res.send(comments);
});