package es3;

import java.util.Scanner;

public class Es3 {
	
	
	
	public static void splitter() {
		String s = "";
		while(!(s.equals("q"))) {
			Scanner scan = new Scanner(System.in);
			System.out.println("Inserisci una stringa");
			
			s = scan.nextLine();
			String res = String.join(",", s.split(""));
			System.out.println(res);
		}
	}
}
