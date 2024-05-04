import Simple from "./Simple";
import Vocal from "./Vocal";
import Geste from "./Geste";

export function Quiz({type}){
    return (
        <div>
            { (type === "0") && 
                <div>
                    <Simple />
                </div>
            }
            { type === "10" &&
                <div>
                    <Vocal />
                </div>
            }
            { type === "20" && 
                <div>
                    <Geste />
                </div>
            }
        </div>
    )
}