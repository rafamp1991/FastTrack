package br.com.compasso.desafio.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "clientes")
public class ClientesModel {

	@Id
	@GeneratedValue
	private long id;
	
	private String nome;
	private String sobrenome;
	private String sexo;
	private Date dataDeNascimento;
	private int idade;
//	private String cidade;
}
