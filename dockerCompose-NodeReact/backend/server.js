const app=require('express')();
const cors=require('cors');

const PORT='3001';

app.use(cors())

app.get('/getPlayers', (req, res)=>{
    res.json({players:
        ["Rahul", "Zull", "Prateek"]
    })
})

app.listen(PORT,()=>{
    console.log(`This app is running on :${PORT}`);
});

