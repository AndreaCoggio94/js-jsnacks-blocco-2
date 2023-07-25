# Snacks blocco 2

## JSnack1

Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

## JSnack2

Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.

## JSnack3

Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

## JSnack4 (Bonus)

Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

### svolgimento JSnack 1

- **PROMPT** scrivi "numero"
- **SE** pari o "% 2"
  - stampa il numero
- **ALTRIMENTI**
  - stampa "numero" + 1

## svolgimento JSnack 2

- crea lista nomi
- crea lista cognomi
- **PROMPT** quanti "invitati" ?
- crea lista "da invitare"
- **PER OGNI** "invitati"
  - genera numero casuale per nomi
  - genera numero casuale per cognomi
  - prendi i due indici dalla lista corrispettiva
  - inserisci il nome nella lista "da invitare

## svolgimento JSnack 3

- crea lista numeri interi
- crea variabile "somma" numeri
- **PER OGNI** lunghezza lista numeri interi
  - **SE** posizione dispari
    - prendi elemento dalla lista
    - aggiungilo alla "somma"
- stampa "somma"

## svolgimento JSnack 4

- crea array nomi
- crea array cognomi più lungo
- **PER OGNI** elemento in più che ha l'array più lungo
  - aggiungi elementi filler all'array più corto
