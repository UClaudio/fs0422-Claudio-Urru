package abstracts;
import interfaces.*;

public abstract class Playable extends ElementoMultimediale implements PlayableInterface {

	protected int volume;
	protected int durata;
	
	public void play() {
		for(int i = 0; i <= this.durata; i++) {
			System.out.println(this.title + "!".repeat(this.volume));
		}
	}
	
	public void abbassaVolume() {
		volume--;
		System.out.println("volume: " + volume);
	}
	
	public void alzaVolume() {
		volume++;
		System.out.println("volume: " + volume);
	}

}


































