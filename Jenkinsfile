pipeline {
    agent any

    env {
        NODE_ENV = 'production'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/read-a-perfume/frontend.git'
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
