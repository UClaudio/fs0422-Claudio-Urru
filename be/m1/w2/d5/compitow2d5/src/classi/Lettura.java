package classi;

import interfaces.lettura;

public abstract class Lettura implements lettura{
	
	protected int ISBN;
	protected static int idCounter = 0;
	protected String titolo;
	protected String annoPubblicazione;
	protected int numeroPagine;
	
	Lettura(String t, String y, int n) {
		this.ISBN = Lettura.idCounter ++;
		this.titolo = t;
		this.annoPubblicazione = y;
		this.numeroPagine = n;
	}
	
	public int getById() {
		return this.ISBN;
	}
	
	public String getYear() {
		return this.annoPubblicazione;
	}
	
}
