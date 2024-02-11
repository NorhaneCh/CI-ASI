import React from "react";
//nbParticip , Note
const Devis = () => {
  return (
    <div className="bg-color-blue/10 h-screen relative">
      <div className="h-[66%] w-[60%] bg-white rounded-md absolute top-36 right-[20%] p-6">
        <p className="text-center text-[20px] font-semibold">Demander Devis</p>
        <div className="flex flex-col mt-12 w-[45%] mx-auto gap-6">
          <label className="rounded-md text-[15px] border-2 border-black/50">
            <input
              type="text"
              name="organisme"
              // onChange={(e) => (userName.current = e.target.value)}
              placeholder="nom d'organisme"
              className="rounded-md w-full py-2 px-6 font-medium"
            />
          </label>
          <label className="rounded-md text-[15px] border-2 border-black/50">
            <input
              type="email"
              name="email"
              // onChange={(e) => (userName.current = e.target.value)}
              placeholder="email"
              className="rounded-md w-full py-2 px-6 font-medium"
            />
          </label>
          <label className="rounded-md text-[15px] border-2 border-black/50">
            <input
              type="text"
              name="number"
              // onChange={(e) => (userName.current = e.target.value)}
              placeholder="numéro de téléphone"
              className="rounded-md w-full py-2 px-6 font-medium"
            />
          </label>
          <label className="rounded-md text-[15px] border-2 border-black/50">
            <input
              type="text"
              name="nbParticipants"
              // onChange={(e) => (userName.current = e.target.value)}
              placeholder="nombre de particpants"
              className="rounded-md w-full py-2 px-6 font-medium"
            />
          </label>
          <label className="rounded-md text-[15px] border-2 border-black/50">
            <textarea
              type="text"
              name="note"
              // onChange={(e) => (userName.current = e.target.value)}
              placeholder="note"
              className="rounded-md w-full py-2 px-6 font-medium"
            />
          </label>
        </div>
        <div className="flex flex-row mt-12 w-[80%] mx-auto justify-evenly">
          <button className="text-center py-2 bg-green-500 text-white w-[120px] rounded-xl font-medium text-[13px] hover:bg-green-600">
            Confirmer
          </button>
          <button className="text-center py-2 bg-red-500 text-white w-[120px] rounded-xl font-medium text-[13px] hover:bg-red-600">
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
};

export default Devis;
