package com.claudiourru.GestionePrenotazioni.entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "utenti")
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@ToString
public class Utente {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String username;
	private String nomeCompleto;
	private String email;
	
	
	@OneToMany(mappedBy = "utente")
	private List<Prenotazione> listaPrenotazioni;
	
}
