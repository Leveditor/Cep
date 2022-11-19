import { useForm } from "react-hook-form";

export default function Input() {
  const { register, handleSubmit, setValue, setFocus } = useForm();

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setValue("address", data.logradouro);
        setValue("neighborhood", data.bairro);
        setValue("city", data.localidade);
        setValue("uf", data.uf);
        setFocus("addressNumber");
      });
  };

  return (
    <>
    <div className="container mx-auto mt-5 border border-gray-400 md:w-3/5  w-10/12 rounded">
      <div className="p-3 mb-5 text-center mb-2 bg-gray-400">
        <p className="text-white"><i className="fas fa-home p-1"></i>Endereço</p>
      </div>
      <hr></hr>
        <form onSubmit={handleSubmit()} className="md:ml-5 p-5" >
          <div className="md:grid grid-cols-2 gap-4">
            <div>
              <p>CEP *</p>
              <input type="text" {...register("cep")} onBlur={checkCEP} className="w-inputs p-0 border-gray-400 rounded"/>
            </div>

            <div>
              <p>Rua *</p>
              <input type="text" {...register("address")} className="w-inputs p-0 pl-2 border-gray-400 rounded"/>
            </div>
          </div>

          <div className="md:grid grid-cols-4 gap-4 md:mt-5">
            <div>
              <p>Bairro *</p>
              <input type="text" {...register("neighborhood")} className="w-inputs p-0 pl-2 border-gray-400 rounded"/>
            </div>

            <div>
              <p>Cidade *</p>
              <input type="text" {...register("city")} className="w-inputs p-0 pl-2 border-gray-400 rounded"/>
            </div>

            <div>
              <p>Estado *</p>
              <input type="text" {...register("uf")} className="w-inputs p-0 pl-2 border-gray-400 rounded"/>
            </div>
            <div>
              <p>Número *</p>
              <input type="text" {...register("addressNumber")} className="w-inputs p-0 pl-2 border-gray-400 rounded"/>
            </div>
            
          </div>

          <div className="flex justify-center mt-5">
            <button type="submit" className="pl-12 pr-12 text-white rounded bg-green-500 hover:bg-green-700">Enviar</button>
          </div>
        </form>
      </div>
    </>
  );
}
