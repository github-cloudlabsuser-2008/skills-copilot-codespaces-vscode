# Creating a Virtual Network in Azure Portal

## Prerequisites
- An active Azure subscription
- Access to the Azure Portal

## Steps

1. **Sign in to Azure Portal**
  - Go to [Azure Portal](https://portal.azure.com) and sign in with your credentials.

2. **Navigate to Virtual Networks**
  - In the left-hand menu, select **"Create a resource"**.
  - In the search box, type **"Virtual Network"** and select it from the list.

3. **Create a Virtual Network**
  - Click on **"Create"**.
  - Fill in the required fields:
    - **Subscription**: Select your subscription.
    - **Resource Group**: Create a new resource group or select an existing one.
    - **Name**: Enter a name for your virtual network.
    - **Region**: Select the region where you want to create the virtual network.

4. **Configure Address Space**
  - In the **Address space** section, enter the IP address range for your virtual network (e.g., `10.0.0.0/16`).

5. **Add Subnets**
  - Click on **"Subnets"**.
  - Click **"Add subnet"**.
  - Enter a **Subnet name** and **Subnet address range** (e.g., `10.0.1.0/24`).
  - Click **"Add"**.

6. **Review and Create**
  - Review your settings.
  - Click **"Review + create"**.
  - After validation, click **"Create"**.

## Verification
- Once the deployment is complete, navigate to **"Resource Groups"**.
- Select your resource group and verify that the virtual network has been created.

## Additional Resources
- [Azure Virtual Network Documentation](https://docs.microsoft.com/en-us/azure/virtual-network/)
