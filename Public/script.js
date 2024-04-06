document.addEventListener("DOMContentLoaded", async () => {
    // Connect to the deployed contract
    const contractAddress = '0xCa2E2DF9b1C18cAB3678aA57E4CCfb26759e856e'; // Replace with your deployed contract address
    const abi = [
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "a",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "b",
                    "type": "uint256"
                }
            ],
            "name": "add",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "a",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "b",
                    "type": "uint256"
                }
            ],
            "name": "divide",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "a",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "b",
                    "type": "uint256"
                }
            ],
            "name": "multiply",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "a",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "b",
                    "type": "uint256"
                }
            ],
            "name": "subtract",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        }
    ];

    const web3 = new Web3('https://sepolia.infura.io/v3/dc2a869bcc44417d8c1d7e93b3323fc6');


    // Prompt user to connect their MetaMask account
    try {
        await window.ethereum.enable();
    } catch (error) {
        console.error("User denied account access");
    }

    const contract = new web3.eth.Contract(abi, contractAddress);

    document.getElementById('addBtn').addEventListener('click', async () => {
        const num1 = document.getElementById('number1').value;
        const num2 = document.getElementById('number2').value;
        const result = await contract.methods.add(num1, num2).call();
        document.getElementById('result').innerText = `Result: ${result}`;
    });

    document.getElementById('subtractBtn').addEventListener('click', async () => {
        const num1 = document.getElementById('number1').value;
        const num2 = document.getElementById('number2').value;
        const result = await contract.methods.subtract(num1, num2).call();
        document.getElementById('result').innerText = `Result: ${result}`;
    });

    document.getElementById('multiplyBtn').addEventListener('click', async () => {
        const num1 = document.getElementById('number1').value;
        const num2 = document.getElementById('number2').value;
        const result = await contract.methods.multiply(num1, num2).call();
        document.getElementById('result').innerText = `Result: ${result}`;
    });

    document.getElementById('divideBtn').addEventListener('click', async () => {
        const num1 = document.getElementById('number1').value;
        const num2 = document.getElementById('number2').value;
        const result = await contract.methods.divide(num1, num2).call();
        document.getElementById('result').innerText = `Result: ${result}`;
    });
});
