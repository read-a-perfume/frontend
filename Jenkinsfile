pipeline {
    agent any

    environment {
        NODE_VERSION = '20.5.1'
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
                nodejs(nodeJSInstallationName: 'NodeJS ${NODE_VERSION}', configId: 'nodejs') {
                    sh 'npm install -g yarn'
                    sh 'yarn install --frozen-lockfile'
                }
            }
        }

        stage('Build') {
            steps {
                nodejs(nodeJSInstallationName: 'NodeJS ${NODE_VERSION}', configId: 'nodejs') {
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
