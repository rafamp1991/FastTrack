package br.com.compasso.desafio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import br.com.compasso.desafio.model.CidadesModel;

public interface CidadesRepository extends JpaRepository<CidadesModel, Long> {
	
	CidadesModel findById(long id);
	
	CidadesModel findByNome(String nome);
	
	CidadesModel deleteById(long id);
}
