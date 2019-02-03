# Tieto

Jonas Pooters 

"HELSINGIN TAPAHTUMA APP" 
------------------------ 

-Hakee 6 viimeisintä tapauhtumaa 
-näyttää ajan, paikan, kuvauksen sekä linkin 

open-api.myhelsinki.fi/events/ 


HAASTE
------

-Miten REST API saadaan wrapattua täysin clientin puolella


Kirjastot ja Framworkit
------------------------

- apollo-link-rest
	apollo-link 
		- Rest APIin yhdistämiseen
- apollo-client
		- Apollo Graphql clientin rakentamiseen 
- react-apollo
		- sisältää graphql 
		- graphql:n helppoon implementointii react native apissa 
- apollo-cache-inmemory
		-jo tehtyjen hakujen catcheemiseen
- react-native
		- interfacen rakentamiseen 
- react-native-navigation
		-navigoinnin rakentamiseen 

- jest 
		-testaukseen
- expo 
		-kehitykseen 

- Postman - rest apin kokeiluun/testaukseen ja analysointiin 


TIDOSTOT JA KOMPONENTIT 
------------------------

App.js
------


App.js App wrapataan Apollo provideriin, jotta Apollon hakema data saadaan koko apin käyttöön.
Luodaan Apollo Cli sekä määritellän REST APIn osoite.


Useamman endpointin määrittely:

const link = new RestLink({ endpoints: { v1: 'open-api.myhelsinki.fi/events/v1', v2: 'open-api.myhelsinki.fi/events/v2' } });


Clientin määrittely ja cachen määrittely:


const client = new ApolloClient({
  link: restLink,						
  cache: new InMemoryCache(),     /// in memory cache määritellään täällä  
});


const App = () => (
  <ApolloProvider client={client}>
    <MyRootComponent />
  </ApolloProvider>
);



Queries.js 
-----------
	
Tehdään haut. 

ESIMERKKI REST APIIN TEHDYSTÄ HAUSTA 

query GET_EVENTS {
	Events @rest(type: "Event", path: "/events") {
		total
		data @type(name: "name") {
			id
			date
			date-end
			link
			kuvaus

		}
	}
}



EventFrame.js
-------------


Event listin frame joka sisältäää otsikot (tapahtumanimet ja rakenteen EventListiin tulevalle 

EventList.js
------------

Sisältää <Eventlist /> komponentin.  Kun <Eventlist /> mounttaa hakee se ( GET_EVENTS ) samalla 6 viimeistä tapahtumaa ja niiden tiedot.


Esimerkki:

client.GET_EVENTS({ query }).then(response => {
  console.log(response.data.name);                 //// JSONiin consolen sijaan
});

Sisältää myös <Flatlist /> componentin johon tulokset rendataa.


Navi.js 
-------

Navigointia käytetään uuden haun tekemiseen toisella sivulla ja palaamiseen. 



Styles.js 
---------
	
Tyylit omalla tiedostolla CSS tyyliin 



Testit 
---------

Testataan tuleeko data oikein APIsta mockkaamalla tulos. 
Snapshotilla testataan renderöityykö komponentit oikein. 






