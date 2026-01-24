# 🛡️ CyberSec Evaluation Portal (OWASP 2025 Edition)

[![React Version](https://img.shields.io/badge/react-19-blue.svg)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/tailwindcss-3.4-38B2AC.svg)](https://tailwindcss.com/)
[![Standard](https://img.shields.io/badge/OWASP-Top%2010:%202025-orange.svg)](https://owasp.org/Top10/2025/)

O platformă profesională de screening tehnic concepută pentru evaluarea candidaților la funcția de **Specialist Securitatea Sistemelor**. Această soluție oferă un cadru riguros de testare a competențelor, aliniat la cele mai recente standarde globale de securitate.

## 🚀 Caracteristici Principale

- **Aliniere OWASP 2025**: Toate întrebările din categoria Web Security sunt corectate și adaptate conform versiunii **OWASP Top 10: 2025**, incluzând noile categorii precum *Mishandling of Exceptional Conditions* (A10).
- **Evaluare Multi-Domeniu**: Testează competențele în 5 arii critice: **SIEM**, **XDR**, **VAPT**, **DFIR** și **OWASP**.
- **Feedback Educativ Instant**: Explicații și răspunsuri corective la finalul testului pentru a încuraja dezvoltarea continuă.
- **Dashboard Administrativ Securizat**: Interfață de management (accesibilă via `#dashboard`) pentru vizualizarea istoricului candidaților și a scorurilor detaliate.
- **Arhitectură Modernă**: Construit cu React 19, Vite și Tailwind CSS.

## 📊 Categorii OWASP 2025 Implementate

1. **A01:2025** - Broken Access Control (incl. SSRF)
2. **A02:2025** - Security Misconfiguration
3. **A03:2025** - Software Supply Chain Failures
4. **A04:2025** - Cryptographic Failures
5. **A05:2025** - Injection (incl. XSS)
6. **A06:2025** - Insecure Design
7. **A07:2025** - Authentication Failures
8. **A08:2025** - Software or Data Integrity Failures
9. **A09:2025** - Security Logging & Alerting Failures
10. **A10:2025** - Mishandling of Exceptional Conditions

## 🛠️ Instalare și Rulare

```bash
# Clonează depozitul
git clone https://github.com/vostru/cybersec-evaluation-portal.git

# Instalează dependențele
npm install

# Rulează aplicația
npm run dev
```

## 🔒 Securitate Dashboard

Accesul la dashboard se face navigând la `#dashboard`. Parola implicită este `Admin2025`. Pentru producție, configurați variabila `ADMIN_PASSWORD` în setările de deployment (Vercel/GitHub).

## 📄 Licență
MIT License.
