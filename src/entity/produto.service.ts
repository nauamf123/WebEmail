import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProdutoEntity } from 'src/entity/produto.entity';


@Injectable()
export class ProdutoService {
  constructor(
    @Inject('Produto_REPOSITORY')
    private produtoRepository: Repository<ProdutoEntity>,
  ) {}

  async findAll(): Promise<ProdutoEntity[]> {
    return this.produtoRepository.find();
  }
  async create(produto : ProdutoEntity){
    this.produtoRepository.create(produto);
    return this.produtoRepository.save(produto);
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
      subject: "Produtos", 
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