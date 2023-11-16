pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
    }

    stages {
        stage('Clone Repository') {
            steps {
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                nodejs('NodeJS 20.5.1') {
                    sh 'npm install -g yarn typescript'
                    sh 'yarn install --frozen-lockfile'
                }
            }
        }

        stage('Build') {
            steps {
                nodejs('NodeJS 20.5.1') {
                    sh 'yarn build'
                }
            }
        }

        stage('Deploy to S3') {
            steps {
                sh 'aws s3 sync dist/ s3://perfume-fe --delete'
            }
        }
    }
}
