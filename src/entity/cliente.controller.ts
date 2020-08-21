import { Controller, Body, Post, Get, Param, Delete, Put } from "@nestjs/common";
import { ClienteService } from "./cliente.service";



@Controller("cliente")
export class ClienteController { 

    constructor(private  clienteService: ClienteService) { }

    @Get()
    showAllproduto(){
     return this.clienteService.findAll();
    }

    @Post()
    create(@Body() ClienteEntity){
     return this.clienteService.create(ClienteEntity);
    }
    @Post()
    sedEmail(){
       return this.clienteService.main();
    }
    
}