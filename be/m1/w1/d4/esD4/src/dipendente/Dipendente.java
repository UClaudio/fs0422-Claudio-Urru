package dipendente;

/*
 * Esercizio #1
Scrivere la classe Dipendente che ha i seguenti attributi:

Attributi statici
- stipendioBase - numero decimale con stipendio base mensile prevalorizzato a 1000 accessibile a tutte le classi
- matricola - identificativo univoco del dipendente
- stipendio - numero decimale con stipendio base mensile calcolato per il dipendente
- importoOrarioStraordinario - numero decimale con importo per ogni ora di straordinario
- Livello - valori possibili [OPERAIO, IMPIEGATO, QUADRO, DIRIGENTE]
- Dipartimento - Valori possibili [PRODUZIONE, AMMINISTRAZIONE, VENDITE]

Le proprietÃ  devono essere accessibili solo dalla classe Dipendente e deve essere possibile leggerle tramite opportuni metodi
 get ma non modificarle, tranne le proprietÃ  Dipartimento e importoOrarioStraordinario  che possono essere modificate da altre
  classi tramite un metodo di set.

Definire due costruttori: 
- uno che accetti solo la matricola e Dipartimento ed imposti i seguenti valori
	- stipendio = stipendioBase
	- importoOrarioStraordinario = 30
	- Livello = OPERAIO
- Uno che accetti tutti i parametri

Definire i seguenti metodi
- stampaDatiDipendente - Stampa i dati del dipendente
- promuovi - aggiorna il livello del dipendente con la seguente logica 
	se il Dipendente Ã¨ operaio lo promuove a impiegato
	se il Dipendente Ã¨ impiegato lo promuove a quadro
	se il Dipendente Ã¨ quadro lo promuove a dirigente
	se il Dipendente Ã¨ dirigente resta tale e scrive un messaggio di errore
  Il metodo aggiorna inoltre lo stipendio del dipendente con la seguente logica
	- IMPIEGATO = stipendioBase * 1,2
	- QUADRO = stipendioBase * 1,5
	- DIRIGENTE = stipendioBase * 2
 Infine il metodo ritorna il nuovo livello del dipendente

Definire i seguenti metodi statici:
- calcolaPaga - accetta un'istanza di dipendente e ne ritorna lo stipendio mensile
- calcolaPaga - accetta un'istanza di dipendente ed un parametro intero con le ore di straordinario e ritorna lo stipendio mensile comprensivo di straordinario
 * */

enum Role {
	OPERAIO, IMPIEGATO, QUADRO, DIRIGENTE
}

enum Department {
	PRODUZIONE, AMMINISTRAZIONE, VENDITE
}


public class Dipendente {

	public static void main(String[] args) {
		Dipendente d1 = new Dipendente(1, Department.PRODUZIONE);
		d1.stampaDatiDipendente();
		System.out.println(d1.getLivello());
		d1.promuovi();
		System.out.println(d1.getLivello());
		d1.stampaDatiDipendente();
		d1.promuovi();
		System.out.println(d1.getLivello());
		d1.stampaDatiDipendente();
		d1.promuovi();
		d1.stampaDatiDipendente();


	}
	
	private double stipendioBase = 1000;
	private int matricola;
	private double stipendio;
	private double importoOrarioStraordinario;
	private Role livello;
	private Department dipartimento;
	
	
	Dipendente(int matricola, Department dipartimento){
		this.matricola = matricola;
		this.stipendio = this.stipendioBase;
		this.importoOrarioStraordinario = 30;
		this.livello = Role.OPERAIO;
	}
	
	Dipendente(double stipendioBase, int matricola, double stipendio, double importoOrarioStraordinario, Role livello, Department dipartimento){
		this.stipendioBase = stipendioBase;
		this.matricola = matricola;
		this.stipendio = stipendio;
		this.importoOrarioStraordinario = importoOrarioStraordinario;
		this.livello = livello;
		this.dipartimento = dipartimento;
	}
	public double getStipendioBase() {
		return this.stipendioBase;
	}
	
	public int getMatricola() {
		return this.matricola;
	}
	
	public double getStipendio() {
		return this.stipendio;
	}
	
	public double getImportoOrarioStraordinario() {
		return this.importoOrarioStraordinario;
	}
	
	public Role getLivello() {
		return this.livello;
	}

	public Department getDipartimento() {
		return this.dipartimento;
	}
	
	public void setDipartimento(String d) {
		switch(d) {
			case("produzione"):
				this.dipartimento = Department.PRODUZIONE;
				break;
			case("amministrazione"):
				this.dipartimento = Department.AMMINISTRAZIONE;
				break;
			case("VENDITE"):
				this.dipartimento = Department.VENDITE;
				break;
		}
	}
	public void setImportoOrarioStraordinario(double importo) {
		this.importoOrarioStraordinario = importo;
	}
	
	public void stampaDatiDipendente() {
		System.out.println("stipendio base | matricola | stipendio | importo orario straordinario | livello   | dipartimento");
		System.out.println("     " + this.stipendioBase+ "     |     " + this.matricola + "     |  " + this.stipendio + "  |             " + this.importoOrarioStraordinario + "             | " + this.livello + " | " + this.dipartimento);
	}
	
	public Role promuovi() {
		switch(this.livello) {
		case OPERAIO:
			this.livello = Role.IMPIEGATO;
			this.stipendio = this.stipendioBase * 1.2;
			break;
		case IMPIEGATO:
			this.livello = Role.QUADRO;
			this.stipendio = this.stipendioBase * 1.5;
			break;
		case QUADRO:
			this.livello = Role.DIRIGENTE;
			this.stipendio = this.stipendioBase * 2;
			break;
		case DIRIGENTE:
			break;
		
		}
		return this.livello;
	}
}







