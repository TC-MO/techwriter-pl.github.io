---
title: 'Jak zmigrować z WordPressa na Docusaurusa - poradnik'
authors: pensjonatus
date: '2024-01-03'
tags:
  - 'oferty-pracy'
  - 'praca'
  - 'kariera'
coverImage: 'docusaurus-to-wordpress.png'
---

Pod koniec 2023 roku przemigrowaliśmy tego bloga z WordPressa na Docusaurusa.
Dzięki temu mamy, między innymi, hosting za darmo.

<!-- truncate -->

## Z czego na co migrować?

WordPress to jedna z najpopularniejszych platform blogowych.
[Zdaniem W3Techs](https://w3techs.com/technologies/details/cm-wordpress),
WordPress jest używany na **ponad 43% wszystkich stronek w Internecie**. Nawet
jeśli to niekoniecznie prawda, to i tak wiemy, że WordPress jest solidną
platformą. Sami ją wybraliśmy 10 lat temu, kiedy zakładaliśmy bloga i przez całe
10 lat sprawowała się świetnie.

A czym jest [Docusaurus](https://docusaurus.io/)? To generator stron statycznych
napędzany przez Node.js i React. Ale czym to się różni od WordPressa?

WordPress działa na serwerze aplikacji, który uruchamia kod PHP i serwuje treści
przechowywane w bazie danych. Oznacza to, że do działania potrzebuje solidnej
infrastruktury, która zawiera, w optymalnej sytuacji, co najmniej dwa serwery -
serwer aplikacji i serwer bazy danych.

Generator stron statycznych jest aplikacją, która, jak sama nazwa wskazuje,
generuje strony. Konkretnie, generuje pliki HTML, CSS i JavaScript, które potem
wrzucamy na serwer HTTP i serwujemy odbiorcom. Nie jest do tego potrzebna ani
baza danych ani serwer aplikacji, infrastruktura jest przez to o wiele prostsza.
Jest na tyle prosta, że można ją hostować "za darmo" na platformie GitHub Pages.

Ale to nie jest powód, dla którego przemigrowaliśmy. A przynajmniej nie jest to
główny powód.

## Dlaczego migrować?

Chcieliśmy się czegoś nauczyć. Praca na WordPressie to nic trudnego. Logujesz
się, otwierasz edytor i piszesz. Praca w Docusaurusie wymaga trochę więcej
wysiłku, bo pracuje się w narzędziach developerskich. Konkretnie, pracuje się z
następującymi technologiami:

- GitHub jako repozytorium
- Edytor lub IDE, na przykład VS Code
- Git, żeby zarządzać wersjami
- React, żeby robić ładne stronki
- Node.js, żeby przeprowadzić migrację i optymalizować pracę

Z racji, że większość z nas pracuje w dokumentacji software'owej, uznaliśmy, że
warto nabrać praktycznego doświadczenia z tymi narzędziami. Poza tym nowe
umiejętności zawsze się przydadzą takim ludziom renesansu jak my. 🧐

Przy pracy z Docusaurusem wyzbywamy się pewnych wygód, jakie daje nam edytor
WYSIWYG WordPressa, ale dostajemy też większą wolność. Zmienianie wyglądu strony
WordPressa dzieje się w ramach wybranego szablonu i dokonanie gruntownych zmian
wymaga dużo pracy. Tymczasem strona Docusaurusa to React.js - jeśli sie go zna,
to dokonanie dowolnej zmiany staje się bardzo proste.

Ale to miał być poradnik. Więc przejdźmy od słów do czynów.

![Kadr z filmu Rejs, mężczyzna przemawia słowami: przejdźmy od słów do czynów, chciałem powiedzieć kilka słów](./images/od-slow.png)

_źródło: [Rejs](https://pl.wikiquote.org/wiki/Rejs), reż. Marek Piwowarski_
