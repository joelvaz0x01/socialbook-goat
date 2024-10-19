# 20241011 - Information Leakage

## 1. **Overview**
   Information leakage occurs when a system unintentionally exposes sensitive information to unauthorized users. In this case, the login and registration pages provide detailed messages that reveal whether a user exists, an email is registered, or a specific password is already in use by another user. This increases the risk of user enumeration and targeted attacks.

## 2. **Description**
   The vulnerability is present in the application's registration and login pages. Specifically, the following issues arise:
   
   - **Registration Page:**
     When a user attempts to sign up with an existing email or username, the system explicitly informs the user that the email or username is already registered. Additionally, the system checks if the chosen password is already in use by another user and notifies the user of this fact.
   
   - **Login Page:**
     If an incorrect password is provided, the system informs the user that the password is wrong but the username exists. This allows an attacker to confirm the existence of the username, facilitating username enumeration attacks.
   
   These behaviors leak sensitive information, which could be exploited by malicious actors to gather information about valid usernames, emails, and even password reuse across accounts.

## 3. **Impact**
   An attacker could exploit this vulnerability by repeatedly submitting different usernames, emails, and passwords to the registration or login forms to confirm which ones are valid.

   Example:
   1. **Signup Enumeration:**
      - Submit a signup request with an email `teste@teste.com`.
      - If the response is `Email already registered`, the attacker confirms the existence of the email.
   
   2. **Password Reuse Enumeration:**
      - During signup, provide a password, and if the response is `User X already has that password`, it confirms that a particular password is reused.

   3. **Login Enumeration:**
      - Try to log in with a username `johndoe` and an invalid password.
      - If the message is `Password is incorrect`, the attacker knows the username is valid, and they can focus on cracking the password.

## References

   * https://owasp.org/www-project-top-10-infrastructure-security-risks/docs/2023/INT08_2023-Information_Leakage

   * https://cwe.mitre.org/data/definitions/200.html
