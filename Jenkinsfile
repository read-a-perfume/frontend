pipeline {
    agent any
    environment {
        DOCKER_HUB_CREDENTIALS = 'dockerhub'
        DOCKER_REPOSITORY_NAME = 'webdev0594'
    }
    stages {
        stage('Initialize') {
            steps {
                script {
                    env.GIT_COMMIT_HASH = sh(returnStdout: true, script: 'git rev-parse HEAD | cut -c 1-10').trim()
                    env.DOCKER_IMAGE_NAME = "${DOCKER_REPOSITORY_NAME}/perfume-frontend"
                }
            }
        }
        stage('Clone Repository') {
            steps {
                checkout scm
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    def customImage = docker.build("${DOCKER_IMAGE_NAME}:${env.GIT_COMMIT_HASH}", "--file Dockerfile .")
                }
            }
        }
        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry("https://index.docker.io/v1/", DOCKER_HUB_CREDENTIALS) {
                        def customImage = docker.image("${env.DOCKER_IMAGE_NAME}:${env.GIT_COMMIT_HASH}")
                        customImage.push("${env.GIT_COMMIT_HASH}")
                        customImage.push("latest")
                    }
                }
            }
        }
    }
    post {
        always {
            script {
                sh 'docker logout'
            }
        }
    }
}
