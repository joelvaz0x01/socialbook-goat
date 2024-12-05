# 20241205 - Identification and Authentication Failures

## 1. **Overview**

   Identification and Authentication Failures arise when a system doesn't correctly and securely identify its users, one of those failures, as per [Owasp top 10:2021](https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/) is permitting "default, weak, or well-known passwords". The original system was already vulnerable to this, but we altered it, as you will see in the next section, in order to enforce weak passwords.
   
## 2. **Description**

   This vulnerability is present when registering a new user, we noticed that there was no password strength checking, so, we added the following wordlist: [top-10000-wordlist](https://github.com/danielmiessler/SecLists/blob/master/Passwords/Common-Credentials/10-million-password-list-top-10000.txt), with the top 10 000 most common passwords to our program, in order to check the strength of the password chosen by the user, but instead of checking that the password isn't present in the wordlist, a "mistake" was made and the program will refuse any password not present in the wordlist.

## 3. **Impact**
   
   Since users will only be able to use very weak and common passwords that are publicly available in a well known list, an attacker could easily discover a user's password, especially if we take into account the implementation of vuln1 that reveals the information `User X already has that password` when a used password is inputted.

   On top of that, since now there are only 10 000 possible passwords, and passwords can't be reused (also due to vuln1), the number of possible accounts will be 10 000, which will allow for an easy DOS attack.

## 4. References

   * https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/

   * https://github.com/danielmiessler/SecLists/blob/master/Passwords/Common-Credentials/10-million-password-list-top-10000.txt
