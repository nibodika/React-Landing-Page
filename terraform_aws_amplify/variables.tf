variable "github_token" {
  description = "GitHub Personal Access Token"
  type        = string
  sensitive   = true
}

variable "repository" {
  description = "GitHub Repository URL"
  type        = string
}

variable "branch" {
  default = "main"
}