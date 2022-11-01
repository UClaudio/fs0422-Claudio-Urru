package com.claudiourru.GestionePrenotazioni.exceptions;

public class PrenotazioneExistingException extends Exception {
	
	public PrenotazioneExistingException() {
		super("impossibile, è già presente una prenotazione in quella data");

	}
}
