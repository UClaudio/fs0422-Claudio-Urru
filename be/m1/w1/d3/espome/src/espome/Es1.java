package espome;
import java.util.Scanner;
import es3.Es3;

import es2.Es2;
import es4.Es4;

public class Es1 {
	public static void main(String[] args) {
		System.out.println("stringa pari: " + stringaPariDispari("ciao") + " | stringa dispari: " + stringaPariDispari("mondo"));
		System.out.println("anno 2020: " + annoBisestile(2020) + " | anno 2022: " + annoBisestile(2022));
		Scanner scan = new Scanner(System.in);
		System.out.println("inserisci un numero: ");
		int scanInput = Integer.parseInt(scan.nextLine());
		Es2.switcher(scanInput);
		Es3.splitter();
		scan.close();
		Es4.contoReverse();

	}
	
	static boolean stringaPariDispari(String str) {
		return (str.length() % 2) == 0 ? true : false;
	}
	
	static boolean annoBisestile(int year) {
		return (year % 4) == 0 ? true : false;
	}
}
