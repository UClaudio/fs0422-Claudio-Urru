package com.claudiourru.GestionePrenotazioni;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;

import com.claudiourru.GestionePrenotazioni.config.Config;
import com.claudiourru.GestionePrenotazioni.entities.Postazione;
import com.claudiourru.GestionePrenotazioni.services.CittaService;
import com.claudiourru.GestionePrenotazioni.services.EdificioService;
import com.claudiourru.GestionePrenotazioni.services.PostazioneService;
import com.claudiourru.GestionePrenotazioni.services.PrenotazioneService;
import com.claudiourru.GestionePrenotazioni.services.UtenteService;

@SpringBootApplication
public class GestionePrenotazioniApplication implements CommandLineRunner {

	
	
	public static void main(String[] args) {
		SpringApplication.run(GestionePrenotazioniApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
		
		
	}
	
}
