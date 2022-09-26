package it.epicode.be;

import java.util.Arrays;

public class Helloworld {

public static void main (String[] args)
		{
		// Stampa a console  la frase
		System.out.println("This is my first Epicode Java Project!");
		System.out.println(moltiplica(2, 4));
		String[] arr = {"uno", "due", "tre", "quattro", "cinque"};
		System.out.println(Arrays.toString(inserisciInArray(arr, "ciao")));
		System.out.println(concatena("ciao", 4));
		}


public static int moltiplica(int n1, int n2) {
	return n1 * n2;
}
public static String concatena(String str, int n) {
	return str + n;
}
public static String[] inserisciInArray(String arr[], String str) {
	String[] res = {arr[0], arr[1], arr[2], str, arr[3], arr[4]};
	return res;
}



}



