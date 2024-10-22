# Import the Azure module
Import-Module Az

# Authenticate to Azure
Connect-AzAccount

# Define variables
$resourceGroupName = "example-resources"
$location = "West Europe"
$storageAccountName = "examplestorageacct"
$skuName = "Standard_LRS"
$kind = "StorageV2"

# Create the resource group
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create the storage account
New-AzStorageAccount -ResourceGroupName $resourceGroupName `
                     -Name $storageAccountName `
                     -Location $location `
                     -SkuName $skuName `
                     -Kind $kind