# Terremeteo
18-12-2025
Borozan: Aggiunta dei components principali per il funzionamento del programma (la Parte grafica è da rimodellare) 
tutte le aggiunte sono state fatte nella cartella components

inoltre aggiunta cartella Pages per la gestione succesiva delle diverse paggine 

Aggiunta:{

    Globo3D.jsx 
    Logo.jsx
    CaricamentoAPI.jsx
    LuoghiPopolari.jsx
    SearchBar.jsx
    PannelloMeteo.jsx
} 

Matteucci: aggiunta di tutta la parte inerente alla chiamata delle api con qualche correzione del codice presente nel file:
logo.jsx, con aggiornamento del file luoghipopolari.jsx per risolvere un errore di caricamento 
aggiunta:{
    NotFoundPage.jsx
    ExplorePage.jsx
    WeatherService.js
    GeocodingService.js
}
i due file Service contengono le due api che siamo andati ad utilizzare il geocoding e le informazioni meteo .
modifica di componenti principali per andare a far visualizzare tutti i components con utilizzo di react router per gestire le due rotte principali e tramite * tutte le altre rotte che portano alla pagina not found
modifiche:{
    app.jsx
    app.css 
    index.css
    SearchBar.jsx 
}

19/12/2025

Borozan: Prima aggiunta del robot.txt per mestrare le rotte disponibbili dagli user e modifica alla parte css per migliorare diversi elementi estetici ,

Aggiunta Elements{

    MediaPages.jsx
}

Matteucci: Modifica del gitignore, modifiche importanti al marker della mappa con le sue diverse interazioni, file interessati:{
    caricamentoAPI.jsx
    globo3d.jsx 
    LuoghiPopolari.jsx
    SearchBar.jsx
    PannelloMeteo.jsx
    ExplorePage.jsx
}

20/12/2025

Matteucci: Implementazione del popup informativo accanto al marker e miglioramenti alla barra di ricerca:
- Aggiunto popup con informazioni meteo che appare automaticamente quando viene cercata una posizione
- Aggiunto bottone "Cerca" nella barra di ricerca con icona
- Barra di ricerca si chiude automaticamente quando viene eseguita una ricerca (clic bottone o Enter)
- Gestione del click fuori dalla barra di ricerca per chiudere i risultati
- Popup non si riapre automaticamente se è stato chiuso manualmente con la X
- implementazione funzioni reactive 

File modificati:{
    Globo3D.jsx (aggiunto MarkerInfoPopup, gestione posizionamento popup, reset camera)
    SearchBar.jsx (aggiunto bottone cerca, gestione chiusura automatica)
    ExplorePage.jsx (gestione reset visuale, posizionamento barra di ricerca)
}




problemi incontrati:
Problema: globo non in grado di ricercare i punti correttamente 
--soluzione: andare a cambiare il modello di riferimento con il globo e usare le coordinate della sfera di base invece che le % della sua area 

Problema: i bottoni delle città popolari non erano distribuiti uniformemente, creando spazi vuoti su schermi grandi
soluzione: implementare un layout responsive con flexbox che usa space-evenly su schermi grandi e flex-start con scroll orizzontale su mobile, aggiungendo anche minWidth e maxWidth per controllare le dimensioni dei bottoni

Problema: codice duplicato e logica sparsa tra i componenti, rendendo difficile la manutenzione
soluzione: estrarre la logica comune in custom hooks nella cartella hooks/, creando useCitySearch, useClickOutside, useWeatherData, useLocationSelection e utility per conversioni coordinate, rendendo il codice più modulare e riutilizzabile

Problema: la barra di ricerca non si chiudeva automaticamente dopo la selezione di una città
soluzione: aggiungere gestione dello stato showResults che si resetta quando viene selezionata una città o quando si clicca fuori dalla barra, utilizzando il hook useClickOutside per rilevare i click esterni

Problema: il popup del marker si riapriva automaticamente anche dopo essere stato chiuso manualmente dall'utente
soluzione: implementare un flag manuallyClosed che impedisce la riapertura automatica del popup se l'utente lo ha chiuso volontariamente, resettando il flag solo quando cambiano le coordinate selezionate 


decisioni intraprese durante lo sviluppo del progetto:
rispetto alla nostra relazione abbiamo deciso per comodità di andare a dividere l'interfaccia in 3 parti, la barra di ricerca, lo spazio 3d di three js e la barra con alcuni luoghi di esempio con i "posti più cercati" , invece di fare tutto sull'interfaccia 3d, abbiamo deciso di aggiungere una sezione nuova che serve a visualizzare i dettagli completi del meteo in maniera estesa.
per il resto lo schema del progetto con struttura, tecnologie e librerie usate rimane fedele alla documentazione fornita in precedenza