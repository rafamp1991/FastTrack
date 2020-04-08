@RestController //Indica que por padrão responderá usando o formato json.
@RequestMapping("/") //Mapeamento de urls dos metódos pertencentes a este controller.
@GetMapping("/{}") //Usado para declarar um path dinâmico.
@Autowired //Anotação para indicar a injeção de dependências (processo de prover instâncias de classes necessárias ao objeto.
@PostMapping //Mapeamento do método salvar.
@RequestBody //Indica que o objeto deve ser buscado no corpo da requisição.
@Valid //Validação de dados.
ResponseEntity //Manipulação de respostas HTTP (código de status, headers e body).
@Repository //Faz o framework enxergar a classe responsável por acessar o banco de dados.

padrão DTO (Data Transfer Object) // Utilizado para otimizar a comunicação entre cliente e servidor / Customização de dados.
@Transactional //Ao finalizar o método, o Spring efetuará o commit automático da transação, caso nenhuma exception tenha sido lançada.
@DeleteMapping //Exclusão de registros.
@PathVariable //Recebe parâmetros dinâmicos no path da URL.

@PageableDefault //Indica o padrão de paginação/ordenação ao Spring, quando o cliente não enviar informações adicionais.
@EnableCaching //Serve para habilitar o uso de cache na aplicação. Deve-se atribuir a anotação na Classe ForumApplication.
@Cacheable //Guarda o retorno de um método no cache.
@CacheEvict //Avisa o Spring quando deve atualizar o cache.
@Override //Sobreposição de métodos.

***********************************************************************************************************************

SecurityConfigurations // Configurações gerais de segurança
AutenticacaoService //Classe gerenciada pelo spring, contém a lógica de autenticação.
	UsuarioRepository //Lógica de acesso ao banco de dados. Possui o método que busca pelo e-mail.
AutenticacaoController //Recebe a requisição do cliente com o e-mail e a senha.
	TokenService//Possui o método para gerar o token.
	AutenticacaoViaTokenFilter //Filtro que valida o token recebido pela requisição antes de autentica-lo. 
		(Não existe mais o "usuário está logado", 
			a API não possui tal informação, ela foi recebida e devolvida ao cliente na autenticação anterior).
LoginForm //Classe que recebe do cliente o json, contendo o e-mail e a senha.


getPrincipal() //Usado para obter o nome de usuário do usuário conectado.
getAuthorities() //Usado para obter as funções atribuídas do usuário autenticado.


Usuario //É uma classe de dominio, que representa uma entidade de negócio (Ilustra / constrói um objeto).
	@Entity //Transforma em uma entidade da classe jpa e gera uma tabela no banco para guardar os usuários.
	UserDetails //Implementa-se  essa classe do spring, para determinar que esta classe representa o usuário.