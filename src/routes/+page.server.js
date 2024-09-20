export async function load() {
    try {
        //dit fetched data van een specifieke end point const response is een variable 
        // waar er word gezegt fetch deze url en een if statement dat een error bericht mee geeft als het niet werkt
      const response = await fetch('https://fdnd.directus.app/items/person/');
      if (!response.ok) throw new Error('Failed to fetch data');
      
      // het Parsen van de response naar JSON
      const data = await response.json();
      
      // Gefilterd naar 5 specifieke IDs (IDs: 84, 79, 18, 58, 25) waar deze data gemanipuleerd kan worden
      const specificIds = [84, 79, 18, 58, 25];

      // Het filteren van de data met alleen betrekking tot de personen met de specifieke IDs
      const filteredPersons = data.data.filter(person => specificIds.includes(person.id));
  
      //terug geven van de persons data en mee geven aan de pagina component
      return {
        persons: filteredPersons || []
      };
    } catch (error) {
        // Het loggen en terug geven van een lege lijst van personen als error bericht
      console.error('Error fetching data:', error);
      return {
        persons: [],
        error: error.message
      };
    }
  }
  
  