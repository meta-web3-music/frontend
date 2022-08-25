// helper function to transform uri with this format: ipfs://
 const transformIpfsUri = (uri: string) => {
    const ipfsPrefix = "https://ipfs.io/ipfs/";
    const uriWithRemovedIpfsPrefix = uri.substring(7);
    const correctIpfsUri = ipfsPrefix.concat(uriWithRemovedIpfsPrefix);
    return correctIpfsUri;
  };

export {transformIpfsUri}
