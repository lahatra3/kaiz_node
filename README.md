# kaiz

- [ ] ***Description***

***KAIZ*** is an IA chatbot in command line interface (CLI). It use `llma2` (as model) running on `ollama`.

- [ ] ***Dependancies***
    - [Nodejs v20.x](https://nodejs.org)
    - [Docker and docker compose](https://www.docker.com)

- [ ] ***Installation***

    - ***Download source code***
        ```Bash
        $ ~ git clone https://github.com/lahatra3/kaiz.git
        ```
    
    - ***Install dependancies and build***
        ```Bash
        $ ~ cd kaiz
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
        $ ~ docker exec -it ollama ollama pull llama2
        ```
