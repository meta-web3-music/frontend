import React, { useState } from "react";

function MintModal() {
  const [file, setFile] = useState();
  const [songName, setSongName] = useState();
  const [artistName, setArtistName] = useState();
  const [price, setPrice] = useState();

  return (
    <div className="flex flex-col fixed left-1/2 translate-x-[-50%] top-32 overflow-auto align-center bg-white border rounded-lg w-11/12 md:w-1/2 lg:w-4/12 m-auto py-6 px-8">
      <h3 className="font-bold mb-4">Mint Song NFT</h3>

      <h5 className="font-medium my-4">Upload Song</h5>

      <div className="flex border-2 border-dashed py-6 place-content-center text-center text-gray-600">
        <p>
          <span className="text-[#026eed] font-medium">Upload Song</span>
          <br />
          Song should be mp3, <br />
          wav format
        </p>
      </div>
      <form onSubmit={null}>
        <label>
          <p className="font-medium my-4">Song Name</p>
          <input
            type="text"
            value={songName}
            onChange={(e) => setSongName(e.target.value)}
            className="border w-full rounded py-2 px-4"
          />
        </label>
        <label>
          <p className="font-medium my-4">Artist Name</p>
          <input
            type="text"
            value={artistName}
            onChange={(e) => setArtistName(e.target.value)}
            className="border w-full rounded py-2 px-4"
          />
        </label>
        <label>
          <p className="font-medium mt-4">Ad space price</p>
          <p className="font-extralight mb-2">All values are in ETH</p>
          <input
            type="text"
            value={songName}
            onChange={(e) => setSongName(e.target.value)}
            className="border w-full rounded py-2 px-4"
          />
        </label>
        <label>
          <input
            type="submit"
            value="Mint Song NFT"
            className="inline-block px-11 p-4 w-full bg-[#ff7e3a] text-white font-medium text-md leading-tight uppercase rounded-full hover:bg-[#ff8543] focus:outline-none focus:ring-0 transition duration-150 ease-in-out mt-8 mb-2"
          />
        </label>
      </form>
      <p className="text-sm text-center text-gray-500">Charges not included</p>
    </div>
  );
}

export default MintModal;
