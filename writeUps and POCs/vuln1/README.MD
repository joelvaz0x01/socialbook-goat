# 20241011 - Information Leakage

## 1. **Overview**

Information leakage occurs when a system exposes sensitive information to unauthorized users. In this case, the leakage happens on both the login and registration pages. When a username or password is entered into their respective fields, the application reveals whether a user with the provided username exists. On the registration page, passwords must be unique. However, during the uniqueness check, the system discloses that a specific user is already using a particular password. This flaw allows any user to access other accounts, making targeted attacks possible.


## 2. **Impact**
   The vulnerability lies in how the application handles user input during sign-up and login. Here's the breakdown:
   
   - **Registration Page:**
      * If someone tries to register with an email or username already in use, the app says so.

      * Worse, if they pick a password that's already in use, the system lets them know which user is using that password. This makes it too easy for someone to figure out who’s using what and access their account.
   
   - **Login Page:**
      * When logging in with the wrong password, the app reveals if the username exists by saying the password is incorrect. This confirms the username is valid, which attackers can exploit.
   
   Essentially, the app is unintentionally giving attackers clues about usernames, passwords, and emails—pieces of information that should stay hidden.

## 3. **Proof of Concept**
   This vulnerability makes it easy for someone with bad intentions to piece together sensitive information and exploit it. Here's how an attacker might take advantage of it:

   Example:
   1. **Signup Enumeration:**
      - Try signing up with an email like `teste@teste.com`.
      - If the system says `Email already registered`, now we know that the email is valid.
   
   2. **Password Reuse Enumeration:**
      - During sign-up, enter a password.
      - If the system says `User X already has that password`, we now know that user X uses that password.

   3. **Login Enumeration:**
      - Try logging in with a username like `johndoe` and any random password.
      - If the system says `Password is incorrect`, we can confirm that johndoe is a valid username. Now we can focus on cracking the password.

## 4. References

   * https://owasp.org/www-project-top-10-infrastructure-security-risks/docs/2023/INT08_2023-Information_Leakage

   * https://cwe.mitre.org/data/definitions/200.html
