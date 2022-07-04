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
    <div className="container mx-auto mt-5 border border-gray-400 w-3/5 rounded">
      <div className="p-3 mb-5 text-center mb-2 bg-gray-400">
        <p className="text-white"><i className="fas fa-home p-1"></i>Endereço</p>
      </div>
      <hr></hr>
        <form onSubmit={handleSubmit()} className="ml-5 p-5" >
          <div className="md:flex justify-center mr-8">
            <div className="md:ml-6">
              <p>CEP *</p>
              <input type="text" {...register("cep")} onBlur={checkCEP} className="p-0 inputCep pl-2 border-gray-400 rounded"/>
            </div>

            <div className="md:ml-5">
              <p>Rua *</p>
              <input type="text" {...register("address")} className="p-0 inputRua pl-2 border-gray-400 rounded"/>
            </div>
          </div>

          <div className="md:flex justify-center md:mt-3">
            <div className="mr-5">
              <p>Bairro *</p>
              <input type="text" {...register("neighborhood")} className="p-0 inputBairro pl-2 border-gray-400 rounded"/>
            </div>

            <div className="mr-5">
              <p>Cidade *</p>
              <input type="text" {...register("city")} className="p-0 inputCidade w-24 pl-2 border-gray-400 rounded"/>
            </div>

            <div className="mr-5">
              <p>Estado *</p>
              <input type="text" {...register("uf")} className="p-0 inputEstado w-28 pl-2 border-gray-400 rounded"/>
            </div>
            <div>
              <p>Número *</p>
              <input type="text" {...register("addressNumber")} className="p-0 inputNumero pl-2 border-gray-400 rounded"/>
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
