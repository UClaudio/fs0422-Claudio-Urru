package elementi;

import abstracts.Playable;

public class Audio extends Playable {
	
	public Audio(String title, int durata) {
		this.title = title;
		this.durata = durata;
		this.volume = 5;
	}
	
}
