package com.claudiourru.GestionePrenotazioni.repositories;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.claudiourru.GestionePrenotazioni.entities.Postazione;
import com.claudiourru.GestionePrenotazioni.entities.Prenotazione;
import com.claudiourru.GestionePrenotazioni.entities.Utente;

@Repository
public interface PrenotazioneRepository extends JpaRepository<Prenotazione, Long> {

	public Boolean existsByUtenteAndGiorno(Utente u, LocalDate d);
	public Boolean existsByPostazioneAndGiorno(Postazione p, LocalDate d);
}
