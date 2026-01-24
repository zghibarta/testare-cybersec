
import { SecureQuestion, Category } from '../types';

export const allQuestions: SecureQuestion[] = [
  // --- SIEM (10) ---
  {
    id: 'siem-1',
    category: Category.SIEM,
    text: 'Care este scopul principal al normalizării datelor într-o soluție SIEM?',
    options: [
      'Transformarea log-urilor din diverse formate într-o structură de date uniformă pentru corelare.',
      'Criptarea tuturor log-urilor colectate pentru a asigura integritatea datelor.',
      'Reducerea numărului de evenimente prin eliminarea duplicatelor înainte de procesare.',
      'Indexarea datelor brute pentru a accelera căutările în bazele de date istorice.'
    ],
    correctAnswerIndex: 0
  },
  {
    id: 'siem-2',
    category: Category.SIEM,
    text: 'În contextul SIEM, ce reprezintă "EPS" și de ce este critic?',
    options: [
      'Encryption Per Second; măsoară viteza de securizare a datelor.',
      'Events Per Second; determină capacitatea de procesare și costurile de licențiere.',
      'Entry Point Security; identifică numărul de puncte vulnerabile în rețea.',
      'Error Probability Score; indică probabilitatea ca o alertă să fie fals pozitivă.'
    ],
    correctAnswerIndex: 1
  },
  {
    id: 'siem-3',
    category: Category.SIEM,
    text: 'O regulă de corelare SIEM detectează 10 eșecuri de autentificare urmate de un succes de la aceeași adresă IP. Ce indică acest lucru?',
    options: [
      'Un atac de tip Denial of Service (DoS) reușit.',
      'O tentativă probabilă de Brute Force care a compromis contul.',
      'O eroare de configurare a protocolului LDAP în Active Directory.',
      'Un comportament normal de rotație a parolelor utilizatorului.'
    ],
    correctAnswerIndex: 1
  },
  {
    id: 'siem-4',
    category: Category.SIEM,
    text: 'Care este diferența fundamentală între agregarea și corelarea evenimentelor în SIEM?',
    options: [
      'Agregarea combină evenimente identice, în timp ce corelarea identifică relații între evenimente diferite.',
      'Agregarea se ocupă de securitate, în timp ce corelarea se ocupă de performanța rețelei.',
      'Agregarea este un proces manual, iar corelarea este un proces automatizat bazat pe AI.',
      'Nu există nicio diferență; ambii termeni se referă la gruparea log-urilor după severitate.'
    ],
    correctAnswerIndex: 0
  },
  {
    id: 'siem-5',
    category: Category.SIEM,
    text: 'Ce funcționalitate SIEM este responsabilă pentru stocarea pe termen lung a log-urilor în conformitate cu cerințele GDPR?',
    options: [
      'Real-time Monitoring',
      'Log Retention Policy',
      'Data Loss Prevention',
      'Automated Incident Response'
    ],
    correctAnswerIndex: 1
  },
  {
    id: 'siem-6',
    category: Category.SIEM,
    text: 'Ce reprezintă UEBA (User and Entity Behavior Analytics) într-o arhitectură SIEM modernă?',
    options: [
      'Un sistem de autentificare biometrică pentru utilizatori.',
      'O metodă de a bloca automat utilizatorii care accesează rețele sociale.',
      'O tehnologie care utilizează ML pentru a detecta anomalii de comportament față de o bază de referință.',
      'O bază de date cu vulnerabilități hardware pentru serverele organizației.'
    ],
    correctAnswerIndex: 2
  },
  {
    id: 'siem-7',
    category: Category.SIEM,
    text: 'Cum poate un SIEM să reducă fenomenul de "Alert Fatigue"?',
    options: [
      'Prin trimiterea tuturor alertelor către echipa IT General.',
      'Prin utilizarea regulilor de corelare avansate pentru a grupa alerte similare întrun singur incident.',
      'Prin dezactivarea log-urilor cu severitate mică (Low) la nivel de sistem.',
      'Prin creșterea timpului de răspuns configurat în SLA.'
    ],
    correctAnswerIndex: 1
  },
  {
    id: 'siem-8',
    category: Category.SIEM,
    text: 'Care este principalul dezavantaj al colectării log-urilor prin protocolul Syslog (UDP)?',
    options: [
      'Utilizează prea multă lățime de bandă în rețea.',
      'Nu garantează livrarea log-urilor, acestea putând fi pierdute fără notificare.',
      'Este incompatibil cu sistemele de operare Windows.',
      'Necesită instalarea unui agent pe fiecare echipament final.'
    ],
    correctAnswerIndex: 1
  },
  {
    id: 'siem-9',
    category: Category.SIEM,
    text: 'Ce componentă SIEM se ocupă cu colectarea activă sau pasivă a log-urilor de la surse?',
    options: [
      'Correlation Engine',
      'Collectors/Forwarders',
      'Data Visualization Layer',
      'Compliance Reporter'
    ],
    correctAnswerIndex: 1
  },
  {
    id: 'siem-10',
    category: Category.SIEM,
    text: 'De ce este esențială sincronizarea timpului (NTP) într-o infrastructură monitorizată prin SIEM?',
    options: [
      'Pentru a reduce consumul de energie al serverelor.',
      'Pentru a asigura o ordine cronologică precisă a evenimentelor în timpul investigațiilor.',
      'Pentru a permite autentificarea prin certificate digitale expirate.',
      'Pentru a evita conflictele de adrese IP în rețeaua locală.'
    ],
    correctAnswerIndex: 1
  },

  // --- XDR (10) ---
  {
    id: 'xdr-1',
    category: Category.XDR,
    text: 'Care este diferența principală între EDR și XDR?',
    options: [
      'EDR se concentrează doar pe endpoint-uri, în timp ce XDR colectează telemetrie din mai multe straturi (rețea, cloud, email).',
      'EDR este o soluție open-source, în timp ce XDR este întotdeauna proprietară.',
      'XDR necesită instalarea de senzori hardware dedicați pe fiecare switch din rețea.',
      'Nu există nicio diferență; XDR este doar un termen de marketing pentru EDR.'
    ],
    correctAnswerIndex: 0
  },
  {
    id: 'xdr-2',
    category: Category.XDR,
    text: 'Ce beneficiu major oferă integrarea componentelor de Email Security într-o platformă XDR?',
    options: [
      'Permite arhivarea tuturor mesajelor pentru conformitate legală.',
      'Permite corelarea unei campanii de phishing cu activitățile suspecte de pe endpoint-ul utilizatorului.',
      'Accelerează livrarea mesajelor către serverul de mail intern.',
      'Reduce numărul de mesaje spam primite de angajați.'
    ],
    correctAnswerIndex: 1
  },
  {
    id: 'xdr-3',
    category: Category.XDR,
    text: 'Cum ajută XDR în procesul de "Threat Hunting"?',
    options: [
      'Prin scanarea automată a codului sursă al aplicațiilor web.',
      'Prin oferirea unei vizibilități unificate și a interogării datelor din multiple surse prin o singură consolă.',
      'Prin blocarea tuturor conexiunilor RDP din exterior în mod implicit.',
      'Prin generarea automată de parole complexe pentru administratori.'
    ],
    correctAnswerIndex: 1
  },
  {
    id: 'xdr-4',
    category: Category.XDR,
    text: 'Ce rol joacă SOAR (Security Orchestration, Automation and Response) într-un ecosistem XDR?',
    options: [
      'Monitorizează doar traficul din centrele de date.',
      'Automatizează fluxurile de lucru pentru remedierea incidentelor detectate de XDR.',
      'Înlocuiește complet necesitatea analiștilor umani în SOC.',
      'Este o bază de date pentru stocarea atacurilor de tip Zero-Day.'
    ],
    correctAnswerIndex: 1
  },
  {
    id: 'xdr-5',
    category: Category.XDR,
    text: 'În contextul XDR, ce înseamnă telemetria de tip "Cloud Native"?',
    options: [
      'Monitorizarea traficului de internet al angajaților remote.',
      'Analiza log-urilor de activitate din AWS/Azure/GCP și integrarea lor cu evenimentele on-premise.',
      'Utilizarea serviciilor de backup în cloud pentru serverele critice.',
      'Instalarea unui antivirus direct pe mașinile virtuale din cloud.'
    ],
    correctAnswerIndex: 1
  },
  {
    id: 'xdr-6',
    category: Category.XDR,
    text: 'Care este principalul avantaj al unui "Native XDR" față de un "Open XDR"?',
    options: [
      'Capacitatea de a integra orice furnizor de securitate terț prin API-uri deschise.',
      'O integrare mai profundă și optimizată între produsele de securitate ale aceluiași furnizor.',
      'Costuri de licențiere mult mai mici pentru companiile guvernamentale.',
      'Nu necesită conexiune la internet pentru funcționarea bazei de date.'
    ],
    correctAnswerIndex: 1
  },
  {
    id: 'xdr-7',
    category: Category.XDR,
    text: 'Cum contribuie XDR la reducerea MTTR (Mean Time To Respond)?',
    options: [
      'Prin angajarea mai multor operatori în echipa de suport.',
      'Prin prioritizarea inteligentă a alertelor și oferirea de acțiuni de răspuns direct din consolă.',
      'Prin extinderea perioadei de testare a aplicațiilor software.',
      'Prin ignorarea alertelor cu severitate mică în timpul nopții.'
    ],
    correctAnswerIndex: 1
  },
  {
    id: 'xdr-8',
    category: Category.XDR,
    text: 'În ce stadiu al atacului (Cyber Kill Chain) este cel mai eficient XDR pentru detecția mișcării laterale?',
    options: [
      'Reconnaissance (Recunoaștere)',
      'Weaponization (Armament)',
      'Internal Reconnaissance and Propagation',
      'Delivery (Livrare)'
    ],
    correctAnswerIndex: 2
  },
  {
    id: 'xdr-9',
    category: Category.XDR,
    text: 'Ce metodă de detecție XDR este cea mai eficientă împotriva atacurilor de tip "Fileless Malware"?',
    options: [
      'Scanarea bazată pe semnături de fișiere.',
      'Analiza comportamentală a proceselor și monitorizarea memoriei RAM.',
      'Verificarea extensiilor de fișiere din folderele temporare.',
      'Blocarea automată a tuturor scripturilor PowerShell.'
    ],
    correctAnswerIndex: 1
  },
  {
    id: 'xdr-10',
    category: Category.XDR,
    text: 'Ce reprezintă "Identity-Centric XDR"?',
    options: [
      'Un sistem care verifică identitatea fizică a angajaților la intrarea în clădire.',
      'Integrarea datelor de autentificare (IAM) în analiza amenințărilor pentru a detecta compromiterea conturilor.',
      'O bază de date cu pozele tuturor utilizatorilor din rețea.',
      'Un protocol de securitate pentru routerele Cisco.'
    ],
    correctAnswerIndex: 1
  },

  // --- VAPT (10) ---
  {
    id: 'vapt-1',
    category: Category.VAPT,
    text: 'Care este diferența majoră dintre Vulnerability Assessment (VA) și Penetration Testing (PT)?',
    options: [
      'VA identifică vulnerabilitățile fără a le exploata, în timp ce PT încearcă activ exploatarea acestora pentru a evalua impactul.',
      'VA este un proces manual, iar PT este întotdeauna un proces automat.',
      'VA se realizează doar pe serverer, iar PT se realizează doar pe aplicații web.',
      'Nu există nicio diferență; sunt termeni interschimbabili în securitate.'
    ],
    correctAnswerIndex: 0
  },
  {
    id: 'vapt-2',
    category: Category.VAPT,
    text: 'În contextul testării de penetrare, ce înseamnă "Escaladarea Privilegiilor"?',
    options: [
      'Cumpărarea unei licențe de administrator pentru un software de securitate.',
      'Procesul prin care un atacator obține drepturi de acces superioare pornind de la un cont limitat.',
      'Schimbarea parolei unui utilizator prin inginerie socială.',
      'Actualizarea sistemului de operare la cea mai nouă versiune stabilă.'
    ],
    correctAnswerIndex: 1
  },
  {
    id: 'vapt-3',
    category: Category.VAPT,
    text: 'Ce reprezintă scorul CVSS (Common Vulnerability Scoring System)?',
    options: [
      'Un număr care indică cât de veche este o vulnerabilitate.',
      'Un standard industrial pentru evaluarea severității vulnerabilităților de securitate.',
      'O listă cu toate update-urile de securitate disponibile de la Microsoft.',
      'Un indicator al performanței rețelei în timpul unui test de stres.'
    ],
    correctAnswerIndex: 1
  },
  {
    id: 'vapt-4',
    category: Category.VAPT,
    text: 'Care este scopul unei testări "Grey Box"?',
    options: [
      'Testare fără nicio informație prealabilă despre sistemul țintă.',
      'Testare cu acces total la codul sursă și documentația arhitecturii.',
      'Testare cu informații limitate (ex: un set de credențiale de utilizator simplu) pentru a simula un insider sau un atacator parțial informat.',
      'Testare realizată exclusiv prin scanări automate comerciale.'
    ],
    correctAnswerIndex: 2
  },
  {
    id: 'vapt-5',
    category: Category.VAPT,
    text: 'Care vulnerabilitate permite unui atacator să injecteze scripturi client-side în paginile web vizualizate de alți utilizatori?',
    options: [
      'SQL Injection',
      'Cross-Site Scripting (XSS)',
      'Broken Access Control',
      'Security Misconfiguration'
    ],
    correctAnswerIndex: 1
  },
  {
    id: 'vapt-6',
    category: Category.VAPT,
    text: 'Ce este un atac de tip "Blind SQL Injection"?',
    options: [
      'Un atac unde baza de date nu returnează date direct, ci se bazează pe răspunsurile logice (True/False) ale aplicației.',
      'O tehnică de a șterge întreaga bază de date fără a avea acces la rețea.',
      'Un atac care vizează doar utilizatorii care nu folosesc HTTPS.',
      'Un proces prin care se ghicește manual parola de administrator a bazei de date.'
    ],
    correctAnswerIndex: 0
  },
  {
    id: 'vapt-7',
    category: Category.VAPT,
    text: 'Care este prima etapă într-un ciclu standard de Penetration Testing?',
    options: [
      'Exploitation (Exploatarea)',
      'Reporting (Raportarea)',
      'Reconnaissance / Information Gathering',
      'Post-Exploitation'
    ],
    correctAnswerIndex: 2
  },
  {
    id: 'vapt-8',
    category: Category.VAPT,
    text: 'Ce înseamnă "False Positive" în rezultatul unei scanări de vulnerabilități?',
    options: [
      'O vulnerabilitate critică care a fost ignorată de scaner.',
      'Un raport care indică prezența unei vulnerabilități care, în realitate, nu există pe sistemul respectiv.',
      'O vulnerabilitate exploatată cu succes de echipa de Red Team.',
      'O metodă de a păcăli antivirusul folosind tehnici de obfuscarea codului.'
    ],
    correctAnswerIndex: 1
  },
  {
    id: 'vapt-9',
    category: Category.VAPT,
    text: 'Ce unealtă este cel mai des folosită pentru scanarea porturilor și identificarea serviciilor active?',
    options: [
      'Burp Suite',
      'Nmap',
      'Metasploit',
      'Wireshark'
    ],
    correctAnswerIndex: 1
  },
  {
    id: 'vapt-10',
    category: Category.VAPT,
    text: 'De ce este recomandată scanarea autentificată (Credentialed Scan) în procesul de VA?',
    options: [
      'Pentru că durează mai puțin timp decât o scanare neautentificată.',
      'Pentru a identifica vulnerabilități din interiorul sistemului (ex: patch-uri lipsă, configurări eronate ale OS).',
      'Pentru a evita detectarea de către sistemele IDS/IPS din rețea.',
      'Nu este recomandată, deoarece modifică integritatea datelor scanate.'
    ],
    correctAnswerIndex: 1
  },

  // --- DFIR (10) ---
  {
    id: 'dfir-1',
    category: Category.DFIR,
    text: 'Ce reprezintă "Chain of Custody" în analiza digitală legală?',
    options: [
      'Un protocol de criptare a datelor pe hard-disk.',
      'Documentația riguroasă a procesului de colectare, transport și analiză a probelor pentru a asigura admisibilitatea în instanță.',
      'O listă cu toți angajații care au acces la sala serverelor.',
      'O metodă de recuperare a parolelor pierdute din memoria RAM.'
    ],
    correctAnswerIndex: 1
  },
  {
    id: 'dfir-2',
    category: Category.DFIR,
    text: 'Care este regula de aur în colectarea probelor digitale volatile?',
    options: [
      'Datele trebuie colectate în ordinea volatilității lor (ex: RAM înainte de Hard Drive).',
      'Sistemul trebuie oprit imediat prin scoaterea de sub tensiune.',
      'Toate hard-disk-urile trebuie scanate cu un antivirus înainte de analiză.',
      'Datele trebuie copiate prin copy-paste direct pe un stick USB.'
    ],
    correctAnswerIndex: 0
  },
  {
    id: 'dfir-3',
    category: Category.DFIR,
    text: 'Ce informații critice pot fi extrase dintr-un dump de memorie RAM?',
    options: [
      'Doar pozele salvate recent pe desktop.',
      'Procese active, conexiuni de rețea deschise și posibile chei de criptare sau parole în clar.',
      'Lista tuturor componentelor hardware instalate în computer.',
      'Numărul de ore de funcționare a monitorului.'
    ],
    correctAnswerIndex: 1
  },
  {
    id: 'dfir-4',
    category: Category.DFIR,
    text: 'Ce reprezintă "Timelining" în analiza unui incident?',
    options: [
      'Stabilirea unei limite de timp pentru finalizarea raportului.',
      'Reconstrucția ordinii cronologice a evenimentelor de pe mai multe surse pentru a înțelege evoluția atacului.',
      'Programarea scanărilor de backup pentru a rula la miezul nopții.',
      'Măsurarea timpului necesar unui utilizator pentru a raporta un email suspect.'
    ],
    correctAnswerIndex: 1
  },
  {
    id: 'dfir-5',
    category: Category.DFIR,
    text: 'Ce este un "Write Blocker" și de ce este utilizat?',
    options: [
      'Un software care previne scrierea de cod malițios în aplicații.',
      'Un dispozitiv hardware sau software care previne modificarea datelor pe un suport de stocare în timpul copierii probelor.',
      'Un sistem care blochează trimiterea de email-uri către domenii externe.',
      'O metodă de a dezactiva tastatura în timpul unei investigații.'
    ],
    correctAnswerIndex: 1
  },
  {
    id: 'dfir-6',
    category: Category.DFIR,
    text: 'Care este scopul etapei de "Eradicare" în procesul de răspuns la incidente?',
    options: [
      'Restaurarea sistemelor din backup-ul de ieri.',
      'Identificarea și eliminarea completă a componentelor malițioase (malware, conturi backdoor) din infrastructură.',
      'Anunțarea autorităților despre incident.',
      'Deconectarea tuturor utilizatorilor din rețeaua WiFi.'
    ],
    correctAnswerIndex: 1
  },
  {
    id: 'dfir-7',
    category: Category.DFIR,
    text: 'Ce artefact Windows conține informații despre fișierele executate recent de un utilizator?',
    options: [
      'Registry Keys (Run/RunOnce)',
      'Prefetch Files / ShimCache',
      'Pagefile.sys',
      'Windows Update Logs'
    ],
    correctAnswerIndex: 1
  },
  {
    id: 'dfir-8',
    category: Category.DFIR,
    text: 'Care este diferența dintre un Incident și un Event?',
    options: [
      'Nu există nicio diferență.',
      'Un Event este orice activitate observabilă, în timp ce un Incident este un eveniment care încalcă politicile de securitate.',
      'Un Incident este întotdeauna raportat la poliție, un Event nu.',
      'Un Event este cauzad de oameni, un Incident este cauzad de software.'
    ],
    correctAnswerIndex: 1
  },
  {
    id: 'dfir-9',
    category: Category.DFIR,
    text: 'Ce este "Root Cause Analysis" (RCA)?',
    options: [
      'O metodă de a obține acces root pe un server Linux.',
      'Procesul de identificare a cauzei fundamentale care a permis producerea incidentului pentru a preveni repetarea acestuia.',
      'O analiză a costurilor financiare generate de downtime.',
      'Scanarea rădăcinii (C:\\) a sistemului de fișiere pentru viruși.'
    ],
    correctAnswerIndex: 1
  },
  {
    id: 'dfir-10',
    category: Category.DFIR,
    text: 'În ce etapă a răspunsului la incidente se realizează "Lessons Learned"?',
    options: [
      'Preparation',
      'Containment',
      'Post-Incident Activity',
      'Detection and Analysis'
    ],
    correctAnswerIndex: 2
  },

  // --- OWASP Top 10: 2025 (Refăcut integral conform documentației furnizate) ---
  {
    id: 'owasp-2025-a1',
    category: Category.OWASP,
    text: 'Conform OWASP Top 10: 2025, categoria A01: Broken Access Control include acum și o vulnerabilitate care anterior era separată. Despre ce este vorba?',
    options: [
      'Cross-Site Scripting (XSS)',
      'Server-Side Request Forgery (SSRF)',
      'Security Misconfiguration',
      'Insecure Deserialization'
    ],
    correctAnswerIndex: 1
  },
  {
    id: 'owasp-2025-a2',
    category: Category.OWASP,
    text: 'Care este motivul principal pentru care A02:2025 - Security Misconfiguration a urcat pe locul 2 în clasament?',
    options: [
      'Aplicațiile folosesc acum mai puține configurații decât în trecut.',
      'Creșterea complexității arhitecturilor moderne unde comportamentul aplicației depinde masiv de fișierele de configurare.',
      'Este singura categorie care poate fi detectată complet automat.',
      'Lipsa bazei de date cu CVE-uri pentru cloud.'
    ],
    correctAnswerIndex: 1
  },
  {
    id: 'owasp-2025-a3',
    category: Category.OWASP,
    text: 'Categoria A03:2025 - Software Supply Chain Failures extinde vechea categorie A06:2021. Ce element critic de control este recomandat pentru monitorizarea dependențelor?',
    options: [
      'Utilizarea exclusivă a codului scris in-house.',
      'Generarea și gestionarea centralizată a SBOM (Software Bill of Materials).',
      'Dezactivarea tuturor update-urilor automate.',
      'Limitarea accesului la internet pentru serverele de build.'
    ],
    correctAnswerIndex: 1
  },
  {
    id: 'owasp-2025-a4',
    category: Category.OWASP,
    text: 'În A04:2025 - Cryptographic Failures, care este recomandarea pentru pregătirea sistemelor cu risc ridicat până în 2030?',
    options: [
      'Eliminarea completă a oricărei forme de criptare.',
      'Implementarea algoritmilor de Post-Quantum Cryptography (PQC).',
      'Trecerea tuturor bazelor de date pe protocolul FTP securizat.',
      'Utilizarea exclusivă a algoritmului MD5 pentru viteză.'
    ],
    correctAnswerIndex: 1
  },
  {
    id: 'owasp-2025-a5',
    category: Category.OWASP,
    text: 'Ce vulnerabilități majore sunt consolidate sub categoria A05:2025 - Injection, conform noii metodologii?',
    options: [
      'Doar SQL Injection.',
      'O gamă largă care include de la Cross-site Scripting (XSS) până la SQL Injection.',
      'Erorile de logare și monitorizare.',
      'Problemele de design arhitectural.'
    ],
    correctAnswerIndex: 1
  },
  {
    id: 'owasp-2025-a6',
    category: Category.OWASP,
    text: 'A06:2025 - Insecure Design subliniază că un design nesigur nu poate fi reparat printr-o implementare perfectă. Ce activitate este critică pentru prevenție în faza de planificare?',
    options: [
      'Doar scanarea de vulnerabilități la finalul proiectului.',
      'Threat Modeling integrat în sesiunile de design și user stories.',
      'Verificarea manuală a log-urilor în fiecare zi.',
      'Cumpărarea celui mai scump Firewall.'
    ],
    correctAnswerIndex: 1
  },
  {
    id: 'owasp-2025-a7',
    category: Category.OWASP,
    text: 'Pentru categoria A07:2025 - Authentication Failures, ce politică de rotație a parolelor este acum recomandată conform standardelor moderne (NIST 800-63b)?',
    options: [
      'Forțarea utilizatorilor să schimbe parola la fiecare 30 de zile.',
      'Să nu se forțeze rotația parolelor decât dacă există suspiciuni de compromitere.',
      'Utilizarea parolelor de maxim 8 caractere pentru a fi ușor de reținut.',
      'Eliminarea completă a autentificării multi-factor (MFA).'
    ],
    correctAnswerIndex: 1
  },
  {
    id: 'owasp-2025-a8',
    category: Category.OWASP,
    text: 'Categoria A08:2025 - Software or Data Integrity Failures vizează în mod special:',
    options: [
      'Viteza de procesare a datelor în baze de date NoSQL.',
      'Eșecul verificării integrității codului, update-urilor și datelor serializate din surse externe.',
      'Lipsa comentariilor în codul sursă.',
      'Utilizarea unui mediu de dezvoltare fără licență.'
    ],
    correctAnswerIndex: 1
  },
  {
    id: 'owasp-2025-a9',
    category: Category.OWASP,
    text: 'Schimbarea numelui categoriei A09:2025 în "Security Logging & Alerting Failures" subliniază importanța:',
    options: [
      'Stocării log-urilor pe discuri SSD de mare viteză.',
      'Funcționalității de alertare necesară pentru a induce acțiuni rapide asupra evenimentelor relevante.',
      'Eliminării oricărui tip de logare pentru a proteja confidențialitatea.',
      'Criptării log-urilor doar cu chei simetrice.'
    ],
    correctAnswerIndex: 1
  },
  {
    id: 'owasp-2025-a10',
    category: Category.OWASP,
    text: 'Noua categorie A10:2025 - Mishandling of Exceptional Conditions, se concentrează pe:',
    options: [
      'Viteza de execuție a aplicațiilor sub stres.',
      'Erori de logică, fail-open și gestionarea necorespunzătoare a situațiilor anormale care lasă sistemul într-o stare impredictibilă.',
      'Instalarea patch-urilor de sistem doar în weekend.',
      'Utilizarea limbajelor de programare vechi precum Fortran.'
    ],
    correctAnswerIndex: 1
  }
];

export const MasterAnswerKey: Record<string, number> = allQuestions.reduce((acc, q) => {
  acc[q.id] = q.correctAnswerIndex;
  return acc;
}, {} as Record<string, number>);
