import { Usuario } from "@/core/models";
import z from "zod";

export const usuarioValidator = async (usuario: Usuario) => {
	const usuarioSchema = z.object({
		id: z.string(),
		nome: z.string().min(2, 'O nome é obrigatório.'),
		username: z.string().min(3, 'O username deve ter pelo menos 3 caracteres.'),
		password: z.string().min(3, 'A senha deve ter pelo menos 3 caracteres.'),
		email: z.string().email('E-mail inválido'),
	})

	return usuarioSchema.safeParse(usuario);
}
