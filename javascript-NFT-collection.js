/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/
// create a variable to hold your NFT's
// const nftContainer =[]
const NFTHolder =[]
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name,uniqueId,price,category) {
    const nftObject = {
        "Name":name,
        "UniqueId":uniqueId,
        "Price":price,
        "Category":category
    }
    NFTHolder.push(nftObject);
    console.log("NFT with name '"+name+"' Successfully created ");
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    console.log("\nAvailable NFTs");
    for(let i=0;i<NFTHolder.length;i++){
        // console.log("\nNFT Number = ",i+1);
        console.log("Name = "+NFTHolder[i].Name+", Unique Id = "+NFTHolder[i].UniqueId+", Price = "+NFTHolder[i].Price+", Category = "+NFTHolder[i].Category);
        console.log("-----------------------------------------------------")
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal NFTs Available = ",NFTHolder.length)
}

// call your functions below this line
mintNFT("MonkeyMan","M001","$100,000","Digital Artwork");
mintNFT("GuitarGold","G002","$20,000","Music");
mintNFT("PlainBlank","P003","$9000","Abstract");
mintNFT("Doge","D004","$3,100,000","Meme");

getTotalSupply();
listNFTs();