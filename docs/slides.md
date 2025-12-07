Slajd 1: Tytuł
• Tytuł: Asystent AI dla administracji — precyzja i tempo decyzji administracyjnych w służbie państwa
• Podtytuł: AI Asystent dla Orzecznika: Optymalizacja pracy Departamentu Turystyki MSiT
• Kluczowy cel: Usprawnienie pracy urzędu, zachowując precyzję, wiarygodność i niezawodność, poprzez przyspieszenie i zwiększenie dokładności decyzji administracyjnych.
Slajd 2: Opis Wyzwania i Problematyki
• Kontekst: Departament Turystyki MSiT projektuje decyzje administracyjne, które dotyczą regulacji rynku turystyki, kwalifikacji zawodowych, nadawania kategorii hotelom oraz kontroli podmiotów turystycznych.
• Problem:
    ◦ Sprawy są skomplikowane (złożone) i mają dużą objętość akt, nierzadko ciągnące się przez wiele lat.
    ◦ Ograniczone zasoby: Niewielka liczebność zespołu orzeczników, częsta rotacja kadrowa oraz reżim czasowy.
    ◦ Złożoność, ryzyko i niepewność środowiska wymagają szczególnej ostrożności i staranności w procesie decyzyjnym.
Slajd 3: Rozwiązanie: AI Asystent
• Ogólny opis: Zaawansowane narzędzie wspierające urzędników w zarządzaniu sprawami administracyjnymi, wykorzystujące zgromadzone zbiory danych.
• Wartość Oferowana (Value Proposition):
    ◦ Podniesienie efektywności pracy i zmniejszenie obciążenia urzędników.
    ◦ Znaczące przyspieszenie i usprawnienie procesu orzeczniczego.
    ◦ Zwiększenie jakości usług świadczonych dla obywateli i przedsiębiorców.
Slajd 4: Kluczowe Funkcjonalności I: Analiza i Rozstrzyganie Spraw
• Wsparcie w analizie i rozstrzyganiu spraw:
    ◦ Automatyczne streszczanie dokumentacji procesowej (akt spraw) i wyodrębnianie kluczowych informacji dla szybkiej analizy.
    ◦ Wstępna ocena ryzyka oraz prawdopodobieństwa rozstrzygnięcia na podstawie historycznych danych i przepisów.
    ◦ Proponowanie możliwych decyzji lub rekomendacji wraz z uzasadnieniami, ułatwiających orzecznikowi podjęcie decyzji.
    ◦ Analiza dużych zbiorów danych z wykorzystaniem NLP, machine learning i analiz predykcyjnych w celu identyfikacji wzorców i trendów.
Slajd 5: Kluczowe Funkcjonalności II: Optymalizacja Workflow i Zgodność
• Ułatwienia procesowe i usprawnienia workflow:
    ◦ Automatyzacja rutynowych czynności, jak przygotowanie dokumentów i pisanie projektów decyzji.
    ◦ Monitorowanie statusu spraw oraz wsparcie w organizacji pracy, w tym wyświetlanie linii czasowej (timeline) sprawy.
    ◦ System Powiadomień (Notyfikacje): Przypominanie o ważnych terminach i procedurach (deadline notifications) w celu zapewnienia terminowości i zgodności z wymogami prawnymi.
    ◦ Interaktywna komunikacja w języku prawnym i administracyjnym, umożliwiająca zadawanie pytań i uzyskiwanie klarownych odpowiedzi.
• Zapewnienie Zgodności (Compliance):
    ◦ Kontrola zgodności decyzji z obowiązującym prawem i zasadami naturalnej sprawiedliwości.
Slajd 6: Architektura Rozwiązania i Technologie
• Stos Technologiczny (Technology Stack): Wykorzystanie Next.js 14 (Frontend/Backend) oraz PostgreSQL jako głównej bazy danych.
• Rdzeń AI (AI Engine): Dify Platform do orkiestracji procesów, zarządzania LLM (Large Language Model), RAG (Retrieval-Augmented Generation) i wbudowanych mechanizmów bezpieczeństwa (guardrails).
• Opcje Modeli LLM: Możliwość zastosowania modeli otwartych (np. Mistral-7B, Llama 3) lub komercyjnych (np. OpenAI GPT-4, Claude).
Slajd 7: Integracja i Baza Wiedzy
• Główne Procesy Robocze Dify (AI Workflows):
    1. Analiza Dokumentów (Document Analysis).
    2. Generator Decyzji (Decision Generator).
    3. Wyszukiwanie Podobnych Spraw (Similar Case Search).
    4. Ocena Ryzyka (Risk Assessment).
• Dostępne Zasoby (Knowledge Base): System wykorzystuje zasób ok. 300 archiwalnych decyzji administracyjnych (wraz z danymi wejściowymi), aktualne regulacje prawne i wiedzę ekspercką.
• Kluczowa Integracja: Konieczność pozyskania i podłączenia bazy orzeczeń sądowych CBOSA. Planowana jest także integracja z istniejącymi systemami rejestrów publicznych i Systemem Powiadomień.
Slajd 8: Bezpieczeństwo i Zgodność (Guardrails)
• Architekturalne Bezpieczeństwo i Lokalność:
    ◦ Maksymalna Poufność: Możliwość pełnego wdrożenia lokalnego (on-premise) systemu i wszystkich komponentów.
    ◦ Lokalne Open-Source LLM: Preferowane wykorzystanie lokalnie hostowanych modeli z otwartym kodem źródłowym (np. Mistral-7B, Llama 3), co minimalizuje ryzyko transferu danych.
• Ochrona Danych (RODO/GDPR):
    ◦ Anonimizacja danych osobowych (PII) przed przetworzeniem przez AI.
    ◦ Szyfrowane przechowywanie danych (at rest i in transit).
    ◦ Poufność danych stron postępowania.
• Środki Bezpieczeństwa AI (Guardrails):
    ◦ Wykrywanie halucynacji i weryfikacja faktów na podstawie źródeł.
    ◦ Zapobieganie wstrzykiwaniu promptów (Prompt injection prevention).
    ◦ Kontrola dostępu oparta na rolach (RBAC) i pełne protokołowanie działań (Audit Logs) w celu zapewnienia transparentności.
Slajd 9: Wdrożenie i Wydajność
• Uniwersalność: Rozwiązanie ma być przenaszalne do dowolnego urzędu administracji rządowej lub samorządowej.
• Docelowe Wskaźniki Wydajności (Performance Targets):
    ◦ Analiza dokumentu: < 30 sekund (w zależności od rozmiaru).
    ◦ Generowanie projektu decyzji: < 15 sekund.
    ◦ Wyszukiwanie podobnych spraw: < 3 sekund.
• Metodologia Walidacji: Weryfikacja obejmuje testy jakościowe i ilościowe generowanych odpowiedzi z udziałem ekspertów oraz symulacje rzeczywistych scenariuszy. Oceniana jest zgodność z wymaganiami RODO i przepisami administracyjnymi.
