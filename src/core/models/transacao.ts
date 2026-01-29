export interface Transacao {
	id: string;
	contaId: string;
	categoriaId: string;
	orcamentoCategoriaId: string;
	data: Date;
	valor: number;
	descricao: string;
	linkNotaFiscal?: string;
	tipo: string;
}
