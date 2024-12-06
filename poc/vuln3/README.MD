# 20241126 - Server Side Template Injection

## 1. **Overview**
Server-side template injection is when an attacker is able to use native template syntax to inject a malicious payload into a template, which is then executed server-side.


## 2. **Impact**

### 2.1 Remote Code Execution
Allow the attacker to inject arbitrary template directives in order to manipulate the template engine, and enabling them to take complete control of the server.

### 2.2 Information Disclosure
The attacker can access sensitive information such as server code, environment variables, and other sensitive information.

### 2.3 Denial of Service
The attacker can inject a payload that causes the server to crash, rendering the service unavailable.


## 3. References
* https://portswigger.net/web-security/server-side-template-injection
