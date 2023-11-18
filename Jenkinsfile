pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            agent {
                docker { 
                    image 'node:21-alpine3.18' 
                    reuseNode true
                }
            }
            steps {
                sh 'yarn install --frozen-lockfile'
                sh 'yarn build'
            }
        }
        
        stage('Deploy') {
            steps {
                sh 'aws s3 sync dist/ s3://perfume-fe --profile=s3-deploy --delete'
            }
        }
    }
}
