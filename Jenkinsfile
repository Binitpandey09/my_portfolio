pipeline {
    agent any
    stages {
        stage('Checkout Code') {
            steps {
                git credentialsId: 'github-credentials', url: 'https://github.com/Binitpandey09/my_portfolio.git'
            }
        }
    }
}
