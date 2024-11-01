# 20241101 - SQL Injection

## 1. **Overview**
   A SQL Injection consists in "injecting" SQL code into the application via input on the user's side. In this case a user is able to inject code via the chatroom's address bar and through that manipulate the server's database.

## 2. **Description**
   The vulnerability is present in the application's chatroom page in the following way: 
   The user goes to the chatroom page and changes the url so that after the user field there is a sql command, the following injection, for example, will drop the back_messageroom table:
   * http://social-book-goat-6.deti/chatroom/';DROP TABLE IF EXISTS back_messageroom;'

   This works because the input for that url is not sanitized and the command is ran through raw sql in an unsafe way that allows the user to use as many sql commands as he intends to instead of using the django commands that avoid injections.

## 3. **Impact**
   An attacker could exploit this vulnerability in order to delete the entire database or update it to his desires, making the application completely unusable or altering data in order trick someone.

## 4. References

   * https://owasp.org/www-community/attacks/SQL_Injection

   * https://www.stackhawk.com/blog/sql-injection-prevention-django/
