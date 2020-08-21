import { ProdutoEntity } from "./entity/produto.entity";

const nodemailer = require("nodemailer");




async function main() {
  
  let testAccount = await nodemailer.createTestAccount();

  
  let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 25,
    secure: false, 
    auth: {
      user: '17824ad0a5852c',
      pass: '0ab06ed9d42678', 
    },
  });

   
   let info = await transporter.sendMail({
    from: '"Nauam" <smtp.mailtrap.io>', 
    to: "nauamffgt123@gmail.com" ,
    subject: "Produtos", 
    text: "Hello world?", 
 
  });

 
}

main().catch(console.error);
