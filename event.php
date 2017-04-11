

<?php

include 'ChromePhp.php';
ChromePhp::log('php running');
	
 $json = array();
 /*if($_POST['name']!=null)//check if any value is passed else use default value
 	{
 		 $table=$_POST['name'];
 		 
 		ChromePhp::log($table);
 	}
 	else
 	{
 		
 		 $table= 'event';
 		
 		ChromePhp::log($table);
 	}
 */



 // Query that retrieves events
 $requete = "SELECT * FROM `event` ORDER BY id";

 // connection to the database
 try {
 $bdd = new PDO('mysql:host=localhost;dbname=fullcalendar', 'root', 'root');
 } catch(Exception $e) {
  exit('Unable to connect to database.');
 }
 // Execute the query
 $resultat = $bdd->query($requete) or die(print_r($bdd->errorInfo()));
 
 // sending the encoded result to success page
 echo json_encode($resultat->fetchAll(PDO::FETCH_ASSOC));

?>