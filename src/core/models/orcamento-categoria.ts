import { Transacao } from "@/core/models";

export interface OrcamentoCategoria {
	id: string;
	categoriaId: string;
	orcamentoId: string;
	valorPrevisto: number;
	valorPago: number;
	tipo: "receita" | "despesa";

	transacoes?: Transacao[];
}
