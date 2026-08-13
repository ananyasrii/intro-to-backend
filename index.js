const express = require('express');
const pool = require('./db');
const app = express();
const PORT =3000;
app.use(express.json());
app.get('/',async(req,res)=>{
    try{
        const result=await pool.query('SELECT NOW()');
    
    res.json({
        message:'db connected!',
        time:result.rows[0].now
    });
} catch(err){
    console.error(err);
    res.status(500).json({error:'failed to connect db'});
}
})
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});