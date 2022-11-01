package com.claudiourru.GestionePrenotazioni.exceptions;

public class PostazionePrenotazioneException extends Exception {
	
	public PostazionePrenotazioneException() {
		super("postazione già occupata in quella data");
	}
	
}
