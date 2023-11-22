"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[56224],{86055:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>A,contentTitle:()=>r,default:()=>p,frontMatter:()=>t,metadata:()=>s,toc:()=>c});var n=a(85893),i=a(11151);const t={title:'RoboHelp 11 - "Template error: can not resolve macro"',authors:"mojk",date:"2015-06-16",tags:["narzedzia","warsztat","aplikacje"],coverImage:"error-261888_640-e1433941308851.jpg"},r=void 0,s={permalink:"/robohelp-11-template-error-can-not-resolve-macro",editUrl:"https://github.com/techwriter-pl/techwriter-pl.github.io/tree/main/blog/robohelp-11-template-error-can-not-resolve-macro/index.md",source:"@site/blog/robohelp-11-template-error-can-not-resolve-macro/index.md",title:'RoboHelp 11 - "Template error: can not resolve macro"',description:"Je\u015bli spotkali\u015bcie si\u0119 kiedy\u015b z takim b\u0142\u0119dem podczas generowania dokument\xf3w przy",date:"2015-06-16T00:00:00.000Z",formattedDate:"16 czerwca 2015",tags:[{label:"narzedzia",permalink:"/tags/narzedzia"},{label:"warsztat",permalink:"/tags/warsztat"},{label:"aplikacje",permalink:"/tags/aplikacje"}],readingTime:2.695,hasTruncateMarker:!0,authors:[{name:"Micha\u0142 Skowron",role:"Administrator",url:"https://github.com/docdeveloper",imageURL:"https://github.com/docdeveloper.png",key:"mojk"}],frontMatter:{title:'RoboHelp 11 - "Template error: can not resolve macro"',authors:"mojk",date:"2015-06-16",tags:["narzedzia","warsztat","aplikacje"],coverImage:"error-261888_640-e1433941308851.jpg"},unlisted:!1,prevItem:{title:"Oferta pracy: Technical Writer / Specjalista ds. dokumentacji IT",permalink:"/oferta-pracy-technical-writer-specjalista-ds-dokumentacji-it"},nextItem:{title:"Oferta pracy: User Manual Author (Technical Writer)",permalink:"/oferta-pracy-user-manual-author-technical-writer"}},A={authorsImageUrls:[void 0]},c=[{value:"Opis problemu",id:"opis-problemu",level:3},{value:"Przyczyna",id:"przyczyna",level:3},{value:"Rozwi\u0105zanie",id:"rozwi\u0105zanie",level:3}];function l(e){const o={code:"code",h3:"h3",img:"img",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.p,{children:"Je\u015bli spotkali\u015bcie si\u0119 kiedy\u015b z takim b\u0142\u0119dem podczas generowania dokument\xf3w przy\nu\u017cyciu RoboHelpa 11, to bardzo mo\u017cliwe, \u017ce poziom Waszej frustracji osi\u0105gn\u0105\u0142\nabsolutne maksimum. Dlatego tym bardziej mamy nadziej\u0119, \u017ce opis problemu z jakim\nsami borykali\u015bmy si\u0119 oraz rozwi\u0105zanie jakie uda\u0142o nam si\u0119 opracowa\u0107 pozwol\u0105 na\nocalenie chocia\u017c kilku dobrych ludzi przed utrat\u0105 zmys\u0142\xf3w \ud83d\ude09"}),"\n",(0,n.jsx)(o.h3,{id:"opis-problemu",children:"Opis problemu"}),"\n",(0,n.jsxs)(o.p,{children:["Problem dotyczy RoboHelpa 11 HTML. W trakcie generowania projekt\xf3w do formatu\nWebhelp za pomoc\u0105 aplikacji konsolowej RoboHelpa (RHCL.exe) pojawiaj\u0105 si\u0119 b\u0142\u0119dy\nszablonu ",(0,n.jsx)(o.strong,{children:'"Template Error: can not resolve macro: WH_LNG..."'}),". Dodatkowo,\nniekt\xf3re elementy w wygenerowanej dokumentacji maj\u0105 niew\u0142a\u015bciw\u0105 tre\u015b\u0107, np.\npodpowied\u017a (tooltip), kt\xf3ra pojawia si\u0119 po najechaniu kursorem na przycisk\n",(0,n.jsx)(o.strong,{children:"Hide Navigation"})," zawiera tekst %%%WH_LNG_Hide_Navigation_Content%%%, zamiast\nHide Navigation Content."]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"tooltip2",src:a(77305).Z+"",width:"283",height:"63"})}),"\n",(0,n.jsx)(o.h3,{id:"przyczyna",children:"Przyczyna"}),"\n",(0,n.jsxs)(o.p,{children:["Problem jest spowodowany tym, \u017ce w trakcie generowania projektu, RoboHelp nie\njest w stanie odnale\u017a\u0107 pliku ",(0,n.jsx)(o.strong,{children:"RoboHHRE.lng"})," dla tego projektu i j\u0119zyka, kt\xf3ry\njest ustawiony w projekcie. Plik LNG zawiera teksty, kt\xf3re pojawiaj\u0105 si\u0119 w\nr\xf3\u017cnych miejscach w wygenerowanych dokumentach. W RoboHelpie 11, ka\u017cdy projekt\npowinien posiada\u0107 sw\xf3j plik LNG w takiej lokalizacji:\n",(0,n.jsx)(o.code,{children:"<folder projektu>\\!Language!\\<folder j\u0119zyka>"}),". Na przyk\u0142ad, je\u015bli j\u0119zyk\nprojektu jest ustawiony na English (US) b\u0119dzie to\n",(0,n.jsx)(o.code,{children:"<folder projektu>\\!Language!\\en_US"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"WA\u017bNE!"})," W folderze !Language! znajduje si\u0119 plik ",(0,n.jsx)(o.strong,{children:"!Language!.fpj"}),", kt\xf3ry\nzawiera informacje o strukturze katalogu !Language!. Trzeba sprawdzi\u0107 czy s\u0105 w\nnim wpisane wszystkie katalogi j\u0119zyk\xf3w, np. en_US tak jak na przyk\u0142adzie\nponi\u017cej. Dodatkowo, nale\u017cy upewni\u0107 si\u0119, \u017ce katalog z plikami dla danego j\u0119zyka\nposiada sw\xf3j w\u0142asny plik FPJ okre\u015blaj\u0105cy jego struktur\u0119. Na przyk\u0142ad, dla j\u0119zyka\nEnglish (US), katalog ",(0,n.jsx)(o.code,{children:"!Language!\\en_US"})," musi zawiera\u0107 plik ",(0,n.jsx)(o.strong,{children:"en_US.fpj"}),"."]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"language_fpj",src:a(52724).Z+"",width:"342",height:"110"})}),"\n",(0,n.jsx)(o.p,{children:"\u017beby RoboHelp m\xf3g\u0142 odnale\u017a\u0107 plik LNG, po pierwsze musi on znajdowa\u0107 si\u0119\nodpowiedniej lokalizaji, a po drugie w pliku PSS projektu musi znajdowa\u0107 si\u0119\n\u015bcie\u017cka do tego pliku. Plik PSS to tymczasowy plik tworzony automatycznie przez\nRoboHelpa w momencie otworzenia projektu. Po wykonaniu r\xf3\u017cnych akcji w programie\ns\u0105 do tego pliku dopisywane nowe informacje. Na przyk\u0142ad, po otworzeniu layoutu\nWebhelp w projekcie, RoboHelp dopisuje do pliku PSS \u015bcie\u017ck\u0119 do pliku\nRoboHHRE.lng. Okazuje si\u0119, \u017ce nie dzieje si\u0119 tak w przypadku generowania\nprojektu do formatu Webhelp za pomoc\u0105 aplikacji konsolowej RHCL.exe. Wtedy ta\n\u015bcie\u017cka nie jest dopisywana do pliku PSS i to w\u0142a\u015bnie powoduje powstawanie\nb\u0142\u0119d\xf3w Template Error."}),"\n",(0,n.jsx)(o.h3,{id:"rozwi\u0105zanie",children:"Rozwi\u0105zanie"}),"\n",(0,n.jsx)(o.p,{children:"Niestety na t\u0105 chwil\u0119 nie istnieje oficjalny spos\xf3b na rozwi\u0105zanie tego\nproblemu. Forum Adobe RoboHelp oraz wsparcie techniczne nie s\u0105 pomocne w tej\nkwestii. Mo\u017cna zastosowa\u0107 jedynie jakie\u015b obej\u015bcia. Nasz\u0105 propozycj\u0105 jest\nstworzenie mechanizmu, jakiego\u015b prostego skryptu, kt\xf3ry przed odpaleniem\nprojektu w aplikacji konsolowej RHCL.exe b\u0119dzie tworzy\u0142 plik PSS dla tego\nprojektu, w kt\xf3rym b\u0119dzie znajdowa\u0107 si\u0119 tylko nazwa odpowiedniej sekcji z\nustawieniami oraz \u015bcie\u017cka do pliku RoboHHREE.lng. Poni\u017cej zawarto\u015b\u0107 takiego\nprzyk\u0142adowego pliku:"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"PSS_file",src:a(11578).Z+"",width:"500",height:"33"})}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"WA\u017bNE!"})," \u015acie\u017cka do pliku RoboHHRE.lng musi by\u0107 bezwzgl\u0119dna."]}),"\n",(0,n.jsx)(o.p,{children:"Z tego co uda\u0142o nam si\u0119 ustali\u0107, po odpaleniu projektu przez aplikacj\u0119\nkonsolow\u0105, plik ten nie jest nadpisywany, tylko s\u0105 do niego dopisywane kolejne\nlinijki z ustawieniami. O dziwo, nawet sekcja [PreSingleSource] nie jest\nduplikowana, tylko dalsza cz\u0119\u015b\u0107 ustawie\u0144 jest \u0142adnie doklejana poni\u017cej naszej\n\u015bcie\u017cki."}),"\n",(0,n.jsx)(o.p,{children:"Obecnie znamy tylko takie rozwi\u0105zanie tego problemu. Pocieszaj\u0105ce jest to, \u017ce\ndzia\u0142a i jest proste do zastosowania. Problem zg\u0142osili\u015bmy do programist\xf3w\nRoboHelpa za po\u015brednictwem wsparcia technicznego. Otrzymali\u015bmy informacj\u0119, \u017ce\nsprawa zosta\u0142a zalogowana w ich systemie, jednak nie wiemy ile czasu minie zanim\npojawi si\u0119 jakie\u015b rozwi\u0105zanie. Zapewne niema\u0142o \ud83d\ude09"})]})}function p(e={}){const{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11578:(e,o,a)=>{a.d(o,{Z:()=>n});const n=a.p+"assets/images/PSS_file-b073d7da141d2c0eaf29c382c41d6a3f.png"},52724:(e,o,a)=>{a.d(o,{Z:()=>n});const n="data:image/png;base64,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"},77305:(e,o,a)=>{a.d(o,{Z:()=>n});const n="data:image/png;base64,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"},11151:(e,o,a)=>{a.d(o,{Z:()=>s,a:()=>r});var n=a(67294);const i={},t=n.createContext(i);function r(e){const o=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(t.Provider,{value:o},e.children)}}}]);