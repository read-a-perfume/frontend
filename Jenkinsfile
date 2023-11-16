pipeline {
    agent any

    environment {
        NODE_VERSION = '18'
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
                sh 'yarn install --frozen-lockfile'
            }
        }

        stage('Build') {
            steps {
                sh 'yarn build'
            }
        }

        stage('Deploy to S3') {
            steps {
                sh 'aws s3 sync dist/ s3://perfume-fe --delete'
            }
        }
    }
}
