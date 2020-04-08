import { Cidade } from 'src/cidades/cidades.entity';
export declare class Cliente {
    id: number;
    nome: string;
    sobrenome: string;
    sexo: string;
    dataNascimento: Date;
    idade: number;
    cidade: Cidade;
}
