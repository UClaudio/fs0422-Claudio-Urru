package com.claudiourru.GestionePrenotazioni.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.claudiourru.GestionePrenotazioni.entities.Edificio;
import com.claudiourru.GestionePrenotazioni.repositories.EdificioRepository;

@Service
public class EdificioService {
	
	@Autowired
	EdificioRepository cr;
	
	public void saveCar(Edificio c) {
		cr.save(c);
	}
	
	public List<Edificio> getAllCars(){
		return cr.findAll();
	}
	
	public void deleteCarById(Long id) {
		cr.deleteById(id);
	}
	
}
