import { Entity, PrimaryColumn, PrimaryGeneratedColumn, Double, Column } from "typeorm";




@Entity('cliente')
export class ClienteEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'Marcos', type:'varchar', length:100})
    nome: String;
   
    @Column({name : " 12312312", type:'varchar', length:100})
    cpf: String
    
    @Column({name : "14234235",  type:'varchar', length:100})
    rg: String;
    
    @Column({ type:'varchar', length:100})
    email: Double;

    @Column({ type:'varchar', length:100})
    datadenascimento: String;


 
}