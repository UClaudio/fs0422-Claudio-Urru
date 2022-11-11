package incendi.main;

import incendi.models.CentroDiControllo;
import incendi.models.Sonda;

public class Main {

	public static void main(String[] args) {
	

	
	CentroDiControllo cdc = new CentroDiControllo();
	
	//(id lat, long, smoke level)
	Sonda s1 = new Sonda(1, "22.7", "18.4", 0);
	s1.register(cdc);
	
	s1.rilevaFumo();
	s1.setQuantitaDiFumo(3);
	s1.rilevaFumo();
	s1.setQuantitaDiFumo(9);
	s1.rilevaFumo();
	
	}

}
