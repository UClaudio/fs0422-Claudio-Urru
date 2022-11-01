package com.claudiourru.GestionePrenotazioni.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.claudiourru.GestionePrenotazioni.entities.Utente;

@Repository
public interface UtenteRepository extends JpaRepository<Utente, Long> {

}
