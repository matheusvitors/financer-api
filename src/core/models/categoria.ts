import { OrcamentoCategoria, Transacao } from "@/core/models";

export interface Categoria {
	id: string;
	usuarioId:string;
	nome: string;

	orcamentosCategorias?: OrcamentoCategoria[];
	transacoes?: Transacao[]
}
