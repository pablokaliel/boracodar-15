import React from "react";
import check from "./assets/check.png";
import info from "./assets/info.png";

function App() {
  return (
    <div className="md:grid md:place-content-center w-full h-full">
      <div className="w-full flex gap-8 max-md:flex-col mx-auto md:my-80 group">
        <div className="bg-white w-96 group-hover:scale-90 transition hover:!scale-105 group-hover:opacity-50 hover:!opacity-100 mx-auto h-[454px] px-8 py-12 rounded-xl border-bar border hover:border-subtitle-purple ease-in duration-200">
          <h4 className="text-subtitle-purple font-semibold mb-2 uppercase">
            Para você começar
          </h4>
          <div className=" flex  items-center justify-between">
            <h1 className="font-bold text-title-black text-[32px]">
              Essentials
            </h1>
            <h3 className="font-bold text-lg text-title-black">
              <span className="font-normal">R$</span> 19,97/mês
            </h3>
          </div>
          <button className="w-80 h-14 border border-title-black rounded mt-8 font-bold text-title-black hover:bg-title-black hover:text-white transition-all  duration-300 hover:ease-in">
            Assinar agora
          </button>
          <div className="h-px w-full bg-bar my-8"></div>
          <div className="flex justify-between items-center my-4">
            <div className="flex gap-2 items-center ">
              <img src={check} alt="check" className="h-3 w4" />
              <h3 className="text-text-black">Até 3 usuários</h3>
            </div>
            <img
              src={info}
              alt="info"
              title="somente 3 pessoas podem logar"
              className="w-5 h5"
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center ">
              <img src={check} alt="check" className="h-3 w4" />
              <h3 className="text-text-black">Autoatendimento</h3>
            </div>
            <img
              src={info}
              alt="info"
              title="suporte online"
              className="w-5 h5"
            />
          </div>
        </div>

        <div className="group">
          <div className="bg-dark w-96 h-[454px]  mx-auto  px-8 py-12 rounded-xl relative group-hover:scale-90 transition hover:!scale-105 group-hover:opacity-50 hover:!opacity-100">
            <div className="w-32 h-9 bg-vantage text-dark uppercase absolute -top-4 inset-x-1/3 font-bold text-xs  flex items-center justify-center rounded-md">
              mais vantajoso
            </div>
            <h4 className="text-btn-bg uppercase font-fold mb-2">
              para você decolar
            </h4>
            <div className="text-background flex items-center justify-between">
              <h1 className="font-bold text- text-[32px]">Ultimate</h1>
              <h3 className="font-bold text-lg ">
                <span className="font-normal">R$</span> 29,97/mês
              </h3>
            </div>
            <button className="w-80 h-14  rounded mt-8 font-bold text-white bg-btn-bg  hover:bg-subtitle-purple transition-all  duration-300 hover:ease-in">
              Assinar agora
            </button>
            <div className="h-px w-full bg-bar-dark my-8"></div>
            <div className="flex justify-between items-center my-4">
              <div className="flex gap-2 items-center ">
                <img src={check} alt="check" className="h-3 w4" />
                <h3 className="text-text-dark">Usuários ilimitados</h3>
              </div>
              <img
                src={info}
                alt="info"
                title="não tem quantidade de usuários para logar"
                className="w-5 h5"
              />
            </div>
            <div className="flex justify-between items-center my-4">
              <div className="flex gap-2 items-center ">
                <img src={check} alt="check" className="h-3 w4" />
                <h3 className="text-text-dark">Suporte 24/7</h3>
              </div>
              <img
                src={info}
                alt="info"
                title="suporte todos os dias em qualquer horário"
                className="w-5 h5"
              />
            </div>
            <div className="flex justify-between items-center my-4">
              <div className="flex gap-2 items-center ">
                <img src={check} alt="check" className="h-3 w4" />
                <h3 className="text-text-dark">CSM Dedicado</h3>
              </div>
              <img src={info} alt="info" title="CSM " className="w-5 h5" />
            </div>
            <div className="flex justify-between items-center my-4">
              <div className="flex gap-2 items-center ">
                <img src={check} alt="check" className="h-3 w4" />
                <h3 className="text-text-dark">Treinamentos</h3>
              </div>
              <img
                src={info}
                alt="info"
                title="projetos praticos para treinar"
                className="w-5 h5"
              />
            </div>
          </div>
        </div>

        <div className="group">
          <div className="bg-white w-96 h-[454px] mx-auto px-8 py-12 rounded-xl border-bar border hover:border-subtitle-purple ease-in duration-200 group-hover:scale-90 transition hover:!scale-105 group-hover:opacity-50 hover:!opacity-100">
            <h4 className="text-subtitle-purple font-semibold mb-2 uppercase">
              para sua empresa
            </h4>
            <h1 className="font-bold text-title-black text-[32px]">
              Enterprise
            </h1>
            <button className="w-80 h-14 border border-title-black rounded mt-8 font-bold text-title-black hover:bg-title-black hover:text-white transition-all  duration-300 hover:ease-in">
              fale com a gente
            </button>
            <div className="h-px w-full bg-bar my-8"></div>
            <div className="flex justify-between items-center my-8">
              <div className="flex gap-2 items-center ">
                <img src={check} alt="check" className="h-3 w4" />
                <h3 className="text-text-black tracking-wider">
                  Plano customizado especialmente para a necessidade de seu
                  negocio.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
