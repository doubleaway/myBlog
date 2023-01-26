module.exports = function(app)
{
    app.get('/', function(req, res){
        res.render('Blog/index.html')
    });

    app.get('/about', function(req, res){
        res.render('about.html');
    });
    app.get('/event', function(req, res){
        res.render('eventPage/index.html')
    });
    // app.get('/react', function(req, res){
    //     res.sendfile(path.join(__dirname+'/myblog/build/index.html'))
    // });
    app.get('/calc', function(req, res){
        res.render('calc/index.html')
    });
}