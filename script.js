/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.

Certamente, ecco una spiegazione semplice dei principali datatype in JavaScript:

1. Numero: Rappresenta i numeri, come 1, 2, 3. Può essere utilizzato per eseguire operazioni matematiche.

2. Stringa: Una serie di caratteri racchiusi tra virgolette, come "ciao". Può contenere lettere, numeri e simboli.

3. Booleano: Può essere vero (`true`) o falso (`false`). Viene utilizzato per rappresentare condizioni logiche.

4. Null: Indica l'assenza di valore. Quando una variabile è impostata su `null`, significa che non ha alcun valore.

5  Undefined: Indica che una variabile è stata dichiarata, ma non ha un valore assegnato. È lo stato di default per le variabili appena create.

6. Oggetto: Un contenitore che può contenere dati e funzioni. Gli oggetti sono come scatole magiche che possono avere proprietà (dati) e metodi (funzioni).

7. Array: Una lista ordinata di valori. Gli elementi di un array possono essere di qualsiasi tipo, incluso un altro array.

8. Funzione: Un blocco di codice riutilizzabile che può essere chiamato con un nome specifico. Le funzioni possono ricevere input, eseguire operazioni e restituire un risultato.

Questi datatype sono gli elementi di base con cui lavorare in JavaScript, e ognuno ha un ruolo specifico nel gestire e manipolare i dati nel linguaggio di programmazione.


/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
/* Un oggetto in JavaScript è come una scatola magica che può contenere diversi tipi di cose. Ogni cosa nella scatola ha un nome, chiamato "proprietà", e possiamo far fare cose alla scatola, chiamate "metodi". */

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

console.log (12+20);
 

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
 */
let x = 12;
console.log(x);

 

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let name = "Luca";
console.log ("name");

 

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let sottrazione = 4 - x;
console.log ("sottrazione");

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "john";
let name2 = "John";

console.log(name1 !== name2);
console.log(name1.toLowerCase() === name2.toLowerCase());





