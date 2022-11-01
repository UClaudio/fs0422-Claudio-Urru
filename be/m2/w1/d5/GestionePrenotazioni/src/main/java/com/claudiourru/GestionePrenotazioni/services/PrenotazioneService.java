package com.claudiourru.GestionePrenotazioni.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.claudiourru.GestionePrenotazioni.entities.Prenotazione;
import com.claudiourru.GestionePrenotazioni.exceptions.PostazionePrenotazioneException;
import com.claudiourru.GestionePrenotazioni.exceptions.PrenotazioneExistingException;
import com.claudiourru.GestionePrenotazioni.repositories.PrenotazioneRepository;

@Service
public class PrenotazioneService {
	
	@Autowired
	PrenotazioneRepository pr;
	
	public void save(Prenotazione p) throws PrenotazioneExistingException, PostazionePrenotazioneException {
		if(pr.existsByUtenteAndGiorno(p.getUtente(), p.getGiorno())) {
			throw new PrenotazioneExistingException();
		} 
		if(pr.existsByPostazioneAndGiorno(p.getPostazione(), p.getGiorno())) {
			throw new PostazionePrenotazioneException();
		}
		
		pr.save(p);
	}
	

	
}
