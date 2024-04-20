# kaiz

- [ ] ***Description***

***KAIZ*** is an IA chatbot in command line interface (CLI). It use `kaiz` (`llama3 customized model`) running on `ollama`.

- [ ] ***Dependancies***
    - [Nodejs v20.x](https://nodejs.org)
    - [Docker and docker compose](https://www.docker.com)

- [ ] ***Installation***

    - ***Download source code***
        ```Bash
        $ ~ git clone https://github.com/lahatra3/kaiz_node.git
        ```
    
    - ***Install dependancies and build***
        ```Bash
        $ ~ cd kaiz_node
        $ ~ npm i
        $ ~ npm run build
        ```
    
    - ***Install CLI***
        ```Bash
        $ ~ npm i -g
        ```
    
    - ***Running IA model***
        ```Bash
        $ ~ cd local
        $ ~ docker-compose up -d
        $ ~ docker exec -it ollama_app bash /root/run.sh
        ```

Now ***kaiz*** CLI could run... 
Happy coding 😊 ...!