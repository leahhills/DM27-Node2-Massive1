const express= require ('express'),

    cors= require('cors'),
    bodyParser = require('body-parser');
    massive= require('massive');//going to make connection with service

const app = express();

    app.use(bodyParser.json());
    app.use(cors());


    massive('postgres://postgres:MYPASS@localhost/class demo').then(db=>{//first argument is setting param like key. then value is second one. these are like key value pairs 
        app.set('db',db);//equivalent app.settings()db tjhis way type less;//taking your db and sticking it on an object.
        
        //initilaizing database with seed file
        app.get('db').init.seed_file().then(res=>console.log(res))
        .catch(err=>console.log(err))
    
    
    
    })

    app.get('/api/getAllFromTest',(req,res)=>{
        req.app.get('db').getAllFromTest().then(data=>{
            console.log(data)
            res.status(200).send(data)
        })
    })

    app.post('/api/postData',(req,res)=>{
        //req.body.stuff
        req.app.get('db').postData(req.body.stuff).then
        (posted=>{
        res.status(200).send('your a wizard')
        })
    })

    app.post('/api/addUser',(req,res)=>{
        let{name,age,country}=req.body;

        req.app.get('db').addUser([name,age,country]).then(user=>{
        res.status(200).send('it worked!')
        })
        
    })


    app.get('/api/users',(req,res) => {
    //    if(req.query.name){
    //     return req.app.get('db').getUserByName(req.query.name).then(user=>{
    //         res.status(200).send(user)
    //         })
    //     }
        req.app.get('db').getAllUsers().then(users =>{
            if(req.query.name){
                users=users.filter(e=>{
                    return e.name=== req.query.name
                })
            }
            if(req.query.age){
                users=users.filter(e=>{
                    return e.age === +req.query.age
                })
            }

            res.status(200).send(users);
        })
          
    })

    
    
    app.listen(3000,()=>'Listening on port 3000 yo');

    // massive first take connect string then connect to db then will look for db file then turn all in there into functions
    //we can use the db now yaya we accces value that we out on our app object.
    //req.app.get now we have access to all the awesome functions in db yay!!!
    //req.app connection has delay. if we have endpoint that fires iimmed. we want 
    //it to connect before we try to acces it. so thats the reason for req.app.get and .then
    //what if we wna to put infor in db?? we need to account for it.
