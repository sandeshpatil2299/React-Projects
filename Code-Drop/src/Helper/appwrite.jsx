import {Account, Client, Databases, ID } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('64ef2110ade8115653f0');

const account = new Account(client);
const databases = new Databases(client);

//getting loged user id
const getCurrentUser= async() => {
    const promise= account.get();
    const result= promise
        .then((user) => {
            return user;
        })
        .catch(() => null);
    
    return result;
};

//sending data to database
const addCodeDroptoDB= async(codeDropData) => {
    //getting user id
    const user= await getCurrentUser();
    if(!user) return null;

    const promise = databases.createDocument(
        '64f9cee07b8e348e3349',
        '64f9ceee62cb0ae0d34f',
        ID.unique(),
        {
            ... codeDropData,
            owner: user.$id,
        }
    );
    const result= promise.then((res) => res).catch(() => null);
    return result;
};   


export { client, account, addCodeDroptoDB, databases, getCurrentUser };