import { useDebugValue } from "react";

interface CreateModalProps {

}

export default function CreateModal(){
    return (
        <div className="modal-overflow">
            <div className="modal-body">
                <h2>Cadastre um novo item no cardaṕio</h2>
                <form className="input-container" action="" method="post">
                    <Input label="title" value={}></Input>
                </form>

            </div>
        </div>
    )
}