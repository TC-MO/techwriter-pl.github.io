"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[66285],{59035:(i,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>t,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>k});var a=n(85893),o=n(11151);const r={title:"Jak tworzy\u0107 komunikaty o b\u0142\u0119dach?",authors:"mojk",date:"2015-05-05",tags:["dobre-praktyki","przyklady","warsztat","aplikacje","pomoc-uzytkownika","uzytecznosc"],coverImage:"error-102075_640-e1430287810378.jpg"},t=void 0,s={permalink:"/jak-tworzyc-komunikaty-o-bledach",editUrl:"https://github.com/techwriter-pl/techwriter-pl.github.io/tree/main/blog/jak-tworzyc-komunikaty-o-bledach/index.md",source:"@site/blog/jak-tworzyc-komunikaty-o-bledach/index.md",title:"Jak tworzy\u0107 komunikaty o b\u0142\u0119dach?",description:"Czy do Was te\u017c przychodz\u0105 programi\u015bci z pytaniami co napisa\u0107 w wyskakuj\u0105cym",date:"2015-05-05T00:00:00.000Z",formattedDate:"5 maja 2015",tags:[{label:"dobre-praktyki",permalink:"/tags/dobre-praktyki"},{label:"przyklady",permalink:"/tags/przyklady"},{label:"warsztat",permalink:"/tags/warsztat"},{label:"aplikacje",permalink:"/tags/aplikacje"},{label:"pomoc-uzytkownika",permalink:"/tags/pomoc-uzytkownika"},{label:"uzytecznosc",permalink:"/tags/uzytecznosc"}],readingTime:5.025,hasTruncateMarker:!0,authors:[{name:"Micha\u0142 Skowron",role:"Administrator",url:"https://github.com/docdeveloper",imageURL:"https://github.com/docdeveloper.png",key:"mojk"}],frontMatter:{title:"Jak tworzy\u0107 komunikaty o b\u0142\u0119dach?",authors:"mojk",date:"2015-05-05",tags:["dobre-praktyki","przyklady","warsztat","aplikacje","pomoc-uzytkownika","uzytecznosc"],coverImage:"error-102075_640-e1430287810378.jpg"},unlisted:!1,prevItem:{title:"Konferencje 2015 - drugie p\xf3\u0142rocze",permalink:"/konferencje-2015-drugie-polrocze"},nextItem:{title:"Less is more strikes again!",permalink:"/less-is-more-strikes-again"}},l={authorsImageUrls:[void 0]},k=[{value:"Definicja",id:"definicja",level:3},{value:"Tre\u015b\u0107",id:"tre\u015b\u0107",level:3},{value:"Typy",id:"typy",level:3},{value:"Zasady",id:"zasady",level:3},{value:"Popularne b\u0142\u0119dy",id:"popularne-b\u0142\u0119dy",level:3},{value:"Jak tworzy\u0107 lepsze komunikaty?",id:"jak-tworzy\u0107-lepsze-komunikaty",level:3},{value:"Proces tworzenia komunikat\xf3w",id:"proces-tworzenia-komunikat\xf3w",level:3},{value:"Dobre praktyki",id:"dobre-praktyki",level:3},{value:"Co na to koledzy Billa?",id:"co-na-to-koledzy-billa",level:3}];function c(i){const e={a:"a",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...i.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.p,{children:["Czy do Was te\u017c przychodz\u0105 programi\u015bci z pytaniami co napisa\u0107 w wyskakuj\u0105cym\nokienku, kt\xf3re i tak nigdy si\u0119 przecie\u017c nie poka\u017ce? Je\u015bli tak, to dzisiejszy\nwpis mo\u017ce Was zainteresowa\u0107. Niedawno trafili\u015bmy na\n",(0,a.jsx)(e.a,{href:"http://www.ihearttechnicalwriting.com/write-error-messages/",children:"artyku\u0142"}),"\nporuszaj\u0105cy w\u0142a\u015bnie to zagadnienie. Pisanie kr\xf3tkich komunikat\xf3w to tak naprawd\u0119\nrodzaj sztuki - w ma\u0142ym okienku musimy zawrze\u0107 wszystkie niezb\u0119dne informacje\nzachowuj\u0105c przy tym poprawno\u015b\u0107 j\u0119zykow\u0105 i jasno\u015b\u0107 przekazu. Zasada jest prosta -\nim mniej mamy miejsca, tym wi\u0119cej czasu sp\u0119dzimy pisz\u0105c komunikat. Warto jednak\npo\u015bwi\u0119ci\u0107 czas na stworzenie komunikat\xf3w dobrej jako\u015bci, poniewa\u017c s\u0105 one\nistotnym elementem ka\u017cdego systemu. Pe\u0142ni\u0105 one rol\u0119 pierwszej linii wsparcia,\ndlatego je\u015bli s\u0105 s\u0142abej jako\u015bci, negatywnie wp\u0142ywaj\u0105 na jako\u015b\u0107 produktu oraz\npowoduj\u0105 frustracj\u0119 u\u017cytkownik\xf3w, co z kolei przek\u0142ada si\u0119 bezpo\u015brednio na\nkoszty wsparcia technicznego. Jak powszechnie wiadomo, ka\u017cda terapia zaczyna si\u0119\nod przyznania, \u017ce mamy problem. Tak samo jest w przypadku oprogramowania. Ka\u017cdy\nsystem ma swoje problemy, dlatego dopiero kiedy to zaakceptujemy, mo\u017cemy zabra\u0107\nsi\u0119 do tworzenia komunikat\xf3w o b\u0142\u0119dach z odpowiednim nastawieniem. Naszym celem\njest przede wszystkim pomoc u\u017cytkownikom. Poni\u017cej gar\u015b\u0107 wytycznych jak tworzy\u0107\ndobre komunikaty o b\u0142\u0119dach (bynajmniej nie takie, jak komunikat w grafice do\ntego wpisu). S\u0105 one skierowane zar\xf3wno do dokumentalist\xf3w jak i programist\xf3w."]}),"\n",(0,a.jsx)(e.h3,{id:"definicja",children:"Definicja"}),"\n",(0,a.jsx)(e.p,{children:"Komunikat o b\u0142\u0119dzie (error message) to informacja o tym co powoduje, \u017ce\nu\u017cytkownik lub system nie s\u0105 w stanie wykona\u0107 zadania."}),"\n",(0,a.jsx)(e.h3,{id:"tre\u015b\u0107",children:"Tre\u015b\u0107"}),"\n",(0,a.jsx)(e.p,{children:"Dobrze skonstruowany komunikat powinien zawiera\u0107 takie informacje:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Jaki jest problem i dlaczego wyst\u0105pi\u0142"}),"\n",(0,a.jsx)(e.li,{children:"Jaki ma to wp\u0142yw na u\u017cytkownika"}),"\n",(0,a.jsx)(e.li,{children:"Co mo\u017cna zrobi\u0107, \u017ceby problem si\u0119 nie powt\xf3rzy\u0142"}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"Og\xf3lnie, komunikat powinien zawiera\u0107 na tyle du\u017co informacji o problemie, \u017ceby\nu\u017cytkownik m\xf3g\u0142 go sam rozwi\u0105za\u0107."}),"\n",(0,a.jsx)(e.h3,{id:"typy",children:"Typy"}),"\n",(0,a.jsx)(e.p,{children:"Komunikaty o b\u0142\u0119dach mo\u017cna podzieli\u0107 na cztery kategorie:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"B\u0142\u0105d (Error)"}),"\n",(0,a.jsx)(e.li,{children:"Ostrze\u017cenie (Warning)"}),"\n",(0,a.jsx)(e.li,{children:"Potwierdzenie (Confirmation)"}),"\n",(0,a.jsx)(e.li,{children:"Powiadomienie (Notification)"}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"zasady",children:"Zasady"}),"\n",(0,a.jsx)(e.p,{children:"Tworz\u0105c komunikaty kieruj si\u0119 poni\u017cszymi wytycznymi:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Podawaj tylko konkretne informacje."}),"\n",(0,a.jsx)(e.li,{children:"Ucz u\u017cytkownika jak u\u017cywa\u0107 aplikacji (podawaj przyk\u0142ady)."}),"\n",(0,a.jsx)(e.li,{children:"Wska\u017c problem, a nast\u0119pnie jego rozwi\u0105zanie."}),"\n",(0,a.jsx)(e.li,{children:"Dostosuj poziom informacji do stopnia zaawansowania u\u017cytkownika."}),"\n",(0,a.jsx)(e.li,{children:"Oszcz\u0119d\u017a pracy u\u017cytkownikowi - pozw\xf3l na poprawienie b\u0142\u0119du, zamiast kaza\u0107\nzaczyna\u0107 od pocz\u0105tku."}),"\n",(0,a.jsx)(e.li,{children:"U\u017cywaj pozytywnego tonu, nie pot\u0119piaj."}),"\n",(0,a.jsx)(e.li,{children:"Zachowaj sp\xf3jno\u015b\u0107 w terminologii, gramatyce, skr\xf3tach, formatowaniu i\nrozk\u0142adzie wizualnym."}),"\n",(0,a.jsx)(e.li,{children:"U\u017cywaj prostego j\u0119zyka (sp\xf3jnego, bez niepotrzebnych s\u0142\xf3w) i zrozumia\u0142ej\nterminologii."}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"popularne-b\u0142\u0119dy",children:"Popularne b\u0142\u0119dy"}),"\n",(0,a.jsx)(e.p,{children:"Unikaj poni\u017cszych b\u0142\u0119d\xf3w:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Nie wzbudzaj poczucia winy - je\u015bli u\u017cytkownik pope\u0142ni\u0142 b\u0142\u0105d, nie wytykaj mu\ntego, tylko napisz w czym le\u017cy problem."}),"\n",(0,a.jsx)(e.li,{children:'Unikaj zbyt og\xf3lnych stwierdze\u0144 i zagadkowych liczb, np. "b\u0142\u0105d 724".'}),"\n",(0,a.jsx)(e.li,{children:"Unikaj \u017cargonu, \u017cart\xf3w, slangu, skr\xf3t\xf3w i negatywnych zwrot\xf3w, takich jak:\nz\u0142y, nieprawid\u0142owy, niedopuszczalny."}),"\n",(0,a.jsx)(e.li,{children:"Ogranicz czerwony kolor tam gdzie to mo\u017cliwe, z wyj\u0105tkiem sytuacji kiedy\ndzia\u0142ania u\u017cytkownika mog\u0105 mie\u0107 powa\u017cne konsekwencje; wtedy nale\u017cy\nniezw\u0142ocznie powiadomi\u0107 u\u017cytkownika w wyra\u017any spos\xf3b, \u017ce stanie si\u0119 co\u015b\npowa\u017cnego."}),"\n",(0,a.jsx)(e.li,{children:'Nie u\u017cywaj s\u0142owa "b\u0142\u0105d" w tytule okna.'}),"\n",(0,a.jsx)(e.li,{children:"Nie stosuj antropomorfizacji - nie sugeruj, \u017ce oprogramowanie ma uczucia lub\nmy\u015bli."}),"\n",(0,a.jsx)(e.li,{children:"Unikaj zwrot\xf3w, kt\xf3re mog\u0105 zosta\u0107 uznane za obra\u017aliwe w niekt\xf3rych kulturach."}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"jak-tworzy\u0107-lepsze-komunikaty",children:"Jak tworzy\u0107 lepsze komunikaty?"}),"\n",(0,a.jsx)(e.p,{children:"Nasze komunikaty mog\u0105 by\u0107 jeszcze bardziej przyjazne dla u\u017cytkownik\xf3w je\u015bli\nb\u0119dziemy trzyma\u0107 si\u0119 poni\u017cszych zasad:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Zmie\u0144 tymczasowe komunikaty, kt\xf3re zosta\u0142y stworzone w trakcie test\xf3w i\nodnosz\u0105 si\u0119 do klas, obiekt\xf3w i innych element\xf3w kodu."}),"\n",(0,a.jsx)(e.li,{children:"Zmie\u0144 komunikaty, kt\xf3re pozostawiaj\u0105 u\u017cytkownika w stanie zawieszenia - nie\ninformuj\u0105 dok\u0142adnie co spowodowa\u0142o problem i jak odzyska\u0107 utracone dane."}),"\n",(0,a.jsx)(e.li,{children:"Je\u015bli to mo\u017cliwe, dodaj linki do pomocy, kt\xf3ra zawiera wi\u0119cej informacji o\nproblemie i o tym jak skontaktowa\u0107 si\u0119 ze wsparciem technicznym."}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"Wskaz\xf3wka dla os\xf3b niezwi\u0105zanych z tworzeniem dokumentacji:"})," Zaanga\u017cuj\ndokumentalist\u0119 w pisanie i ulepszanie komunikat\xf3w; je\u015bli w firmie nie ma\ntakiej osoby, powierz to zadanie komu\u015b kto najlepiej radzi sobie z pisaniem\ntekst\xf3w."]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"proces-tworzenia-komunikat\xf3w",children:"Proces tworzenia komunikat\xf3w"}),"\n",(0,a.jsx)(e.p,{children:"Komunikaty b\u0142\u0119d\xf3w mo\u017cna tworzy\u0107 w nast\u0119puj\u0105cy spos\xf3b:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Stw\xf3rz arkusz, np. w Excelu, dodaj kolumny dla komunikat\xf3w i g\u0142\xf3wnych przyczyn\nich wyst\u0105pienia."}),"\n",(0,a.jsx)(e.li,{children:"Ponumeruj b\u0142\u0119dy."}),"\n",(0,a.jsx)(e.li,{children:"Stw\xf3rz zesp\xf3\u0142 kontroluj\u0105cy jako\u015b\u0107 komunikat\xf3w."}),"\n",(0,a.jsx)(e.li,{children:"Stw\xf3rz zbi\xf3r dobrych praktyk i podziel si\u0119 nimi z zespo\u0142em."}),"\n",(0,a.jsx)(e.li,{children:"Stw\xf3rz wytyczne dotycz\u0105ce pisania komunikat\xf3w, kt\xf3re mo\u017cna \u0142atwo wcieli\u0107 w\n\u017cycie, wraz z przyk\u0142adami."}),"\n",(0,a.jsx)(e.li,{children:"Uwzgl\u0119dnij komunikaty pojawiaj\u0105ce si\u0119 w aplikacji na etapie projektowania\noprogramowania."}),"\n",(0,a.jsx)(e.li,{children:"Do\u0142\u0105cz komunikaty do systemu kontroli wersji."}),"\n",(0,a.jsx)(e.li,{children:"Recenzuj komunikaty w trakcie rozwoju oprogramowania."}),"\n",(0,a.jsx)(e.li,{children:"Postaraj si\u0119 wyeliminowa\u0107 potrzeb\u0119 tworzenia komunikat\xf3w na tyle na ile to\nmo\u017cliwe."}),"\n",(0,a.jsx)(e.li,{children:"Przeprowadzaj testy akceptacyjne na komunikatach."}),"\n",(0,a.jsx)(e.li,{children:"Okresowo sprawdzaj komunikaty."}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"dobre-praktyki",children:"Dobre praktyki"}),"\n",(0,a.jsx)(e.p,{children:"Tworz\u0105c komunikaty"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:'Unikaj s\u0142owa "nieprawid\u0142owy". U\u017cywaj bardziej opisowych stwierdze\u0144, \u017ceby\npoinformowa\u0107 u\u017cytkownika co jest nie tak, np. unikaj komunikat\xf3w takich jak\n"Nieprawid\u0142owy rozmiar". Zamiast tego, poinformuj u\u017cytkownika jakich kryteri\xf3w\npowinien u\u017cy\u0107 podaj\u0105c rozmiar.'}),"\n",(0,a.jsx)(e.li,{children:'Unikaj s\u0142owa "prosz\u0119". Mo\u017ce ono zosta\u0107 zinterpretowane w taki spos\xf3b, \u017ce\nwymagana czynno\u015b\u0107 jest opcjonalna.'}),"\n",(0,a.jsx)(e.li,{children:"Nie u\u017cywaj du\u017cych liter i wykrzyknik\xf3w."}),"\n",(0,a.jsx)(e.li,{children:"Wyja\u015bnij co jest rozwi\u0105zaniem problemu. Je\u015bli zawiera wi\u0119cej ni\u017c jeden krok,\npodaj link do strony z pomoc\u0105, kt\xf3ra opisuje procedur\u0119 szczeg\xf3\u0142owo."}),"\n",(0,a.jsx)(e.li,{children:'Wstaw deskryptory przed w\u0142a\u015bciwymi terminami, \u017ceby wyja\u015bni\u0107 znaczenie zdania,\nnp. "Okre\u015bl ID kiedy Detect jest ustawione na No" powinno by\u0107 zmienione na\n"Okre\u015bl parametr ID je\u015bli opcja Detect jest ustawiona na No".'}),"\n",(0,a.jsx)(e.li,{children:"U\u017cywaj pe\u0142nych zda\u0144 i strony czynnej je\u015bli to mo\u017cliwe."}),"\n",(0,a.jsx)(e.li,{children:'U\u017cyj przycisku "Anuluj", \u017ceby zatrzyma\u0107 operacj\u0119 i zamkn\u0105\u0107 okienko z\ninformacj\u0105.'}),"\n",(0,a.jsx)(e.li,{children:'U\u017cyj przycisku "Zamknij", \u017ceby zamkn\u0105\u0107 okienko z informacj\u0105.'}),"\n",(0,a.jsx)(e.li,{children:'U\u017cyj przycisku "Szczeg\xf3\u0142y", \u017ceby dostarczy\u0107 wi\u0119cej informacji o przyczynie\nproblemu.'}),"\n",(0,a.jsx)(e.li,{children:'U\u017cyj przycisku "Pomoc", \u017ceby dostarczy\u0107 wi\u0119cej informacji o rozwi\u0105zaniu\nproblemu.'}),"\n",(0,a.jsx)(e.li,{children:"U\u017cywaj czasu tera\u017aniejszego do opisywania okoliczno\u015bci, kt\xf3re spowodowa\u0142y\nproblem."}),"\n",(0,a.jsx)(e.li,{children:"Zapisuj b\u0142\u0119dy krytyczne w dzienniku zdarze\u0144."}),"\n",(0,a.jsx)(e.li,{children:"Zapisuj osobne komunikaty o b\u0142\u0119dach dla ka\u017cdego znanego problemu."}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"co-na-to-koledzy-billa",children:"Co na to koledzy Billa?"}),"\n",(0,a.jsx)(e.p,{children:"Microsoft zaleca nast\u0119puj\u0105ce rzeczy:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Unikaj niejasnych sformu\u0142owa\u0144 i podawaj konkretne nazwy i lokalizacje dla\nobiekt\xf3w."}),"\n",(0,a.jsx)(e.li,{children:"Nie odwo\u0142uj si\u0119 do implementacji detali, kt\xf3re nie s\u0105 widoczne dla\nu\u017cytkownika, np. nie odwo\u0142uj si\u0119 do nazw funkcji lub obiekt\xf3w w programie."}),"\n",(0,a.jsx)(e.li,{children:'Unikaj stwierdze\u0144, kt\xf3re mog\u0105 zosta\u0107 odebrane jako nieprofesjonalne, takie jak\n"nieoczekiwany b\u0142\u0105d".'}),"\n",(0,a.jsx)(e.li,{children:"Unikaj wstawiania zmiennych, kt\xf3re maj\u0105 by\u0107 wype\u0142niaczami: ci\u0119\u017cko je potem\nzlokalizowa\u0107 i zamieni\u0107 na w\u0142a\u015bciw\u0105 tre\u015b\u0107."}),"\n"]}),"\n",(0,a.jsxs)(e.p,{children:["Zach\u0119camy do zapoznania si\u0119 z\n",(0,a.jsx)(e.a,{href:"http://www.ihearttechnicalwriting.com/write-error-messages/",children:"oryginalnym artyku\u0142em"}),".\nOpr\xf3cz powy\u017cszych zasad, znajdziecie tam jeszcze troch\u0119 przyk\u0142ad\xf3w komunikat\xf3w\nstosowanych przez takie firmy jak IBM, Oracle czy Google."]})]})}function d(i={}){const{wrapper:e}={...(0,o.a)(),...i.components};return e?(0,a.jsx)(e,{...i,children:(0,a.jsx)(c,{...i})}):c(i)}},11151:(i,e,n)=>{n.d(e,{Z:()=>s,a:()=>t});var a=n(67294);const o={},r=a.createContext(o);function t(i){const e=a.useContext(r);return a.useMemo((function(){return"function"==typeof i?i(e):{...e,...i}}),[e,i])}function s(i){let e;return e=i.disableParentContext?"function"==typeof i.components?i.components(o):i.components||o:t(i.components),a.createElement(r.Provider,{value:e},i.children)}}}]);