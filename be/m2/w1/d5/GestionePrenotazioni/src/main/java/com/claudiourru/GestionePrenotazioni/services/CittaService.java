package com.claudiourru.GestionePrenotazioni.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.claudiourru.GestionePrenotazioni.entities.Citta;
import com.claudiourru.GestionePrenotazioni.repositories.CittaRepository;

@Service
public class CittaService {

	@Autowired
	CittaRepository cr;
	
	public void saveCar(Citta c) {
		cr.save(c);
	}
	
	public List<Citta> getAllCars(){
		return cr.findAll();
	}
	
	public void deleteCarById(Long id) {
		cr.deleteById(id);
	}
	
}
