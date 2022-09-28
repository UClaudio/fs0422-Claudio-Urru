package es4;

import java.util.Scanner;

public class Es4 {
	public static void contoReverse() {

		System.out.println("inserisci un numero per il conto alla rovescia: ");
		Scanner scan = new Scanner(System.in);

			String n = scan.nextLine();

		for(int i = Integer.parseInt(n); i != 0; i--) {
			
			System.out.println(i);
		}


	}
}
