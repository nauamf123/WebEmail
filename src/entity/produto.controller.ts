import { Controller, Get, Post, Body } from "@nestjs/common";
import { ProdutoService } from "./produto.service";




@Controller("produto")
export class ProdutoController { 


    constructor(private  produtoService: ProdutoService) { }
    @Get()
    showAllproduto(){
     return this.produtoService.findAll();
    }

    @Post()
    createProduto(@Body() ProdutoEntity){
     return this.produtoService.create(ProdutoEntity);
    }

    @Post()
    sedEmail(){
       return this.produtoService.main();
    }
    

}