import { Transacao } from "@/core/models";

export interface Conta {
	id: string;
	usuarioId: string;
	nome: string;
	saldo: number;

	transacoes?: Transacao[];
}
