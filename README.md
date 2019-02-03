# Tieto
Jonas Pooters 

"HELSINGIN TAPAHTUMA APP" 
------------------------ 

-Hakee 10 viimeisintä tapauhtumaa 
-näyttää ajan, paikan, kuvauksen sekä linkin 

open-api.myhelsinki.fi/events/ 

----MAHDOLLISIA-LISÄ-OMINAISUUKSIA-----

HAASTE
------

-Miten REST API saadaan wrapattua täysin clientin puolella


Tech 
----

--- apollo-link-rest
	apollo-link 
		- Rest APIin yhdistämiseen
--- apollo-client
		- Apollo Graphql clientin rakentamiseen 
--- react-apollo
		- sisältää graphql 
		- graphql:n helppoon implementointii react native apissa 
--- apollo-cache-inmemory
		-jo tehtyjen hakujen catcheemiseen
--- react-native
		- interfacen rakentamiseen 
--- react-native-navigation
		-navigoinnin rakentamiseen 

--- jest 
		-testaukseen
--- expo 
		-kehitykseen 

--- Postman - rest apin kokeiluun/testaukseen ja analysointiin 


TIDOSTOT JA KOMPONENTIT 

App.js
------

	Täällä App wrapataan Apollo privedriin jotta Apollon hakema data saadaan koko apin käyttöön tähän tapaan.
	Tehdään myös Apollo Cli sekä määritellän res link 

-----------------

Useamman endpointin määrittely:

 const link = new RestLink({ endpoints: { v1: 'open-api.myhelsinki.fi/events/v1', v2: 'open-api.myhelsinki.fi/events/v2' } });

--------------------

Clientin määrittely ja cachen määrittely

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),     /// in memory cache määritellään täällä  
});


--------------------------

const App = () => (
  <ApolloProvider client={client}>
    <MyRootComponent />
  </ApolloProvider>
);



----------------------------


Queries.js 
---------
	
täällä tehdään haut 

ESIMERKKI REST APIIN TEHDYSTÄ HAUSTA 

const query = gql`
  query luke {
    person @rest(type: "Person", path: "people/1/") {
      name
    }
  }
`;

EventFrame.js
-------------


Event listin frame joka sisältäää default nimet ja rakenteen eventlisiin tulevalle datalle.

EventList.js
------------

Kun tämä mounttaa hakee se samalla 5 viimeistä tapahtumaa ja niiden tiedot.

ESIMERKKI 
--------

client.query({ query }).then(response => {
  console.log(response.data.name);                 //// JSONiin consolen sijaan
});

Sisältää myös <Flatlist /> componentin johon tulokset rendataa.

Sisältää myös napit uutta hakua varten ellei sitä haluta siirtää toiselle sivulle. 


Navi.js 
-------

	NAvigointi jos sille tulee tarvetta 

Styles.js 
---------
	
	Stylet omalla tiedostolla CSS tyyliin 



_Test_.js 
---------

	Testataan tuleeko data oikein ja rendaako se flatlistiin  - JEST 







