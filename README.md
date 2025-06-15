# SocialBook Goat

Base application, adapted for the purpose of training. Modified from the original at https://github.com/paramsgit/Socialbook.

Credits to the original owner.

> [!WARNING]
> This project contains intentional security vulnerabilities for educational purposes.
>
> This is **not suitable for production use** and should only be used in a controlled environment for learning about web security.


## Implemented Vulnerabilities

- Information Leakage
- Cross-Site Scripting (XSS)
- Server-Side Template Injection (SSTI)
- SQL Injection
- Cryptographic Failures
- Identification and Authentication Failures

> [!NOTE]
> The `/security` endpoint also provides the list of implemented vulnerabilities.


> [!TIP]
> All POCs are located in the [`poc`](./poc/) directory.


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/joelvaz0x01/unsecure-socialbook-goat.git
   ```
2. Navigate to the project directory:
   ```bash
   cd unsecure-socialbook-goat/app
   ```
3. Create a virtual environment and activate it:
   ```bash
   python -m venv .venv
   source .venv/bin/activate
   ```
4. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
5. Apply database migrations:
   ```bash
   python manage.py migrate
   ```
6. Start the development server:
   ```bash
   python manage.py runserver
   ```
7. Access the app at [http://localhost:8080](http://localhost:8080)
