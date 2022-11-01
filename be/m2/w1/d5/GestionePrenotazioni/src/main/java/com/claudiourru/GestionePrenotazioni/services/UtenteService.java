package com.claudiourru.GestionePrenotazioni.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.claudiourru.GestionePrenotazioni.entities.Utente;
import com.claudiourru.GestionePrenotazioni.repositories.UtenteRepository;

@Service
public class UtenteService {
	
	@Autowired
	UtenteRepository cr;
	
	public void saveCar(Utente c) {
		cr.save(c);
	}
	
	public List<Utente> getAllCars(){
		return cr.findAll();
	}
	
	public void deleteCarById(Long id) {
		cr.deleteById(id);
	}
	
}
