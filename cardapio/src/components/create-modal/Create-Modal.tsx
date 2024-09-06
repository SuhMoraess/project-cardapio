import { useEffect, useState } from "react";
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";
import { FoodData } from "../../interface/FoodData";
import "./Modal.css"

interface InputProps<T> {
    label: string;
    value: T;
    updateValue: (value: T) => void;
}

interface CreateModalProps {
    closeModal: () => void;
  }

const Input = <T extends string | number>({ label, value, updateValue }: InputProps<T>) => {
    return (
        <div>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value as T)} />
        </div>
    );
};

export default function CreateModal({ closeModal }: CreateModalProps) {
    const [title, setTitle] = useState<string>("");
    const [price, setPrice] = useState<number>(0);
    const [image, setImage] = useState<string>("");
    const { mutate, isSuccess, isLoading} = useFoodDataMutate(); 


    const submit = () => {
        const foodData: FoodData = { 
            title,
            price,
            image
        }

        mutate(foodData);
        closeModal(); 
    }

    useEffect(() => {
        if(!isSuccess) return
        closeModal()

    }, [isSuccess])

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo item no cardápio</h2>
                <form className="input-container" action="" method="post">
                    <Input label="title" value={title} updateValue={setTitle} />
                   <Input label="price" value={price} updateValue={setPrice} />
                    <Input label="image" value={image} updateValue={setImage} />
                </form>
                <button onClick={submit} className="btn-secondary">                {isLoading ? 'Carregando Informações ...': 'Salvar'}
                </button>
            </div>
        </div>
    );
}
