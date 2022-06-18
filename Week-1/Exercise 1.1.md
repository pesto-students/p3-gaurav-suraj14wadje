- ### Main functionality of the browser 

  - to get the data from the web and show it in the way that it is user friendly
  - to take action based on user inputs


- ### Hight Level Components of the browser

  - #### Rendering engine :
    Responsible for parsing html and css and display appropriate page
  - #### JS Interpreter
    Responsible for interpreting the javascript and execute it
    
  - #### Networking 
    Responsible for performing http requests

  - #### Data storage
    Browser needs this to store data locally such as : cookies, session , local storage

- ### Rendering engine and its use
    Rendering engine parses html and builds DOM tree and from this DOM tree it draws text and images on the screen

- ### Order of script processing
    Browser executes the script in order it finds them
    ex.
    ```
    <!DOCTYPE HTML>
    <html>
        <head>
            <title>Test</title>
            <script type="text/javascript">
                alert("this will executed first");
            </script>
        </head>
        <body>
            <script type="text/javascript">
                alert("this will go next");
            </script>
        </body>
    </html>
    ```
    Output of above will be
    > this will executed first

    > this will go next

    in the above example the script which comes first while building DOM will get executed first

## When a user enters a url in browser
1. first browser checks the protocol of the url
    - if the protocol is http, browser send a GET request on port 80
    - if it is https, it sends a GET request on port 443
2. It then builds the DOM and renders the content on the screen from data got by above step with the help of rendering engine
3. once the html is rendered it then executes javascript with the help of JS interpreter

