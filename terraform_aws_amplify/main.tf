resource "aws_amplify_app" "react_app" {

  name         = "React-Landing-Page"
  repository   = var.repository
  access_token = var.github_token

  platform = "WEB"

  enable_branch_auto_build = true

  build_spec = file("amplify.yml")
}


resource "aws_amplify_branch" "main" {

  app_id      = aws_amplify_app.react_app.id
  branch_name = var.branch

  framework         = "React"
  stage             = "PRODUCTION"
  enable_auto_build = true
}

resource "aws_amplify_domain_association" "custom_domain" {
  app_id      = aws_amplify_app.react_app.id
  domain_name = "fonepasal.ai"

  sub_domain {
    branch_name = aws_amplify_branch.main.branch_name
    prefix      = "nova"
  }
}

