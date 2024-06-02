// Create a variable to hold the NFTs
let nftCollection = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, description, artist) {
    let newNFT = {
        name: name,
        description: description,
        artist: artist
    };
    nftCollection.push(newNFT);
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    nftCollection.forEach(function(nft, index) {
        console.log("NFT " + (index + 1) + ":");
        console.log("Name: " + nft.name);
        console.log("Description: " + nft.description);
        console.log("Artist: " + nft.artist);
        console.log("------------------------");
    });
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total number of NFTs minted: " + nftCollection.length);
}

// Call your functions below this line
mintNFT("NFT 1", "Description for NFT 1", "Artist 1");
mintNFT("NFT 2", "Description for NFT 2", "Artist 2");
mintNFT("NFT 3", "Description for NFT 3", "Artist 3");

listNFTs();
getTotalSupply();
