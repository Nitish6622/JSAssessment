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
const NFTs=[]
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_empName,_empId,_empSalary,_empCity) {
const NFT ={
    "name":_empName,
    "Id":_empId,
    "salary":_empSalary,
    "city":_empCity
}
NFTs.push(NFT);
console.log("Minted " + _empName);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
for(let i=0; i < NFTs.length; i++){
    console.log("\n ID \t\t\t\t\t\t" + (i+1));
    console.log("\n Name of the employee \t\t" + NFTs[i].name);
    console.log("\n Id of the employee \t\t" + NFTs[i].Id);
    console.log("\n Salary of the employee \t" + NFTs[i].salary);
    console.log("\n City of the employee \t\t" + NFTs[i].city);
}
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n"+ NFTs.length);

}

// call your functions below this line
mintNFT("Monu","101","10000","Delhi");
mintNFT("Nitish","102","20000","Mumbai");
mintNFT("Suman","103","70000","Panipat");
mintNFT("Rahul","104","100000","Delhi");
mintNFT("Rohit","105","90000","Chandigarh");
listNFTs();
getTotalSupply();
