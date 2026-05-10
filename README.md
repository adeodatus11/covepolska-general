# COVE Polska general

Statyczna strona projektu COVE Polska / WIN4SMEs.

## Struktura

- `/` – główna strona projektu COVE Polska.
- `/nasze-dzialania/` – hub prowadzący do czterech podstron:
  - `https://ai.covepolska.pl`
  - `https://innowacje.covepolska.pl`
  - `https://mentor.covepolska.pl`
  - `https://taniroda.covepolska.pl`

Główna strona korzysta z `cove-polska.html` i `public/styles.css`. Hub działa jako osobna podstrona `src/pages/nasze-dzialania.astro` z osobnym arkuszem `public/hub.css`.

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Wynik statyczny powstaje w katalogu `dist/`.
