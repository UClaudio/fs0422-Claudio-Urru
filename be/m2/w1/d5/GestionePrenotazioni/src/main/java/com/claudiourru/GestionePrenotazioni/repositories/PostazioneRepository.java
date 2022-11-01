package com.claudiourru.GestionePrenotazioni.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.claudiourru.GestionePrenotazioni.entities.Citta;
import com.claudiourru.GestionePrenotazioni.entities.Postazione;
import com.claudiourru.GestionePrenotazioni.entities.Tipo;

@Repository
public interface PostazioneRepository extends JpaRepository<Postazione, Long> {

	public List<Postazione> findByTipoAndEdificioCitta(Tipo t, Citta c);
}
