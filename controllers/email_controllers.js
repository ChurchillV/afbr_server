// controler/todo.js

const Dogs = require('../models/afbr');
const db = require('../config/db')
var nodemailer = require('nodemailer')
const dotenv = require('dotenv')
dotenv.config()




exports.postSendRegisterEmail = (req, res) => {
    var sgTransport = require('nodemailer-sendgrid-transport');

    var client = nodemailer.createTransport({
        service: 'SendGrid',
        auth: {
          user: 'apikey',
          pass: process.env.pass
        }
      });
    
    // var client = nodemailer.createTransport(sgTransport(options));
    
    var email = {
      from: 'africanbullyregistry@gmail.com',
      to: 'yotuo2003@gmail.com',
      subject: 'Thank you for registering with the African Bully Registry',
      text: 'Welcome to the Commut=nity',
      html: '<b>TThe AFBR</b>'
      
    };
    
    client.sendMail(email, function(err, info){
        if (err ){
          console.log(err);
        }
        else {
          console.log('Message sent: ' + info.response);
          res.send('email sent')
        }
    });
    
};

exports.postSendRegisterDogEmail = (req, res) => {
    var sgTransport = require('nodemailer-sendgrid-transport');

    var client = nodemailer.createTransport({
        service: 'SendGrid',
        auth: {
          user: 'apikey',
          pass: process.env.pass
        }
      });
    
    // var client = nodemailer.createTransport(sgTransport(options));
    
    var email = {
      from: 'africanbullyregistry@gmail.com',
      to: 'yotuo2003@gmail.com',
      subject: 'Dog registered',
      text: 'Dear, your dog has been registered',
      html: 'Welcome to the community'
      
    };
    
    client.sendMail(email, function(err, info){
        if (err ){
          console.log(err);
        }
        else {
          console.log('Message sent: ' + info.response);
          res.send('email sent')
        }
    });
};

exports.trial = (req, res) => {
    var sgTransport = require('nodemailer-sendgrid-transport');

    var client = nodemailer.createTransport({
        service: 'SendGrid',
        auth: {
          user: 'apikey',
          pass: process.env.pass
        }
      });
    
    // var client = nodemailer.createTransport(sgTransport(options));
    
    var email = {
      from: 'africanbullyregistry@gmail.com',
      to: 'yotuo2003@gmail.com',
      subject: 'Hello',
      text: 'Hello send grif is the best',
      html: '<b>Hello world</b>'
      
    };
    
    client.sendMail(email, function(err, info){
        if (err ){
          console.log(err);
        }
        else {
          console.log('Message sent: ' + info.response);
          res.send('email sent')
        }
    });
}

exports.getPedigree = (req, res) => {
    console.log('pedigree of ',req.params.id)
    //  
    
    let sql = 'SELECT * FROM dog WHERE id = ?';
    let pedigree = {}
    let sire = 404
    let dam = 404

    let ss = 404
    let sd = 404
    
    let sss =404
    let ssd = 404
    let sds = 404
    let sdd = 404

    let ds = 404
    let dd = 404

    let dss = 404
    let dsd = 404
    let dds = 404
    let ddd = 404


    
    getids = (dog_id, callback) => {
        if (dog_id== null){
            dog_id=404
        }
        let query = db.query(sql,dog_id, (err, result, fields) => {
            if (err) {
                throw err
            }

            // pedigree[label] = result[0]
            let data = []
            data = result[0]
            // console.log('data sire',data.sire)
            sire_id = data.sire
            dam_id = data.dam
            ids = [sire_id, dam_id]
            // sire = pedigree[label].sire 
            // dam = pedigree[label].dam          
            
            // console.log(pedigree)
            if (sire === null){
                sire = 404
                if (dam === null){
                   dam = 404
                }
            }
            
            console.log('current from',dog_id,ids)
            return callback(null,ids)

            })
         
    }


    getdetails = (dog_id, label, callback) => {
        if (dog_id== null){
            dog_id=404
        }
        
        let query = db.query(sql,dog_id, (err, result, fields) => {
            if (err) {
                throw err
            }

            // pedigree[label] = result[0]
            
            pedigree[label] = result[0]
            // console.log('data sire',data.sire)
            
            // sire = pedigree[label].sire 
            // dam = pedigree[label].dam          
            
            // console.log(pedigree)
            if (sire === null){
                sire = 404
                if (dam === null){
                   dam = 404
                }
            }
            
            // console.log(pedigree)
            return callback(null,pedigree)

            })


    }


   
    // gendetails(8, 'sire', (err, response) => console.log(response))
    // console.log('c,',c)

    getsire_and_dam = () => {
        getids(req.params.id, (err, response) => {
            sire = response[0]
            dam = response[1]
            console.log('..sire =' ,sire)
            console.log('..dam =' ,dam)
            getss_and_sd()
            getds_and_dd()
            getdetails(req.params.id, 'maindog', (err, response) => console.log('.'))
            getdetails(sire, 'sire', (err, response) => console.log('.'))
            getdetails(dam, 'dam', (err, response) => console.log('.'))
        })

    }

    getss_and_sd = () => {
        getids(sire, (err, response) => {
            ss = response[0]
            sd = response[1]
            console.log('........siresire =' ,ss)
            console.log('........siredam =' ,sd)
            getsss_and_ssd()
            
            getdetails(ss, 'siresire', (err, response) => console.log('.'))
            getdetails(sd, 'siredam', (err, response) => console.log('.'))
        })
    }

    getds_and_dd = () => {
        getids(dam, (err, response) => {
            ds = response[0]
            dd = response[1]
            console.log('........damsire =' ,ds)
            console.log('........damdam =' ,dd)
            getdss_and_dsd()
            getdetails(ds, 'damsire', (err, response) => console.log('.'))
            getdetails(dd, 'damdam', (err, response) => console.log('.'))
            
        })
    }

    getsss_and_ssd = () => {
        getids(ss, (err, response) => {
            sss = response[0]
            ssd = response[1]
            console.log('............siresiresire =' ,sss)
            console.log('............siresiredam =' ,ssd)
            getsds_and_sdd()
            getdetails(sss, 'siresiresire', (err, response) => console.log('.'))
            getdetails(ssd, 'siresiredam', (err, response) => console.log('.'))
        })
    }

    getsds_and_sdd = () => {
        getids(sd, (err, response) => {
            sds = response[0]
            sdd = response[1]
            console.log('............siredamsire =' ,sds)
            console.log('............siredamdam =' ,sdd)
            getdetails(sds, 'siredamsire', (err, response) => console.log('.'))
            getdetails(sdd, 'siredamdam', (err, response) => console.log('.'))
        })
    }

    getdss_and_dsd = () => {
        getids(ds, (err, response) => {
            dss = response[0]
            dsd = response[1]
            console.log('............damsiresire =' ,dss)
            console.log('............damsiredam =' ,dsd)
            getdds_and_ddd()
            getdetails(dss, 'damsiresire', (err, response) => console.log('.'))
            getdetails(dsd, 'damsiredam', (err, response) => console.log('.'))
        })
    }

    getdds_and_ddd = () => {
        getids(dd, (err, response) => {
            dds = response[0]
            ddd = response[1]
            console.log('............damdamsire =' ,dds)
            console.log('............damdamdam =' ,ddd)
            getdetails(dds, 'damdamsire', (err, response) => console.log('.'))
            getdetails(ddd, 'damdamdam', (err, response) => res.send(pedigree))
        })
    }

    getsire_and_dam()
}



