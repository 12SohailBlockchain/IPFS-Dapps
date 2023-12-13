const IPFS = require ('ipfs-http-client');

const auth = 'Basic ' + Buffer.from(`${process.env.REACT_APP_INFURA_PROJECTID}:${process.env.REACT_APP_INFURA_APIKEY}`).toString('base64');
const ipfs = IPFS.create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https', apiPath: '/api/v0', headers: { authorization: auth, } });
export default ipfs;