pipeline {
    agent any
    tools {
        nodejs 'NodeJS'  // Requires NodeJS plugin
    }
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/Gvram13-03/Jenkins_Node_App', branch: 'main'  // Update URL
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t node-app .'
            }
        }
    }
}