import { Categoria, Conta } from "@/core/models";

export interface Usuario {
    id: string;
	nome: string;
	username: string;
	password: string;
	email: string;

	contas?: Conta[];
	categorias?: Categoria[];
}
