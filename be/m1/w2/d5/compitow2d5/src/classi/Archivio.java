package classi;

import java.io.File;

import org.apache.commons.io.FileUtils;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;





public class Archivio {

	static File archivio = new File("docs/archivio.txt");
	
	static List<Lettura> archivioTemp = new ArrayList<>();
	
	public static void main(String[] args) {
		
		Libro lib = new Libro("ciao", "10-02-2000", 100, "io", "crypto");
		Libro lib2 = new Libro("ciao2", "10-02-2002", 102, "io2", "crypto2");
		Rivista riv = new Rivista("riv1", "3-05-1000", 50, Periodicita.settimanale);

		addElement(lib);
		addElement(lib2);
		addElement(riv);
		
		removeElement(1);
		
		System.out.println(archivioTemp.get(0).toString().split(" ")[1]);
		System.out.println(archivioTemp);
		removeElement(1);
		System.out.println(archivioTemp);

	}
	
	public static void addElement(Lettura l) {
		archivioTemp.add(l.ISBN, l);
	}
//		try {
//			FileUtils.write(archivio, l.toString() + "|", "UTF-8", true);
//		} catch (IOException e) {
//			e.printStackTrace();
//		}
	
	public static void removeElement(int id) {
		int i = (
				archivioTemp.indexOf(
				archivioTemp.stream()
				.filter((el) -> el.ISBN == id)
				.collect(Collectors.toList()).get(0)));
		System.out.println(archivioTemp.size() + "questo");
		System.out.println(i + " è i");
		archivioTemp.get(2);
		System.out.println(archivioTemp);

	}
/*
	public Lettura getElementByISBN(int ISBN) {
		return l;
	}
*/
}
