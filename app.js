var express = require('express');
var app = express();
var mysql = require('mysql');
let requests = new Map();
let status = new Map();
console.clear();




app.get("/binanceChange/:sehir", async function(req,res) {
  
  const b = require('./binance/'+req.params.sehir+'.js');
  const bugun = new Date()
  const paramCookiesName='tag-'+encodeURIComponent(req.query.param);
  const paramJsName='tag-'+req.params.sehir;

   await b(encodeURIComponent(req.query.param)).then(async function (response,err) {
	
	if(response.status==200 || response.status==404){
    
   const dataHam = await response.json();
   
    
    const connection = mysql.createConnection({
      connectionLimit: 50,
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'pricelist'
    });
    
    connection.connect(function (err) {
      if (err) throw err;
    
      //console.log('MySQL bağlantısı başarıyla gerçekleştirildi.');
      
    });
   
    console.log(dataHam.priceChange);
    const sqlSorgusu = "UPDATE price SET priceChange = '"+dataHam.priceChange+"',priceChangePercent = '"+dataHam.priceChangePercent+"',weightedAvgPrice='"+dataHam.weightedAvgPrice+"' WHERE symbol = '"+req.query.param+"'";
    connection.connect(function (err) {
      
      connection.query(sqlSorgusu, function (err, results) {
      
        //console.log("Başarılı bir şekilde güncellendi.");
        
      });
     
    });
    
   
	 requests.set(paramCookiesName,{
        body:dataHam,
        date:bugun,
		name:paramCookiesName,
		hesap:req.params.sehir+'.js'
      })
	  return res.json(requests.get(paramCookiesName).body);
	  /* api cevap vermedi ise ve hata verdiyse*/
	}else{
	  status.set(paramJsName,{
          status:response.status,
		  modul:paramJsName,
          message:response,
          date:bugun
      })
	  return res.json(status.get(paramJsName))
	}
	
    }).catch(err =>{
        status.set(paramJsName,{
          status:"429",
		  modul:paramJsName,
          message:err,
          date:bugun
        })
        return res.json(status.get(paramJsName))
      })

	
  
 
})


app.get("/binance/:sehir", async function(req,res) {
  const b = require('./binance/'+req.params.sehir+'.js');
  const bugun = new Date()
  const paramCookiesName='tag-'+encodeURIComponent(req.query.param);
  const paramJsName='tag-'+req.params.sehir;

  await b(encodeURIComponent(req.query.param)).then(async function (response,err) {

	if(response.status==200 || response.status==404){
   
   const dataHam = await response.json();
   if(dataHam.success==true){

    const connection = mysql.createConnection({
      connectionLimit: 50,
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'pricelist'
    });
    
    connection.connect(function (err) {
      if (err) throw err;
    
      //console.log('MySQL bağlantısı başarıyla gerçekleştirildi.');
      
    });
   
    console.log("symbol="+req.query.param+" > "+dataHam.data.c)
    
    const sqlSorgusu = "UPDATE price SET realprice = '"+dataHam.data.c+"',left_symbol = '"+dataHam.data.b+"',right_symbol = '"+dataHam.data.q+"',left_symbol_title = '"+dataHam.data.an+"',right_symbol_title = '"+dataHam.data.qn+"',Days_high_price = '"+dataHam.data.h+"',Days_low_price = '"+dataHam.data.l+"',open_price = '"+dataHam.data.o+"',price_digit='"+dataHam.data.c.toString().length+"' WHERE symbol = '"+req.query.param+"'";
    connection.connect(function (err) {
      
      connection.query(sqlSorgusu, function (err, results) {
      
        //console.log("Başarılı bir şekilde güncellendi.");
        
      });
     
    });
    
   }
	 requests.set(paramCookiesName,{
        body:dataHam,
        date:bugun,
		name:paramCookiesName,
		hesap:req.params.sehir+'.js'
      })
	  return res.json(requests.get(paramCookiesName).body);

	}else{
	  status.set(paramJsName,{
          status:response.status,
		  modul:paramJsName,
          message:response,
          date:bugun
      })
	  return res.json(status.get(paramJsName))
	}
	
    }).catch(err =>{
        status.set(paramJsName,{
          status:"429",
		  modul:paramJsName,
          message:err,
          date:bugun
        })
        return res.json(status.get(paramJsName))
      })

	
  
 
})





//number.toString().length;
app.listen(8000,function(){
console.log("Server started! port:8000");
});