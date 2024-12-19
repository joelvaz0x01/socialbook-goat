# Vulnerability: Information Leakage
## Machine: 5

The first thing we did after checking (in /security) that team 5's website had an information leakage 
was creating an account. After that we logged off and tried creating a new account with the same credentials, 
repeating the password in one case:

![passwordLeak.png](https://github.com/detiuaveiro/vulnerability-assessment-vulnerability-just-drink-some-coffee/blob/dev/informationLeakage_team5/passwordLeak.png)

The email in another:

![emailLeak.png](https://github.com/detiuaveiro/vulnerability-assessment-vulnerability-just-drink-some-coffee/blob/dev/informationLeakage_team5/passwordLeak.png)

And the username in the last one:

![usernameLeak.png](https://github.com/detiuaveiro/vulnerability-assessment-vulnerability-just-drink-some-coffee/blob/dev/informationLeakage_team5/usernameLeak.png)

As you can see from the images above, there is information leakage about every single one of the mentioned attributes.
