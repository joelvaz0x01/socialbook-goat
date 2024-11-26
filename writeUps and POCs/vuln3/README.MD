# 20241126 - Server Side Template Injection

## 1. **Overview**
Server-side template injection is when an attacker is able to use native template syntax to inject a malicious payload into a template, which is then executed server-side.


## 2. **Impact**
Allows attackers to inject arbitrary template directives in order to manipulate the template engine, and enabling them to take complete control of the server.


## 3. **Proof of Concept**
The vulnerable argument is the **username** entered on registration, where the payload must be inside the `{{ }}` tags. When the `{{ }}` tags are detected, the server will execute the payload inside with `eval()` python function.

To see this vulnerability in action, the attacker can register `{{7*7}}` as the **username** and then to execute the payload, the attacker needs to go to the [/chat](http://social-book-goat-6.deti/chat) page. When searching the user, the server will render the **username** as `49`.

In extreme scenarios, the attacker can use the following payload to get the server code:
```
{{__import__('os').system('cat back/views.py > static/views.txt')}}
```

When [\chat](http://social-book-goat-6.deti/chat) page is accessed, the server will execute the payload and save the output command in `/static/views.txt` file. The attacker can then access the file by going to [/static/views.txt](http://social-book-goat-6.deti/static/views.txt).


## 4. References
* https://portswigger.net/web-security/server-side-template-injection
