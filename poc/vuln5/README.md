
# 20241122 - Cryptographic failure

## 1. **Overview**

Cryptographic failure consists on the improper use of cryptographic functions and standards leading to critical security breaches

## 2. **Description**

Two critical cryptographic implementation failures were implemented in the application authentication and session management. These weakness result from the use of deprecated hashing algorithms and weak secret key implementations.

For the hashing of the plaintext passwords of the users is being used MD5, a cryptographically broken algorithm that is also susceptible to collision attacks (application authentication failure).

And for the secret key is being used a very weak key, 15 characters long, that is susceptible to dictionary and brute force attacks (session management failure).

## 3. **Impact**

### 3.1 Password storage impact

The MD5 algorithm is a broken algorithm, even though the passwords use salt the hash computation speed is too fast, enabling brute force attacks very easily

- Credential Exposure : Stored password hashes can be reversed using rainbow tables or brute force, consequentially account takeover can occur from the compromised passwords

- Lateral Movement : Compromised passwords are most likely reused in different services, so that could enable other services accounts takeover that don't have this vulnerability present

### 3.2 Secret Key impact

Secret Key is used in a number of ways, some being, cryptographic signing, cookies and CSRF tokens.

The compromise of the secret key can lead to:

- Session Hijacking: by prediction of the session tokens

- CSRF Token Bypass and Cookie Tampering: by forging or modifying the cookies/tokens, using the secret key

- Remote Code Execution: cookie tampering could lead to RCE through template injection

## 4. **Proof of concept**

### 4.1  Password storage

If the attacker is able to get the data on the database he should get someting like this:

| id | password                                                          | last_login | is_superuser |  username | ... |
|----|-------------------------------------------------------------------|------------|--------------|-----------|-----|
| 1  | md5\$VeVgy2ZPpwNSOejO0NUGDX$ed1c717cec771fb32d7de5a0ccd3fb2b      | some_date  |              | userTest1 |     |
| 2  | md5\$L4oOGpjpfvEvdXOJKp00QI$2b0226eae193bfb04b49f6ffe6635b1c      | some_date  |              | admin     |     |
|... |                                                                   |            |              |           |     |

Now it's a simple case of cracking the password, we will use hashcat for this example:

```shell script
hashcat -m 20 'ed1c717cec771fb32d7de5a0ccd3fb2b:VeVgy2ZPpwNSOejO0NUGDX' Documents/rockyou.txt
```

The result is :

``` shell
ed1c717cec771fb32d7de5a0ccd3fb2b:VeVgy2ZPpwNSOejO0NUGDX:Password11
                                                          
Session..........: hashcat
Status...........: Cracked
Hash.Mode........: 20 (md5($salt.$pass))
Hash.Target......: ed1c717cec771fb32d7de5a0ccd3fb2b:VeVgy2ZPpwNSOejO0NUGDX
```

This can be extrapolated to other hashes and instead of using a dictonary attack use a brute force attack.

### 4.2 Secret Key

The same process can be applied to discover the secret key, in this case we take a signature of someting that we already know, in this case a CRSF token, and try to discover the secret key that was used to sign that document

## 5. References

- <https://blog.devgenius.io/cryptographic-failures-django-security-cad69eece7fc>

- <https://docs.djangoproject.com/en/dev/ref/settings/#secret-key>

- <https://docs.djangoproject.com/en/dev/topics/auth/passwords/#auth-password-storage>
