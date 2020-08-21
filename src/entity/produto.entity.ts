import { Entity, PrimaryColumn, PrimaryGeneratedColumn, Double, Column } from "typeorm";




@Entity('produto')
export class ProdutoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'Coca', type:'varchar', length:100})
    nome: String;
   
    @Column({type:'varchar', length:100})
    description: String
    
    @Column({ type:'decimal', length:100})
    Price: Double;
    
    @Column({ type:'decimal', length:100})
    OfferPrice: Double;
 
}