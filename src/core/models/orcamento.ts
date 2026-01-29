import { OrcamentoCategoria } from "@/core/models";

export interface Orcamento {
	id: string;

	mes: number;
	ano: number;
	categorias?: OrcamentoCategoria[]
}
