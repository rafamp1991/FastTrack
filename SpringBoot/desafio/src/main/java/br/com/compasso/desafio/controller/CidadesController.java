package br.com.compasso.desafio.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.compasso.desafio.model.CidadesModel;
import br.com.compasso.desafio.repository.CidadesRepository;

@RestController
@RequestMapping("/cidades")
public class CidadesController {

	@Autowired
	private CidadesRepository cidadesRepository;
	
	@GetMapping
    public List<CidadesModel> getUser() {
        return cidadesRepository.findAll();
    }
	
	@RequestMapping(value = "/cidades/{nome}", method = RequestMethod.GET)
	public CidadesModel GetById(@PathVariable(value = "nome") String nome) {
		return cidadesRepository.findByNome(nome);
	}
	
	@PostMapping
	public CidadesModel cidadesCreate(@RequestBody CidadesModel cidades) {
		CidadesModel cidadesModel = new CidadesModel();
		cidadesModel.setNome(cidades.getNome());
		cidadesModel.setEstado(cidades.getEstado());
		return cidadesRepository.save(cidadesModel);
	}
	
}
