# WDP210402 Projekt Zespołowy Realizowany w ramach kursu WebDeveloper

## Opis projektu

Repozytorium zawiera projekt oparty o technologię React. Prezentuje on przykładową stronę sklepu meblowego zakodowaną na podstawie darmowych szablonów PSD, w celu nauki pracy w grupie, stosowania zaawansowanych funkcjonalności Gita oraz nauki kodowania stron.

## Demo projektu

--Tu wstawimy link do opublikowanego projektu--

## Inicjacja projektu

Projekt uruchamiany na za pomocą Node.js v10.23.3

Po sklonowaniu projektu, zainstaluj wymagane paczki komendą `yarn install` (lub `npm install`).

Teraz możesz zacząć pracę, korzystając z przygotowanych taska `yarn start` (lub `npm start`).

Wszystkie potrzebne do pracy pliki źródłowe znajdują się w folderach `src` oraz `public`.

## NPM Scripts

Dostępne są 3 główne skrypty przyspieszające pracę:

- `build`: na bazie plików z folderów `src` i `public` buduje project w folderze `build`
- `start`: obserwuje zmiany w folderze `src` i uruchamia podgląd roboczy
- `test`: uruchomienie testów jednostkowych
- `refactor`: skrypt dokonuje automatycznego formatowania plików w folderze `src/`
  zgodnie z przyjętą konwencją formatowania kodu, a także sprawdza błędy za pomocą ESLinta

Projekt korzysta także z Git Hooks - możliwości uruchamiania skryptów w reakcji na wybrane zdarzenia programu Git.

Za każdym razem gdy wykonasz komendę `git commit` zostaną uruchomione testy jednostkowe, formatowanie oraz lintowanie
dla plików, które zostały wybrane za pomocą `git add` i mają być zapisane w commicie.

## Dobre praktyki oraz konwencje

W projekcie przyjęte są następujące założenia:

- pracę nad nową funkcjonalnością lub komponentem zawsze zaczynamy z gałęzi `master`
- dla każdego zadania tworzymy gałąź nazywającą się `WDP210402-(nazwa lub numer zadania)`
- komponenty wielokrotnego użytku umieszczamy w folderze `common` gdzie nazywamy ich folder `PrzykładowyKomponent`
- komponenty widoku takie jak sekcje strony umieszczamy w folderze `features` trzymając się tych samych zasad tworzenia nazewnictwa
- pliki styli umieszczamy w tym samym folderze co komponent, importując do nich ustawienia z pliku `settings.scss`
- pliki stylu są plikami modułowymi w zwiazku z czym ich nazwa powinna wyglądać następująco `NazwaKomponentu.module.scss`

## Możliwości wykorzystania

#### Swipeable
Komponent `Swipeable` można wykorzystać aby dodać prostą obsługę wykonywania akcji przy przesuwaniu palcem w lewo i prawao po ekranie. Wystarczy zaimportować komponent, owinąć nim element który ma posiadać obsługę swipe'a a w formie propsów leftAction oraz rightAction przekazać do komponentu Swipeable funkcje które mają być wykonywany w momencie wykrycia przesunięcia.

#### StarRating
Komponent `StarRating` można wykorzystać do wyświetlania oceny produktu w formie gwiazdek. Wystarczy zaimportować ten komponent do elementu w którym ma być wyświetlany i w formie propsów przekazać mu ocenę, która następnie będzie wyświetlona w formie gwiazdek. Komponent umożliwia również nadanie własnej oceny przez użytkownika oraz przekazanie jej do stanu aplikacji.

#### Button
Komponent `Button` może być wykorzystywany do generowania kilku wariantów przycisków, które można stworzyć w pliku styli tego komponentu.

