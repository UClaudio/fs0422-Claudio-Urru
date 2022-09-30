package lettore;
import java.util.Scanner;

import	elementi.*;

public class Lettore {
	
	private Scanner scan = new Scanner(System.in);
	String input = "";
	
	public void start() {
		while(!input.equals("0")) {
			System.out.println("0 - esci \n1- usa il lettore ");
			input = scan.nextLine();
			if (input.equals("1")) {
				System.out.println("in uso");
				using();
			} else if(!(input.equals("0") || input.equals("1"))) {
				
				System.out.println("inserisci solo input validi");
			}

		}
		scan.close();
		System.out.println("chiusura lettore");
	}
	
	private void using() {
		Object[] arr = new Object[5];
		System.out.println("immetti 5 elementi");
		for(int i = 0; i < arr.length; i++) {
			System.out.println("scegli il tipo del " + (i+1) + "° elemento\n1 - immagine\n2 - audio\n3 - video");
			input = scan.nextLine();
			if(!(input.equals("1") || input.equals("2") || input.equals("3"))) {
				i--;
				System.out.println("inserisci solo input validi");
			} else {
				System.out.println("valid");

			}
			
		}
	}

}
