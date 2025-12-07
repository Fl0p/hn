MVP Dify workflow to execute as a fully self-hosted solution without need of internet access during runtime to meet advanced security requirements.

### Prerequisites:

* Linux-based OS with 16+ Gb memory
* python3 with flask
* docker/docker-compose
* ocrmypdf with pol lang support, pdftotest
* ollama with llama3.2 or gpt-oss

### Starting up:

* run 'ollama serve'
  * capture port
* run 'cd rest-runner && python3 runner.py'
* run 'cd dify && docker compose up -d'
  * open http://localhost/app/
  * install Ollama plugin with custom local LLM provider using port from previous step
  * import workflow DSL: dify_workflow_selfhosted.yml

### Workflow execution
* Start workflow by attaching PDF file
* Result should contain short textual summary of provided PDF