package elementi;
import abstracts.ElementoMultimediale;
import interfaces.ImmagineInterface;

public class Immagine extends ElementoMultimediale implements ImmagineInterface {
	
	private int luminosita;
	
	public Immagine(String title){
		this.title = title;
		luminosita = 5;
	}
	
	public void show() {
		System.out.println(this.title + "*".repeat(luminosita));
	}
	
	public void diminuisciLuminosita() {
		this.luminosita--;
		System.out.println("luminosità: " + luminosita);
	}
	public void aumentaLuminosita() {
		luminosita++;
		System.out.println("luminosità: " + luminosita);
	}

}
