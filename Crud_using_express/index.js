const express = require('express');

const app = express();
const PORT = 3030;

app.use(express.json()); 

app.listen(PORT, () => console.log(`Express server currently running on port ${PORT}`));

app.get('/', (request, response) => {
    response.send('This is my first Nodejs Application');
  });


  let accounts = [
    {
      "id": 1,
      "username": "omkumar",
      "role": "admin"
    },
    {
      "id": 2,
      "username": "sundar",
      "role": "admin"
    },
    {
      "id": 3,
      "username": "revathi",
      "role": "user"
    }
  ];
  
  app.get('/accounts', (request, response) => {
    response.json(accounts);
  });
  
  app.get('/accounts/:id', (request, response) => {
    const accountId = Number(request.params.id);
    const getAccount = accounts.find((account) => account.id === accountId);
  
    if (!getAccount) {
      response.status(500).send('Account not found.')
    } else {
      response.json(getAccount);
    }
  });

  app.post('/accounts', (request, response) => {
    const incomingAccount = request.body;
  
    accounts.push(incomingAccount);
  
    response.json(accounts);
  })

  app.put('/accounts/:id', (request, response) => {
    const accountId = Number(request.params.id);
    const body = request.body;
    const account = accounts.find((account) => account.id === accountId);
    const index = accounts.indexOf(account);
  
    if (!account) {
      response.status(500).send('Account not found.');
    } else {
      const updatedAccount = { ...account, ...body };
  
      accounts[index] = updatedAccount;
  
      response.send(updatedAccount);
    }
  });

  app.delete('/accounts/:id', (request, response) => {
    const accountId = Number(request.params.id);
    const newAccounts = accounts.filter((account) => account.id != accountId);
  
    if (!newAccounts) {
      response.status(500).send('Account not found.');
    } else {
      accounts = newAccounts;
      response.send(accounts);
    }
  });