---
created-at: "2024-11-17"
---

Terraform is a [[IaC]] tool used to define and manage infrastructure resources. We can describe the desired infrastructure state by defining resources in one or more HCL (HashiCorp Configuration Language) files. Then, we can use `terraform apply` to apply that desired state to the infrastructure.

Usually, we use Terraform to provision the infrastructure, and then run [[Ansible]] to configure the services running on top of that infrastructure. We can also use Terraform for configuration management via _provisioners_, but they are unreliable and even HashiCorp recommends using them only as a last resort. At the same time, we could also use [[Ansible]] to provision infrastructure, but Terraform is a way better choice for that.

# References

https://spacelift.io/blog/terraform-files
