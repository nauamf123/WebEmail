import { Injectable, Inject, Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ClienteEntity } from './cliente.entity';


@Injectable()
export class ClienteService {

 

  constructor(
    @Inject('Cliente_REPOSITORY')
    private clienteRepository: Repository<ClienteEntity>,
  ) {}
  
  
  async findAll(): Promise<ClienteEntity[]> {
    return this.clienteRepository.find();
    }

    async create(cliente : ClienteEntity){
      this.clienteRepository.create(cliente);
      return this.clienteRepository.save(cliente);
    }








async  main() {

  let cron = require('node-cron');
  const nodemailer = require("nodemailer");
  
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
    subject: "Clientes", 
    text: "Hello world?", 
    html:""
  });

  cron.schedule('CronExpression.EVERY_25_SECONDS', () => {
    // Send e-mail
    transporter.sendMail( transporter , function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
      });
 
    });
}
 }
