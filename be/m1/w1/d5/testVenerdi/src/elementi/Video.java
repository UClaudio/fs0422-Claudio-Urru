package elementi;
import abstracts.Playable;
import interfaces.VideoInterface;

public class Video extends Playable implements VideoInterface {
	
	private int luminosita;

	public Video(String title, int durata) {
		this.title = title;
		this.durata = durata;
		this.volume = 3;
		this.luminosita = 5;
	}
	
	public void play() {
		for(int i = 0; i <= durata; i++) {
			System.out.println(this.title + "!".repeat(this.volume) + "*".repeat(this.luminosita));
		}
	}
	
	public void diminuisciLuminosita() {
		this.luminosita--;
		System.out.println("luminosità: " + luminosita);
	}
	public void aumentaLuminosita() {
		this.luminosita++;
		System.out.println("luminosità: " + luminosita);
	}
	
	
	
	
	
	
	
	
	
	


}
