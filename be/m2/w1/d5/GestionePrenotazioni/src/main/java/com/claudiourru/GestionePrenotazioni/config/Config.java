package com.claudiourru.GestionePrenotazioni.config;

import java.time.LocalDate;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

import com.claudiourru.GestionePrenotazioni.entities.Citta;
import com.claudiourru.GestionePrenotazioni.entities.Edificio;
import com.claudiourru.GestionePrenotazioni.entities.Postazione;
import com.claudiourru.GestionePrenotazioni.entities.Prenotazione;
import com.claudiourru.GestionePrenotazioni.entities.Tipo;
import com.claudiourru.GestionePrenotazioni.entities.Utente;

@Configuration
public class Config {
	
	@Bean
	@Scope("prototype")
	public Citta getCitta() {
		return new Citta();
	}
	
	@Bean
	@Scope("prototype")
	public Citta getRoma() {
		return Citta
			   .builder()
			   .nome("Roma")
			   .build();
	}
	
	@Bean
	@Scope("prototype")
	public Citta getMilano() {
		return Citta
			   .builder()
			   .nome("Milano")
			   .build();
	}
	
	@Bean
	@Scope("prototype")
	public Citta getVenezia() {
		return Citta
			   .builder()
			   .nome("Venezia")
			   .build();
	}
	
	@Bean
	@Scope("prototype")
	public Edificio getEdificio() {
		return new Edificio();
	}
	
	@Bean
	@Scope("prototype")
	public Edificio getHotel() {
		return Edificio
			   .builder()
			   .nome("Hotel")
			   .indirizzo("via appia 1")
			   .citta(getRoma())
			   .build();
	}
	
	@Bean
	@Scope("prototype")
	public Edificio getOratorio() {
		return Edificio
			   .builder()
			   .nome("Oratorio")
			   .indirizzo("via garibaldi 20")
			   .citta(getMilano())
			   .build();
	}
	
	@Bean
	@Scope("prototype")
	public Edificio getMonastero() {
		return Edificio
			   .builder()
			   .nome("Monastero")
			   .indirizzo("via portaNuova 57")
			   .citta(getVenezia())
			   .build();
	}
	
	@Bean
	@Scope("prototype")
	public Postazione getPostazione() {
		return new Postazione();
	}
	
	@Bean
	@Scope("prototype")
	public Postazione getStanza() {
		return Postazione
				.builder()
				.descrizione("stanza di un hotel")
				.tipo(Tipo.PRIVATO)
				.numeroMassimoPartecipanti(10)
				.edificio(getHotel())
				.build();
				
	}
	
	@Bean
	@Scope("prototype")
	public Postazione getSalaRiunioni() {
		return Postazione
				.builder()
				.descrizione("una sala riunioni improvvisata in un oratorio")
				.tipo(Tipo.SALA_RIUNIONI)
				.numeroMassimoPartecipanti(30)
				.edificio(getOratorio())
				.build();
				
	}
	
	@Bean
	@Scope("prototype")
	public Postazione getMegaSala() {
		return Postazione
				.builder()
				.descrizione("una sala molto grande in un antico monastero")
				.tipo(Tipo.OPENSPACE)
				.numeroMassimoPartecipanti(300)
				.edificio(getMonastero())
				.build();
				
	}
	
	@Bean
	@Scope("prototype")
	public Utente getUtente() {
		return new Utente();
				
	}
	
	@Bean
	@Scope("prototype")
	public Utente getMario() {
		return Utente
				.builder()
				.username("supermario")
				.nomeCompleto("mario rosso")
				.email("mario.rosso@gmail.com")
				.build();
				
	}
	
	@Bean
	@Scope("prototype")
	public Utente getLuigi() {
		return Utente
				.builder()
				.username("megaluigi")
				.nomeCompleto("luigi verdi")
				.email("luigi.verdi@gmail.com")
				.build();
				
	}
	
	@Bean
	@Scope("prototype")
	public Utente getGiorgia() {
		return Utente
				.builder()
				.username("giolagio")
				.nomeCompleto("giorgia bianchi")
				.email("giorgia.bianchi@gmail.com")
				.build();
				
	}
	
	@Bean
	@Scope("prototype")
	public Prenotazione getPrenotazione() {
		return new Prenotazione();
				
	}
	
	@Bean
	@Scope("prototype")
	public Prenotazione getPrenotazione1() {
		return Prenotazione
				.builder()
				.utente(getMario())
				.postazione(getStanza())
				.giorno(LocalDate.of(2022, 4, 25))
				.build();
				
	}
	
	@Bean
	@Scope("prototype")
	public Prenotazione getPrenotazione2() {
		return Prenotazione
				.builder()
				.utente(getLuigi())
				.postazione(getMegaSala())
				.giorno(LocalDate.of(2022, 5, 5))
				.build();
				
	}
	
	@Bean
	@Scope("prototype")
	public Prenotazione getPrenotazione3() {
		return Prenotazione
				.builder()
				.utente(getGiorgia())
				.postazione(getSalaRiunioni())
				.giorno(LocalDate.of(2022, 1, 2))
				.build();
				
	}
	
	
	
}
