// const express = require('express');
// const cors = require('cors');
// const data = require('./scrapper');

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.get('/',async(req,res) => {
//     try{
//         const price= await data.getData()
//         return res.status(200).json({
//             result:price,
//         })
    
//     }
//     catch(err){
//         return res.status(500).json({
//             err:err.toString(),
//         })
//     }
// });

// const PORT = 5000 || process.env;

// app.listen(PORT,() => {
//     console.log(`Backend running on ${PORT}!`);
    
// });