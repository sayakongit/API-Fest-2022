//updated to fastify package from express
// can be run by 'node crud.js'
const fastify=require("fastify")({logger:true});
const express = require('express');
const cors = require('cors');
const data = require('./scrapper');


let coins=['btc','etc','usdt','bnb','usdc','ada','xrp','sol','luna','doge'];
let price;
fastify.get("/",async(req,res)=>{
     price=await data.getData();
    res.send(price)
})

fastify.get("/:id",async(req,res)=>{
    const id=req.params.id;
    if(coins.includes(id)){
        price=await data.getData();
        price.forEach((crypto)=>{
            if(crypto.coin===id){
                return res.send(crypto);
                
                
            }
        })
    }
    else{
        res.send("enter correct coin");
    }
    

})

fastify.post("/coin/:id",async(req,res)=>{
    const id=req.params.id;
    if(coins.includes(id)){
        price=await data.getData();
        price.forEach((crypto)=>{
            if(crypto.coin===id){
                window.localStorage.setItem(id,JSON.stringify(price));
                return res.send("coin added");
                
            }
        })
    }
    else{
        res.send("enter correct coin");
    }
})

fastify.delete("/delete",async(req,res)=>{
    console.log("req");

})

const start=async()=>{
    try{
        await fastify.listen(3000);
        console.log("workin...")

    }
    catch(err){
        fastify.log.error(err);
        process.exit(1);
    }
}
start();