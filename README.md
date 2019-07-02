# Example Microservice with Clean Architecture

### Stack
  We’ll use a simple NodeJS service for our backend.

    NodeJS - Carbon
    NodeJS - Latest
    Docker for Linux

### Deploy in GCP Cloud Run

1- gcloud config set project PROJECT-ID
2- gcloud builds submit --tag gcr.io/PROJECT-ID/userservice
3- gcloud beta run deploy --image gcr.io/PROJECT-ID/userservice --platform managed

### @jggomezt