package com.claudiourru.GestionePrenotazioni.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.claudiourru.GestionePrenotazioni.entities.Postazione;
import com.claudiourru.GestionePrenotazioni.repositories.PostazioneRepository;

@Service
public class PostazioneService {
	
	@Autowired
	PostazioneRepository cr;
	
	public void savePostazione(Postazione c) {
		cr.save(c);
	}
	
	public List<Postazione> getAllPostazioni(){
		return cr.findAll();
	}
	
	public void deletePostazioneById(Long id) {
		cr.deleteById(id);
	}
	
}
