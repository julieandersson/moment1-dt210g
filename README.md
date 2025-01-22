# MOMENT 1 - DT210G - Introduktion till React

## Uppgiftsbeskrivning:
Denna uppgfit ingår i moment 1 av kursen DT201G, Fördjupad frontend-utveckling och gick ut på att skapa en enkel webbplats med React och TypeScript uppdelade i lämpliga komponenter. Webbplatsens syfte är att representera något fritidsintresse. 

Jag har valt att skapa en webbplats med en "reseöversikt", då mitt främsta intresse är att resa. Webbplatsens huvudinnehåll visar en lista i form av små "kort" över resmål och innehåller information som land, stad, antal dagar och om resmålet är besökt.

## Funktioner
- **Sidhuvud**: En header-komponent som visar en titel (skickas som en prop) och en bannerbild
- **Sidfot**: En footer-komponent med mitt namn och kontaktinformation
- **Huvudinnehåll**: En lista (i form av kort) med resemål, dynamiskt renderat med hjälp av en array och 'map'-funktionen. Varje kort innehåller:
- Land (string)
- Stad (string)
- Antal dagar (integer)
- Om resmålet har besökts (boolean, true/false)

## Tekniker och verktyg
- **React**: för att bygga en komponentbaserad webbplats
-**TypeScript**: För en strikt typkontroll och tydlig kod
-**CSS**: För specifik komponent-styling och responsiv design

Jag har valt att testa både komponentspecifik CSS med inline-CSS på vissa delar, blandat med CSS i separata stilmallar som importeras till komponenten. 

## Filstruktur
- **'src/components/'**: Innehåller komponenter som Header, Footer och TripCard
- **'src/css/'**: Innehåller CSSfiler för respektive komponent
- **'src/App.tsx'**: Huvudkomponent som organiserar webbplatsens innehåll

Bannerbilden är importerad i katalogen Public/

## Skapad av:
- Julie Andersson
- Webbutvecklingsprogrammet på Mittuniversitetet i Sundsvall
- Moment 1 - kurs DT210G - Fördjupad frontend-utveckling