package classi;

public class Libro extends Lettura {

	private String autore;
	private String genere;
	
	Libro(String t, String d, int n, String a, String g) {
		super(t, d, n);
		this.autore = a;
		this.genere = g;
	}
	
	public String getAuthor() {
		return this.autore;
	}
	
	public String toString() {
		return this.ISBN + " " +
				this.titolo + " " +
				this.annoPubblicazione + " " +
				this.numeroPagine + " " +
				this.autore + " " +
				this.genere;
				
			
	}
	
}
