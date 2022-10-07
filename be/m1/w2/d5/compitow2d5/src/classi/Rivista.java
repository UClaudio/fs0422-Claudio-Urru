package classi;

public class Rivista extends Lettura {

	private Periodicita periodicita;

	Rivista(String t, String y, int n, Periodicita p) {
		super(t, y, n);
		this.periodicita = p;
	}
	
	public String toString() {
		return this.ISBN + " " +
				this.titolo + " " +
				this.annoPubblicazione + " " +
				this.numeroPagine + " " +
				this.periodicita;
	}
}
